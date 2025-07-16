import { Cell, ImagePreview, Toast } from "@react-vant-next/ui";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
];

export default function ConfigExample() {
  return (
    <>
      <Cell
        title="指定初始位置"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2 })}
      />
      <Cell
        title="展示关闭按钮"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
      />
      <Cell
        title="只允许点击关闭按钮关闭"
        isLink
        onClick={() =>
          ImagePreview.open({ images, closeable: true, closeOnlyClickCloseIcon: true })}
      />
      <Cell
        title="监听关闭事件"
        isLink
        onClick={() =>
          ImagePreview.open({
            images,
            startPosition: 2,
            onClose: () => {
              Toast.info("关闭预览");
            },
          })}
      />
      <Cell
        title="展示指示点"
        isLink
        onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
      />
    </>
  );
};
