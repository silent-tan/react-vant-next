import type { SwiperItemInstance, SwiperItemProps } from "./PropsType";
import { useInViewport } from "@react-vant-next/hooks";
import { createNamespace } from "@react-vant-next/utils";
import cls from "clsx";
import React from "react";

const [bem] = createNamespace("swiper-item");

function SwiperItem({ ref, ...props }: SwiperItemProps & { ref?: React.RefObject<SwiperItemInstance | null> }) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    self: wrapperRef.current,
  }));

  const [show] = useInViewport(wrapperRef, {
    rootMargin: "-0.1px",
    threshold: 0,
    root: () => props.trackRef?.current,
  });

  return (
    <div
      ref={wrapperRef}
      className={cls(
        props.className,
        bem({
          hidden: props.autoHeight && show === false,
        }),
      )}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default SwiperItem;
