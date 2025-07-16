import type React from "react";

export interface ScrollEventParams {
  scrollTop: number;
  isFixed: boolean;
}

export type StickyPosition = "top" | "bottom";

export interface StickyProps {
  /** 吸顶时的 z-index */
  zIndex?: number | string;
  /**
   * 吸附位置，可选值为 bottom
   * @default 'top'
   */
  position?: StickyPosition;
  container?: React.RefObject<HTMLElement>;
  /** 吸顶/吸底时与容器的距离，支持 px vw vh rem 单位，默认 px */
  offset?: number | string;
  /** 滚动时触发 */
  onScroll?: (e: ScrollEventParams) => void;
  /** 当吸顶状态改变时触发 */
  onChange?: (isFixed: boolean) => void;
  children?: React.ReactNode;
}
