import _Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import "./style/index.less";

const Radio = Object.assign(_Radio, { Group: RadioGroup });
export { Radio, RadioGroup };
export type { RadioGroupProps, RadioProps } from "./PropsType";
