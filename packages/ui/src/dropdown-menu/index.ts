import _DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import "./style/index.less";

const DropdownMenu = Object.assign(_DropdownMenu, { Item: DropdownMenuItem });
export { DropdownMenu };
export default DropdownMenu;
export type {
  DropdownItemOption,
  DropdownMenuDirection,
  DropdownMenuInstance,
} from "./PropsType";
