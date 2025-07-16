import _Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";
import "./style/index.less";

const Checkbox = Object.assign(_Checkbox, { Group: CheckboxGroup });

export default Checkbox;
export { Checkbox, CheckboxGroup };
export type {
  CheckboxGroupInstance,
  CheckboxGroupProps,
  CheckboxGroupToggleAllOptions,
  CheckboxInstance,
  CheckboxProps,
} from "./PropsType";
