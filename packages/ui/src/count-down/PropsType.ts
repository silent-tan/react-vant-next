import type { CurrentTime } from "@react-vant-next/hooks";
import type React from "react";
import type { BaseTypeProps } from "../shared";

export type CountDownCurrentTime = CurrentTime;

export interface CountDownInstance {
  /** 开始倒计时 */
  start: () => void;
  /** 暂停倒计时 */
  pause: () => void;
  /** 重设倒计时，若 autoStart 为 true，重设后会自动开始倒计时 */
  reset: () => void;
}

export interface CountDownProps extends Omit<BaseTypeProps, "children"> {
  /**
   * 是否自动开始倒计时
   * @default true
   */
  autoStart?: boolean;
  /**
   * 是否开启毫秒级渲染
   */
  millisecond?: boolean;
  /**
   * 倒计时时长，单位毫秒
   * @default 0
   */
  time?: number | string;
  /**
   * 时间格式
   * @default 'HH:mm:ss'
   */
  format?: string;
  /** 倒计时变化时触发 */
  onChange?: (currentTime: CurrentTime) => void;
  /** 倒计时结束时触发 */
  onFinish?: () => void;
  children?: (currentTime: CurrentTime) => React.ReactNode;
}
