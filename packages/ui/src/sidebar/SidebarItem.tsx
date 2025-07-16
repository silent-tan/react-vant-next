import type { SidebarItemProps, SidebarProvide } from "./PropsType";
import { createNamespace } from "@react-vant-next/utils";
import cls from "clsx";
import React from "react";
import Badge from "../badge";

const [bem] = createNamespace("sidebar-item");

const SidebarItem: React.FC<SidebarItemProps & SidebarProvide> = (props) => {
  const { parent, index } = props;

  const onClick = () => {
    if (props.disabled) {
      return;
    }

    props.onClick?.(index);
    parent.setActive(index);
  };

  const { dot, badge, title, disabled } = props;
  const selected = index === parent.getActive();
  return (
    <div>
      <a className={cls(bem({ select: selected, disabled }))} onClick={onClick}>
        <Badge dot={dot} content={badge} className={cls(bem("text"))}>
          {title}
        </Badge>
      </a>
    </div>
  );
};

export default SidebarItem;
