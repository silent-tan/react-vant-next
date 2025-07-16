import type React from "react";
import type { BaseTypeProps } from "../shared";

export interface LazyloadProps extends BaseTypeProps {
  /** 占位容器高度 */
  height?: number | string;
  /** 自定义占位符 */
  placeholder?: React.ReactNode;
}
