import _ActionBar from "./ActionBar";
import ActionBarButton from "./ActionBarButton";
import ActionBarIcon from "./ActionBarIcon";
import "./style/index.less";

const ActionBar = Object.assign(_ActionBar, {
  Icon: ActionBarIcon,
  Button: ActionBarButton,
});

export default ActionBar;
export { ActionBar };
export type {
  ActionBarButtonProps,
  ActionBarIconProps,
  ActionBarProps,
} from "./PropsType";
