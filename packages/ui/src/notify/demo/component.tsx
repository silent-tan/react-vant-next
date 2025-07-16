import { Bell, Close } from "@react-vant-next/icons";
import { Cell, Flex, Notify } from "@react-vant-next/ui";
import { useState } from "react";

export default function ComponentUsageExample() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      <Notify visible={visible} type="success">
        <Flex style={{ width: "100%" }} align="center" justify="between">
          <div />
          <div>
            <Bell style={{ marginRight: 4 }} />
            <span>通知内容</span>
          </div>
          <Close onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};
