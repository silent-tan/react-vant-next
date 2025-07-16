import { Checkbox } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <div className="demo-checkbox">
      <Checkbox.Group defaultValue={[]} direction="horizontal">
        <Checkbox name="a">复选框a</Checkbox>
        <Checkbox name="b">复选框b</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
