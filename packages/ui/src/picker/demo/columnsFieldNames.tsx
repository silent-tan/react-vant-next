import { Picker } from "@react-vant-next/ui";
import { useState } from "react";
import { fieldNamesData } from "./data";

export default function ColumnsFieldNamesPicker() {
  const [value, setValue] = useState(["福建", "福州", "台江区"]);
  return (
    <Picker
      title="标题"
      value={value}
      onChange={setValue}
      columns={fieldNamesData}
      columnsFieldNames={{
        text: "cityName",
        children: "cities",
      }}
    />
  );
};
