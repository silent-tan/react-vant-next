import _Flex from "./Flex";
import FlexItem from "./FlexItem";
import "./style/index.less";

const Flex = Object.assign(_Flex, { Item: FlexItem });
export { Flex };
export default Flex;
export type { FlexItemProps, FlexProps } from "./PropsType";
