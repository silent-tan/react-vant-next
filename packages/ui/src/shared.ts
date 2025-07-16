import type { CSSProperties, ReactNode } from "react";

export interface BaseTypeProps {
  /** 样式 */
  style?: CSSProperties;
  /** 类名 */
  className?: string;
  /** 子节点 */
  children?: ReactNode;
}

export type TeleportType = HTMLElement | (() => HTMLElement) | null;
