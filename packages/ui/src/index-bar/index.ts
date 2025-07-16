import IndexAnchor from "./IndexAnchor";
import _IndexBar from "./IndexBar";
import "./style/index.less";

const IndexBar = Object.assign(_IndexBar, { Anchor: IndexAnchor });
export { IndexAnchor, IndexBar };
export type {
  IndexAnchorProps,
  IndexBarInstance,
  IndexBarProps,
} from "./PropsType";
