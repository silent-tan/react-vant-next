import type { GridItemProps, GridProps } from "./PropsType";
import { addUnit, createNamespace, devWarning } from "@react-vant-next/utils";
import cls from "clsx";
import React, { useMemo } from "react";
import Badge from "../badge";
import { BORDER } from "../constants";

export interface InternalProps {
  parent?: GridProps;
  index?: number;
}

const [bem] = createNamespace("grid-item");

const GridItem: React.FC<GridItemProps & InternalProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const { index = 0, parent = {} } = props;
  if (!parent) {
    if (process.env.NODE_ENV !== "production") {
      devWarning("GridItem", " <GridItem> must be a child component of <Grid>.");
    }
  }

  const rootStyle = useMemo(() => {
    const percent = `${100 / +parent.columnNum}%`;
    const internalStyle: React.CSSProperties = {
      ...style,
      flexBasis: percent,
    };

    if (parent.square) {
      internalStyle.paddingTop = percent;
    }
    else if (parent.gutter) {
      const gutterValue = addUnit(parent.gutter);
      internalStyle.paddingRight = gutterValue;

      if (index >= parent.columnNum) {
        internalStyle.marginTop = gutterValue;
      }
    }

    return internalStyle;
  }, [parent.columnNum, parent.gutter, parent.square, index, style]);

  const contentStyle = useMemo(() => {
    if (parent.square && parent.gutter) {
      const gutterValue = addUnit(parent.gutter);
      return {
        ...props.contentStyle,
        right: gutterValue,
        bottom: gutterValue,
        height: "auto",
      };
    }
    return props.contentStyle;
  }, [parent.square, parent.gutter, props.contentStyle]);

  const renderIcon = () => {
    if (props.icon) {
      return (
        <Badge {...props.badge}>
          {React.cloneElement<any>(props.icon as React.ReactElement, {
            className: cls(bem("icon")),
            color: props.iconColor,
            style: {
              fontSize: parent.iconSize,
            },
          })}
        </Badge>
      );
    }

    return null;
  };

  const renderText = () => {
    if (React.isValidElement(props.text)) {
      return props.text;
    }
    if (props.text) {
      return <span className={cls(bem("text"))}>{props.text}</span>;
    }
    return null;
  };

  const renderContent = () => {
    if (children) {
      return children;
    }
    return (
      <>
        {renderIcon()}
        {renderText()}
      </>
    );
  };

  const { center, border, square, gutter, reverse, direction } = parent;

  const classes = cls(
    props.contentClassName,
    bem("content", [
      direction,
      {
        center,
        square,
        reverse,
        clickable: !!props.onClick,
        surround: border && gutter,
      },
    ]),
    { [BORDER]: border },
  );

  return (
    <div className={cls(className, bem({ square }))} style={rootStyle}>
      <div
        role={props.onClick ? "button" : undefined}
        className={classes}
        style={contentStyle}
        onClick={props.onClick}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default GridItem;
