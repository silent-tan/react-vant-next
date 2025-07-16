import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import { Tabbar } from "@react-vant-next/ui";

export default function BaseDemo() {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
      </Tabbar>
    </div>
  );
};
