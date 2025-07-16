import { ShopO } from "@react-vant-next/icons";
import { Cell } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <Cell title="单元格" icon={<ShopO />}>
      <div>自定义内容</div>
    </Cell>
  );
};
