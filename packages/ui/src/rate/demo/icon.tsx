import { Fire, FireO } from "@react-vant-next/icons";
import { Rate } from "@react-vant-next/ui";
import { useState } from "react";

export default function IconRate() {
  const [value, setValue] = useState(3);
  return (
    <Rate
      icon={<Fire />}
      voidIcon={<FireO />}
      value={value}
      onChange={setValue}
    />
  );
};
