import type { ButtonProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { use } from "react";
import { BORDER_SURROUND, SHADOW, WHITE } from "../constants";
import Loading from "../loading";
import ButtonContext from "./ButtonContext";

const [bem] = createNamespace("button");

const Button: React.FC<ButtonProps> = (props) => {
  const {
    color,
    loading,
    className,
    hairline,
    loadingText,
    round,
    square,
    plain: _plain,
    block: _block,
    loadingType,
    shadow,
    nativeType: _nativeType,
    iconPosition: _iconPosition,
    ...restProps
  } = props;

  const { parent } = use(ButtonContext);

  const size = React.useMemo(
    () => props.size || parent?.size || "normal",
    [parent?.size, props.size],
  );

  const type = React.useMemo(
    () => props.type || parent?.type || "default",
    [parent?.type, props.type],
  );

  const plain = React.useMemo(
    () => _plain ?? parent?.plain,
    [parent?.plain, _plain],
  );

  const block = React.useMemo(
    () => _block ?? parent?.block,
    [parent?.block, _block],
  );

  const iconPosition = React.useMemo(
    () => _iconPosition || parent?.iconPosition || "left",
    [parent?.iconPosition, _iconPosition],
  );

  const disabled = React.useMemo(
    () => props.disabled ?? parent?.disabled,
    [parent?.disabled, props.disabled],
  );

  const nativeType = React.useMemo(
    () => _nativeType || parent?.nativeType || "button",
    [parent?.nativeType, _nativeType],
  );

  const tag = React.useMemo(
    () => props.tag || parent?.tag || "button",
    [parent?.tag, props.tag],
  );

  const TagElement = tag as React.ElementType;

  const classes = clsx(
    className,
    bem([
      type,
      size,
      {
        plain,
        loading,
        disabled,
        hairline,
        block,
        round,
        square,
      },
    ]),
    { [BORDER_SURROUND]: hairline },
    shadow && `${SHADOW}--${+shadow}`,
  );

  const style: Record<string, string | number> = { ...props.style };

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    }

    // hide border when color is linear-gradient
    if (color.includes("gradient")) {
      style.border = 0;
    }
    else {
      style.borderColor = color;
    }
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  };

  const renderLoadingIcon = () => {
    if (loading) {
      const { loadingSize = "20px" } = props;
      return (
        <Loading
          className={clsx(bem("loading"))}
          size={loadingSize}
          type={loadingType}
          color={type === "default" ? undefined : ""}
        />
      );
    }
    return null;
  };

  const renderIcon = () => {
    if (props.loading) {
      return renderLoadingIcon();
    }

    if (props.icon) {
      const icon = props.icon as React.ReactElement;

      return <icon.type {...icon.props as any} className={clsx(bem("icon"), (icon.props as any).className)} />;
    }

    return null;
  };

  const renderText = () => {
    let text: React.ReactNode;
    if (loading) {
      text = loadingText;
    }
    else {
      text = props.children || props.text;
    }

    if (text) {
      return (
        <span key="text" className={clsx(bem("text"))}>
          {text}
        </span>
      );
    }
    return null;
  };

  const renderContent = () => (
    <div className={clsx(bem("content"))}>
      {iconPosition === "left" && renderIcon()}
      {renderText()}
      {iconPosition === "right" && renderIcon()}
    </div>
  );

  return (
    <TagElement
      {...restProps}
      disabled={disabled}
      className={classes}
      style={style}
      type={nativeType}
      onClick={onClick}
    >
      {renderContent()}
    </TagElement>
  );
};

export default Button;
