import { Cell } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <Cell.Group>
      <Cell title="单元格" value="内容" />
      <Cell title="单元格" value="内容" label="描述信息" />
    </Cell.Group>
  );
};
