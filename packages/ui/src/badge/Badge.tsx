import type { CSSProperties } from "react";
import type { BadgeProps } from "./PropsType";
import { addUnit, createNamespace, isDef, isNumeric, mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";
import React from "react";

const [bem] = createNamespace("badge");

const Badge: React.FC<BadgeProps> = (p) => {
  const props = mergeProps(p, {
    tag: "div",
    showZero: true,
  });
  const { content, max, dot, showZero, tag = "div" } = props;

  const TagElement = tag as React.ElementType;

  const hasContent = () => {
    if (props.content) {
      return true;
    }
    return isDef(content) && content !== "" && (showZero || Number(content) !== 0);
  };

  const renderContent = () => {
    if (!dot && hasContent()) {
      if (isDef(max) && isNumeric(content?.toString()) && Number(content) > Number(max)) {
        return `${max}+`;
      }

      return content;
    }
    return null;
  };

  const renderBadge = () => {
    if (hasContent() || props.dot) {
      let style: CSSProperties = {
        background: props.color,
      };

      if (props.offset) {
        const [x, y] = props.offset;

        if (props.children) {
          style.top = addUnit(y);
          style.right = addUnit(x);
        }
        else {
          style.marginTop = addUnit(y);
          style.marginLeft = addUnit(x);
        }
      }

      if (!props.children) {
        style = { ...props.style, ...style };
      }
      return (
        <div
          className={clsx(
            {
              [props.className]: props.className && !props.children,
            },
            bem({ dot: props.dot, fixed: !!props.children }),
          )}
          style={style}
        >
          {renderContent()}
        </div>
      );
    }
    return null;
  };

  if (props.children) {
    return (
      <TagElement
        className={clsx(bem("wrapper"), props.className)}
        style={props.style}
        onClick={props.onClick}
        onTouchStart={props.onTouchStart}
      >
        {props.children}
        {renderBadge()}
      </TagElement>
    );
  }

  return renderBadge();
};

export default Badge;
