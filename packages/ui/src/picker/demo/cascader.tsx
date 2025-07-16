import { Picker } from "@react-vant-next/ui";
import { useState } from "react";
import { cascaderData } from "./data";

export default function CascaderPicker() {
  const [value, setValue] = useState(["2", "2-2", "2-2-2"]);
  return <Picker value={value} onChange={setValue} columns={cascaderData} />;
};
