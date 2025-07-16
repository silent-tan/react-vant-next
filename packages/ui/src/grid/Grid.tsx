import type { InternalProps } from "./GridItem";
import type { GridItemProps, GridProps } from "./PropsType";
import { addUnit, createNamespace, mergeProps } from "@react-vant-next/utils";

import cls from "clsx";
import React from "react";
import { BORDER_TOP } from "../constants";

const [bem] = createNamespace("grid");

const Grid: React.FC<GridProps> = ({ children, className, style, ...p }) => {
  const props = mergeProps(p, {
    center: true,
    border: true,
    columnNum: 4,
  });
  return (
    <div
      style={{ paddingLeft: addUnit(props.gutter), ...style }}
      className={cls(className, bem(), {
        [BORDER_TOP]: props.border && !props.gutter,
      })}
    >
      {React.Children.toArray(children)
        .filter(Boolean)
        .map((child: React.ReactElement, index: number) =>
          React.cloneElement<GridItemProps & InternalProps>(child, {
            index,
            parent: props,
          }),
        )}
    </div>
  );
};

Grid.displayName = "Grid";

export default Grid;
