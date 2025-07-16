import _Steps from "./Steps";
import StepsItem from "./StepsItem";
import "./style/index.less";

const Steps = Object.assign(_Steps, { Item: StepsItem });
export { Steps, StepsItem };
export type { StepsProps } from "./PropsType";
