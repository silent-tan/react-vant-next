import _Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";
import "./style/index.less";

const Sidebar = Object.assign(_Sidebar, { Item: SidebarItem });
export { Sidebar, SidebarItem };
export type { SidebarItemProps, SidebarProps } from "./PropsType";
