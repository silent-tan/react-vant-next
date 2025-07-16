import Popup from "./Popup";
import PopupContext from "./PopupContext";
import { sharedPopupProps } from "./shared-props";
import "./style/index.less";

export default Popup;
export { Popup, PopupContext, sharedPopupProps };
export type {
  PopupCloseIconPosition,
  PopupPosition,
  PopupProps,
  SharedPopupProps,
} from "./PropsType";
