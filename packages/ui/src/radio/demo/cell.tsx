import { ShopO } from "@react-vant-next/icons";
import { Cell, Radio } from "@react-vant-next/ui";
import { useState } from "react";

export default function CellRadio() {
  const [cellValue, setCellValue] = useState("");
  return (
    <Radio.Group value={cellValue}>
      <Cell.Group>
        <Cell
          clickable
          title="单选框1"
          icon={<ShopO />}
          onClick={() => setCellValue("1")}
          rightIcon={<Radio name="1" />}
        />
        <Cell
          clickable
          title="单选框2"
          icon={<ShopO />}
          onClick={() => setCellValue("2")}
          rightIcon={<Radio name="2" />}
        />
      </Cell.Group>
    </Radio.Group>
  );
};
