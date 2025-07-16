import { Cell, Popup } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="标题弹框" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        title="标题"
        description="这是一段很长很长的描述这是一段很长很长的描述这是一段很长很长的描述这是一段很长很长的描述"
        style={{ height: "30%" }}
        position="bottom"
        round
        onClose={() => setVisible(false)}
      />
    </>
  );
};
