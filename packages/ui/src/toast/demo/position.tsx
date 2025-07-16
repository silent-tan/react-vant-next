import { Cell, Toast } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <>
      <Cell
        title="顶部展示"
        isLink
        onClick={() =>
          Toast({
            message: "顶部展示",
            position: "top",
          })}
      />
      <Cell
        title="底部展示"
        isLink
        onClick={() =>
          Toast({
            message: "底部展示",
            position: "bottom",
          })}
      />
    </>
  );
};
