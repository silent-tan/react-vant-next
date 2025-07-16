import { NavBar, Toast } from "@react-vant-next/ui";

export default function BaseDemo() {
  return (
    <NavBar
      title="标题"
      leftText="返回"
      rightText="按钮"
      onClickLeft={() => Toast("返回")}
      onClickRight={() => Toast("按钮")}
    />
  );
};
