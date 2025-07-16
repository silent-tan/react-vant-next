import _Tabbar from "./Tabbar";
import TabbarItem from "./TabbarItem";
import "./style/index.less";

const Tabbar = Object.assign(_Tabbar, { Item: TabbarItem });
export { Tabbar, TabbarItem };
export type { TabbarItemProps, TabbarProps } from "./PropsType";
