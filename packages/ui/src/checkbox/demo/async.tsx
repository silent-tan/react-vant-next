import { Checkbox, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(false);

  return (
    <div className="demo-checkbox">
      <Checkbox
        checked={value}
        onChange={(val) => {
          Toast.loading({ forbidClick: true, duration: 0 });

          setTimeout(() => {
            Toast.clear();
            setValue(val);
          }, 500);
        }}
      >
        复选框
      </Checkbox>
    </div>
  );
};
