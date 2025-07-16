import { ShopO, WarningO } from "@react-vant-next/icons";
import { Cell, Field, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default function IconDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <>
      <Cell.Group>
        <Field
          value={value1}
          onChange={setValue1}
          label="文本"
          leftIcon={<ShopO />}
          rightIcon={<WarningO />}
          placeholder="显示图标"
          onClickLeftIcon={() => Toast.info("左侧图标点击")}
          onClickRightIcon={() => Toast.info("右侧图标点击")}
        />
        <Field
          value={value2}
          onChange={setValue2}
          clearable
          label="文本"
          leftIcon={<ShopO />}
          placeholder="显示清除图标"
        />
      </Cell.Group>
    </>
  );
};
