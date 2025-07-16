import type { NotifyPrivateProps, NotifyProps } from "./PropsType";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import cls from "clsx";
import React from "react";
import Popup from "../popup";

const [bem] = createNamespace("notify");

const Notify: React.FC<NotifyProps & NotifyPrivateProps> = ({
  children,
  ...p
}) => {
  const props = mergeProps(p, {
    type: "danger",
    duration: 3000,
    color: "white",
    lockScroll: false,
  });
  const style = {
    color: props.color,
    background: props.background,
  };

  return (
    <Popup
      visible={props.visible}
      style={style}
      overlay={false}
      position="top"
      lockScroll={props.lockScroll}
      onClick={props.onClick}
      onClose={props.onClose}
      onClosed={props.onClosed}
      teleport={props.teleport}
    >
      <div className={cls(bem([props.type]), props.className)}>
        {children || props.message}
      </div>
    </Popup>
  );
};

export default Notify;
