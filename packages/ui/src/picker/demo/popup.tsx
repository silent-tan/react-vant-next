import { Field, Picker } from "@react-vant-next/ui";
import { useState } from "react";

const columns = [
  "南京",
  "苏州",
  "常州",
  "淮安",
  "扬州",
  "南通",
  "宿迁",
  "泰州",
  "无锡",
];

export default function PopupPicker() {
  const [value, setValue] = useState("宿迁");
  return (
    <Picker
      popup={{
        round: true,
      }}
      value={value}
      title="标题"
      columns={columns}
      onConfirm={setValue}
    >
      {(val: string, _, actions) => {
        return (
          <Field
            readOnly
            clickable
            label="选择城市"
            value={val || ""}
            placeholder="请选择城市"
            onClick={() => actions.open()}
          />
        );
      }}
    </Picker>
  );
};
