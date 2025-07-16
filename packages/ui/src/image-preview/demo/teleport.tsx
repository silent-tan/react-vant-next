import { Cell, ImagePreview } from "@react-vant-next/ui";
import React from "react";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
];

export default function TeleportExample() {
  const ref = React.useRef(null);
  return (
    <>
      <Cell
        title="指定挂载节点"
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <div ref={ref} />
    </>
  );
};
