import { Cell, Popup } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="展示弹出层" isLink onClick={() => setVisible(true)} />
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <div style={{ padding: "30px 50px" }}>内容</div>
      </Popup>
    </>
  );
};
