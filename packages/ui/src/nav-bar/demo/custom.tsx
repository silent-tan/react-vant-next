import { Search } from "@react-vant-next/icons";
import { NavBar, Toast } from "@react-vant-next/ui";

export default function CustomDemo() {
  return (
    <NavBar
      title="标题"
      leftText="返回"
      onClickLeft={() => Toast("返回")}
      rightText={<Search fontSize={20} />}
      onClickRight={() => Toast("按钮")}
    />
  );
};
