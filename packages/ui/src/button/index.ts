import _Button from "./Button";
import Group from "./ButtonGroup";
import "./style/index.less";

const Button = Object.assign(_Button, { Group });

export default Button;
export { Button };
export type {
  ButtonIconPosition,
  ButtonProps,
  ButtonSize,
  ButtonType,
} from "./PropsType";
