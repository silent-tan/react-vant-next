import type React from "react";
import type { BaseTypeProps, TeleportType } from "../shared";

export interface IndexBarProps extends BaseTypeProps {
  /** z-index 层级 */
  zIndex?: number | string;
  /** 索引字符高亮颜色 */
  highlightColor?: string;
  /**
   * 是否开启锚点自动吸顶
   * @default true
   */
  sticky?: boolean;
  /** 锚点自动吸顶时与顶部的距离 */
  stickyOffsetTop?: number;
  /**
   * 索引字符列表
   * @default `A-Z[]`
   */
  indexList?: Array<number | string>;
  itemRender?: (item: number | string, active: boolean) => React.ReactNode;
  /** 当前高亮的索引字符变化时触发 */
  onChange?: (value: number | string) => void;
  /** 点击索引栏的字符时触发 */
  onSelect?: (value: number | string) => void;
  /** 指定索引栏挂载的节点 */
  teleport?: TeleportType;
  children?: React.ReactNode;
}

export interface IndexAnchorProps extends BaseTypeProps {
  /** 索引字符 */
  index: number | string;
  children?: React.ReactNode;
}

export interface IndexAnchorInstance {
  /** 滚动到指定锚点 */
  getRect: (scrollParent: Element | Window, scrollParentRect: any) => void;
  state: {
    top: number;
    left: number;
    rect: { top: number; height: number };
    width: number;
    active: boolean;
  };
  updateState: (state: IndexAnchorInstance["state"]) => void;
  root: React.RefObject<HTMLDivElement>;
}

export interface IndexBarInstance {
  /** 滚动到指定锚点 */
  scrollTo: (index: number | string) => void;
}
