import { Uploader } from "@react-vant-next/ui";
import "./style.less";

const defaultValue = [
  {
    url: "https://img.yzcdn.cn/vant/sand.jpg", // 图片文件
  },
  {
    url: "https://img.yzcdn.cn/vant/sand.text", // 其他文件
  },
];

export default function BasicExample() {
  return (
    <Uploader
      accept="*"
      defaultValue={defaultValue}
      onChange={v => console.log(v)}
    />
  );
};
