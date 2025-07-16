import type { BaseTypeProps } from "@react-vant-next/ui";

export interface FloatingPanelProps extends BaseTypeProps {
  anchors?: number[];
  onHeightChange?: (height: number) => void;
}

export interface FloatingPanelInstance {
  moveTo: (height: number) => void;
}
