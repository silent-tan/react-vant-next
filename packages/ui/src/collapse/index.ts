import _Collapse from "./Collapse";
import CollapseItem from "./CollapseItem";
import "./style/index.less";

const Collapse = Object.assign(_Collapse, { Item: CollapseItem });
export default Collapse;
export { Collapse, CollapseItem };
export type { CollapseItemProps, CollapseProps } from "./PropsType";
