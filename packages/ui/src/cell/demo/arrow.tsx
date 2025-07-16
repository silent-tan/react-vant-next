import { Cell } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <>
      <Cell title="单元格" isLink />
      <Cell title="单元格" isLink value="内容" />
      <Cell title="单元格" isLink arrowDirection="down" value="内容" />
    </>
  );
};
