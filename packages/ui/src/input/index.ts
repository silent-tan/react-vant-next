import TextArea from "../text-area";
import _Input from "./Input";
import "./style/index.less";

const Input = Object.assign(_Input, { TextArea });

export default Input;
export { Input };
export type { TextAreaInstance, TextAreaProps } from "../text-area/PropsType";

export type { InputInstance, InputProps } from "./PropsType";
