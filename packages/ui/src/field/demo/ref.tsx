import type { FieldInstance } from "@react-vant-next/ui";
import { Button, Field } from "@react-vant-next/ui";
import React, { useRef } from "react";

export default function RefDemo() {
  const fieldRef = useRef<FieldInstance>(null);

  return (
    <Field
      center
      ref={fieldRef}
      placeholder="请输入文本"
      label="文本"
      suffix={(
        <Button
          size="small"
          onClick={() => {
            fieldRef?.current?.focus();
          }}
        >
          聚焦
        </Button>
      )}
    />
  );
};
