import type { ActionBarButtonProps } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { use, useMemo } from "react";
import Button from "../button";
import ActionBarContext from "./ActionBarContext";

const [bem] = createNamespace("action-bar-button");

const ActionBarButton: React.FC<ActionBarButtonProps> = (props) => {
  const { type, icon, text, color, loading, disabled, index } = props;

  const { parent } = use(ActionBarContext);

  const isFirst = useMemo(() => {
    if (parent) {
      const prev = parent.children[index - 1];
      return !(prev && "isButton" in prev.type);
    }
    return false;
  }, [index, parent]);

  const isLast = useMemo(() => {
    if (parent) {
      const next = parent.children[index + 1];
      return !(next && "isButton" in next.type);
    }
    return false;
  }, [index, parent]);

  return (
    <Button
      className={clsx(
        props.className,
        bem([
          type,
          {
            last: isLast,
            first: isFirst,
          },
        ]),
      )}
      style={props.style}
      size="large"
      type={type}
      icon={icon}
      color={color}
      loading={loading}
      disabled={disabled}
      onClick={props.onClick}
    >
      {props.children ? props.children : text}
    </Button>
  );
};

const ActionBarButtonNameSpace = Object.assign(ActionBarButton, {
  isButton: true,
});

export default ActionBarButtonNameSpace;
