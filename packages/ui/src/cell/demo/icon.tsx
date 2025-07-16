import { FireO, LocationO } from "@react-vant-next/icons";
import { Cell } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <>
      <Cell title="单元格" icon={<LocationO />} />
      <Cell title="单元格" icon={<FireO />} />
    </>
  );
};
