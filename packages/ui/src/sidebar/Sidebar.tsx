import type { SidebarItemProps, SidebarProps } from "./PropsType";
import { useMergedState } from "@react-vant-next/hooks";

import { createNamespace, devWarning } from "@react-vant-next/utils";
import cls from "clsx";
import React, { useMemo } from "react";
import SidebarItem from "./SidebarItem";

const [bem] = createNamespace("sidebar");

const Sidebar: React.FC<SidebarProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const [active, updateActive] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue || 0,
  });

  const getActive = () => active;

  const setActive = (value: number) => {
    if (value !== getActive()) {
      updateActive(value);
      props.onChange?.(value);
    }
  };

  const validChildren = useMemo(
    () =>
      React.Children.toArray(children)
        .filter(Boolean)
        .map((child) => {
          if (!React.isValidElement(child))
            return null;
          if (child.type !== SidebarItem) {
            if (process.env.NODE_ENV !== "production") {
              devWarning(
                "Sidebar",
                " <SidebarItem> must be a child component of <Sidebar>.",
              );
            }
            return null;
          }
          return child;
        }),
    [children],
  );

  return (
    <div className={cls(className, bem("wrapper"))} style={style}>
      <div className={cls(props.sideClassName, bem())} style={props.sideStyle}>
        {validChildren.map((child: React.ReactElement, index: number) =>
          React.cloneElement<any>(child, {
            index,
            parent: {
              setActive,
              getActive,
            },
          }),
        )}
      </div>
      {validChildren.map(
        (child: React.ReactElement<SidebarItemProps>, index: number) => {
          return (
            <div
              className={cls(child.props.contentClassName, bem("content"))}
              key={child.key}
              style={{
                ...child.props.contentStyle,
                display: index === getActive() ? undefined : "none",
              }}
            >
              {child.props.children}
            </div>
          );
        },
      )}
    </div>
  );
};

export default Sidebar;
