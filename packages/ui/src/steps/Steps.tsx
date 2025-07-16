import type { StepsProps } from "./PropsType";
import { Checked } from "@react-vant-next/icons";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import cls from "clsx";
import React from "react";

const [bem] = createNamespace("steps");

const Steps: React.FC<StepsProps> = ({ children, className, style, ...p }) => {
  const props = mergeProps(p, {
    active: 0,
    direction: "horizontal",
    activeIcon: <Checked />,
  });
  return (
    <div className={cls(className, bem([props.direction]))} style={style}>
      <div className={cls(bem("items"))}>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child: React.ReactElement, index: number) =>
            React.cloneElement<any>(child, {
              index,
              parent: props,
            }),
          )}
      </div>
    </div>
  );
};

export default Steps;
