import { Cell, Toast } from "@react-vant-next/ui";
import React from "react";

export default () => {
  const onDynicUpdate = () => {
    let remain = 4;
    let timer;
    const update = Toast.info({
      message: `还剩 ${remain + 1} 秒`,
      duration: 5000,
      onClose: () => {
        clearInterval(timer);
      },
    });
    timer = setInterval(() => {
      update.config({ message: `还剩 ${remain--} 秒` });
    }, 1000);
  };

  return (
    <>
      <Cell title="动态更新提示" isLink onClick={onDynicUpdate} />
    </>
  );
};
