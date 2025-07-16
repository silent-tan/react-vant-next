import type { CellGroupProps } from "./PropsType";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import clsx from "clsx";
import React from "react";
import { BORDER_TOP_BOTTOM } from "../constants";

const [bem] = createNamespace("cell-group");

const CellGroup: React.FC<CellGroupProps> = (p) => {
  const props = mergeProps(p, {
    border: true,
  });
  const { title, border, card } = props;
  const inset = card;

  const renderGroup = () => (
    <div
      className={clsx(bem({ inset }), {
        [BORDER_TOP_BOTTOM]: !inset && border,
      })}
    >
      {props.children}
    </div>
  );

  const renderTitle = () => {
    if (title)
      return <div className={clsx(bem("title"))}>{title}</div>;
    return null;
  };

  return (
    <div className={props.className} style={props.style}>
      {renderTitle()}
      {renderGroup()}
    </div>
  );
};

export default CellGroup;
