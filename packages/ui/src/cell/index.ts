import _Cell from "./Cell";
import CellGroup from "./CellGroup";
import "./style/index.less";

const Cell = Object.assign(_Cell, { Group: CellGroup });
export default Cell;
export { Cell, CellGroup };
export type { CellArrowDirection, CellGroupProps, CellProps } from "./PropsType";
