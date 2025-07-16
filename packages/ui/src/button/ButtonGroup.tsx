import type { ButtonContextType, ButtonGroupProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import React from "react";
import { SHADOW } from "../constants";
import ButtonContext from "./ButtonContext";

const [bem] = createNamespace("button-group");

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  style,
  children,
  onClick,
  ...props
}) => {
  const internalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.disabled)
      return;
    onClick?.(e);
  };

  const memoContextValue: ButtonContextType = React.useMemo(() => ({ parent: props }), [props]);

  return (
    <div
      onClick={internalClick}
      style={style}
      className={clsx(
        className,
        bem([
          props.type,
          {
            round: props.round,
            plain: props.plain,
            disabled: props.disabled,
          },
        ]),
        props.shadow && `${SHADOW}--${+props.shadow}`,
      )}
    >
      <ButtonContext value={memoContextValue}>
        {children}
      </ButtonContext>
    </div>
  );
};

export default ButtonGroup;
