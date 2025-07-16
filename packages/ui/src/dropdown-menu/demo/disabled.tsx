import { DropdownMenu } from "@react-vant-next/ui";
import { useState } from "react";
import { option1, option2 } from "./options";

export default function DisabledExample() {
  const [value, setValue] = useState<Record<string, string | number>>({});
  return (
    <DropdownMenu value={value} onChange={v => setValue(v)}>
      <DropdownMenu.Item disabled name="value1" options={option1} />
      <DropdownMenu.Item disabled name="value2" options={option2} />
    </DropdownMenu>
  );
};
