import type { FloatingBallItemProps } from "./PropsType";
import clsx from "clsx";
import { use } from "react";
import FloatingBallContext from "./FloatingBallContext";

export default function FloatingBallItem(props: FloatingBallItemProps) {
  const parent = use(FloatingBallContext);
  const handleItemClick = () => {
    parent?.close();
  };

  return (
    <div
      className={clsx("rv-floating-ball__menu__item")}
      onClick={handleItemClick}
    >
      {props.children}
    </div>
  );
}
