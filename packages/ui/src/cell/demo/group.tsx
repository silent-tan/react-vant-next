import { Cell } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <>
      <Cell.Group title="分组1">
        <Cell title="单元格" value="内容" />
      </Cell.Group>
      <Cell.Group title="分组2">
        <Cell title="单元格" value="内容" />
      </Cell.Group>
    </>
  );
};
