import { Cell, ImagePreview } from "@react-vant-next/ui";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
];

export default function AsyncCloseExample() {
  return (
    <Cell
      title="预览图片"
      isLink
      onClick={() => {
        const destory = ImagePreview.open({ images });
        setTimeout(() => destory(), 2000);
      }}
    />
  );
};
