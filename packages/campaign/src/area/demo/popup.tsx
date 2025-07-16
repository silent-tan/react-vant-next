import { Area } from "@react-vant-next/campaign";
import { Field } from "@react-vant-next/ui";
import { areaList } from "@vant/area-data";
import { useState } from "react";

export default function PopupExample() {
  const [value, setValue] = useState(["220000", "220300", "220303"]);
  return (
    <Area
      popup={{
        round: true,
      }}
      title="标题"
      value={value}
      areaList={areaList}
      onConfirm={setValue}
    >
      {(_, selectRows, actions) => {
        return (
          <Field
            label="选择地区"
            value={selectRows.map(row => row?.text).join(",")}
            onClick={() => actions.open()}
          />
        );
      }}
    </Area>
  );
};
