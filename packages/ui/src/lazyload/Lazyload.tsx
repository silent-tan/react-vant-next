import type { LazyloadProps } from "./PropsType";
import { useInViewport } from "@react-vant-next/hooks";
import { createNamespace, mergeProps } from "@react-vant-next/utils";
import cls from "clsx";
import React, { useRef } from "react";
import Skeleton from "../skeleton";

const [bem] = createNamespace("lazyload");

const Lazyload: React.FC<LazyloadProps> = (p) => {
  const props = mergeProps(p, {
    placeholder: <Skeleton title />,
  });
  const ref = useRef<HTMLDivElement>(void 0);
  const [inViewPort] = useInViewport(ref);

  const { height, placeholder, children, className, style } = props;

  return inViewPort
    ? (
        <div ref={ref} className={cls(bem())} style={{ height, ...style }}>{children}</div>
      )
    : (
        <div
          ref={ref}
          className={cls(bem(), className)}
          style={{ height, ...style }}
        >
          {placeholder}
        </div>
      );
};

export default Lazyload;
