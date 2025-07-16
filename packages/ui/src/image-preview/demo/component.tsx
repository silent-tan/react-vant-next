import { Cell, ImagePreview } from "@react-vant-next/ui";
import React, { useState } from "react";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
];

export default function ComponentCallExample() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </>
  );
};
