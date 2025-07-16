import { ActionSheet, Cell } from "@react-vant-next/ui";
import { useState } from "react";

export default function CustomPanelExample() {
  const [visible, setVisible] = useState(false);
  const onCancel = () => setVisible(false);
  return (
    <>
      <Cell title="自定义面板" isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={onCancel}>
        <div style={{ padding: "16px 16px 160px" }}>内容</div>
      </ActionSheet>
    </>
  );
};
