import type { ActionBarProps } from "./PropsType";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";
import React, { Children, cloneElement, useMemo } from "react";
import ActionBarContext from "./ActionBarContext";

const [bem] = createNamespace("action-bar");

const ActionBar: React.FC<ActionBarProps> = (p) => {
  const props = mergeProps(p, {
    safeAreaInsetBottom: true,
  });
  const children = useMemo(
    () => Children.toArray(props.children).filter(Boolean),
    [props.children],
  );

  const context = useMemo(() => ({ parent: { children } }), [children]);

  return (
    <ActionBarContext value={context}>
      <div
        className={clsx(props.className, bem(), {
          "rv-safe-area-bottom": props.safeAreaInsetBottom,
        })}
        style={props.style}
      >
        {children.map((child: React.ReactElement<any>, index: number) => {
          return cloneElement(child, {
            index,
          });
        })}
      </div>
    </ActionBarContext>
  );
};

export default ActionBar;
