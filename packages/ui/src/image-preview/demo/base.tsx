import { Cell, ImagePreview } from "@react-vant-next/ui";

const images = [
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg",
];

export default function BasicExample() {
  return (
    <Cell
      title="预览图片"
      isLink
      onClick={() =>
        ImagePreview.open({
          images,
          onChange: index => console.log(`当前展示第${index + 1}张`),
        })}
    />
  );
}
