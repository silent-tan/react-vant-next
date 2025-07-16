import { Button } from "@react-vant-next/ui";
import React from "react";
import "./style.less";

export default () => {
  return (
    <div className="demo-button">
      <Button disabled type="primary">
        禁用状态
      </Button>
      <Button disabled type="info">
        禁用状态
      </Button>
    </div>
  );
};
