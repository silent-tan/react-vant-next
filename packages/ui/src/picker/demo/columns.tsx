import { Picker, Toast } from "@react-vant-next/ui";
import { useState } from "react";

export default function ColumnsPicker() {
  const [value, setValue] = useState(["周二", "晚上"]);
  return (
    <Picker
      value={value}
      onChange={(val: string[], _, index) => {
        Toast(`当前值：${val}, 当前索引：${index}`);
        setValue(val);
      }}
      columns={[
        ["周一", "周二", "周三", "周四", "周五"],
        ["上午", "下午", "晚上"],
      ]}
    />
  );
};
