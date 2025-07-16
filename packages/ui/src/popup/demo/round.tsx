import { Cell, Popup } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="圆角弹窗" isLink onClick={() => setVisible(true)} />
      <Popup
        visible={visible}
        closeable
        style={{ height: "30%" }}
        position="bottom"
        round
        onClose={() => setVisible(false)}
      />
    </>
  );
};
