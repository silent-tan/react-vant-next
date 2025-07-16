import { Plus } from "@react-vant-next/icons";
import { Button } from "@react-vant-next/ui";
import React from "react";

import "./style.less";

export default () => {
  return (
    <div className="demo-button">
      <Button icon={<Plus />} type="primary" />
      <Button icon={<Plus />} iconPosition="left" type="primary">
        按钮
      </Button>
    </div>
  );
};
