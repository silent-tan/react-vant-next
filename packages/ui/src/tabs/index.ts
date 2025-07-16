import TabPane from "./TabPane";
import _Tabs from "./Tabs";
import "./style/index.less";

const Tabs = Object.assign(_Tabs, { TabPane });
export default Tabs;
export { Tabs };
export type { TabsInstance, TabsProps } from "./PropsType";
