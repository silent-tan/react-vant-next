import type React from "react";
import type { BaseTypeProps } from "../shared";

export interface ProgressProps extends BaseTypeProps {
  color?: string;
  inactive?: boolean;
  pivotText?: React.ReactNode;
  textColor?: string;
  showPivot?: boolean;
  pivotColor?: string;
  trackColor?: string;
  strokeWidth?: number | string;
  percentage?: string | number;
}
