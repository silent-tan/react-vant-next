import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import { Tabbar } from "@react-vant-next/ui";
import "./style.less";

const icon = {
  active: "https://img.yzcdn.cn/vant/user-active.png",
  inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
};

export default function CustomDemo() {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item
          icon={ac => <img alt="tab" src={ac ? icon.active : icon.inactive} />}
        >
          图标
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>图标</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>图标</Tabbar.Item>
      </Tabbar>
      <br />
      <Tabbar activeColor="#f44336" inactiveColor="#000">
        <Tabbar.Item icon={<HomeO />}>颜色</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>颜色</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>颜色</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>颜色</Tabbar.Item>
      </Tabbar>
    </div>
  );
};
