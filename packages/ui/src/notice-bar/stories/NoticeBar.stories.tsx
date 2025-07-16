import type { Meta, StoryObj } from "@storybook/react-vite";
import type { NoticeBarInstance } from "../PropsType";
import { VolumeO } from "@react-vant-next/icons";
import { useRef } from "react";
import { Button } from "../../button";
import VerticalScrollExample from "../demo/vertical";
import { NoticeBar } from "../index";

const meta = {
  id: "components-notice-bar",
  title: "Display/NoticeBar",
  component: NoticeBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于循环播放展示一组消息通知。",
      },
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    style: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
    },
    text: {
      description: "通知文本内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "''" },
      },
      control: "text",
    },

    // 外观
    color: {
      description: "通知文本颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#f60" },
      },
      control: "color",
    },
    background: {
      description: "滚动条背景",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#fff7cc" },
      },
      control: "color",
    },
    leftIcon: {
      description: "左侧图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },
    rightIcon: {
      description: "自定义右侧图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },
    mode: {
      description: "通知栏模式，可选值为 `closeable` `link`",
      table: {
        category: "外观",
        type: { summary: "'' | 'closeable' | 'link'" },
        defaultValue: { summary: "''" },
      },
      control: "select",
      options: ["", "closeable", "link"],
    },

    // 状态
    scrollable: {
      description: "是否开启滚动播放，内容长度溢出时默认开启",
      table: {
        category: "状态",
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    wrapable: {
      description: "是否开启文本换行，只在禁用滚动时生效",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    speed: {
      description: "滚动速率 (px/s)",
      table: {
        category: "状态",
        type: { summary: "number | string" },
        defaultValue: { summary: "60" },
      },
      control: { type: "number" },
    },
    delay: {
      description: "动画延迟时间 (s)",
      table: {
        category: "状态",
        type: { summary: "number | string" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number" },
    },

    // 事件
    onClose: {
      description: "关闭通知栏时触发",
      table: {
        category: "事件",
        type: { summary: "function" },
      },
      action: "onClose",
    },
    onClick: {
      description: "点击通知栏时触发",
      table: {
        category: "事件",
        type: { summary: "function" },
      },
      action: "onClick",
    },
    onReplay: {
      description: "每当滚动栏重新开始滚动时触发",
      table: {
        category: "事件",
        type: { summary: "function" },
      },
      action: "onReplay",
    },
  },
} satisfies Meta<typeof NoticeBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => (
    <NoticeBar
      leftIcon={<VolumeO />}
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `text` 属性设置通知栏的内容，通过 `leftIcon` 属性设置通知栏左侧的图标。",
      },
    },
  },
};

// 滚动播放
export const Scrollable: Story = {
  name: "滚动播放",
  render: _args => (
    <NoticeBar scrollable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
  ),
  parameters: {
    docs: {
      description: {
        story: "通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制是否开启滚动播放。",
      },
    },
  },
};

// 多行展示
export const Wrapable: Story = {
  name: "多行展示",
  render: _args => (
    <NoticeBar wrapable scrollable={false} text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
  ),
  parameters: {
    docs: {
      description: {
        story: "文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。",
      },
    },
  },
};

// 通知栏模式
export const Mode: Story = {
  name: "通知栏模式",
  render: _args => (
    <>
      <NoticeBar mode="closeable" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
      <NoticeBar mode="link" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "通知栏支持 `closeable` 和 `link` 两种模式。",
      },
    },
  },
};

// 自定义样式
export const CustomStyle: Story = {
  name: "自定义样式",
  render: _args => (
    <NoticeBar
      color="#3f45ff"
      background="#edeeff"
      text="技术是开发它的人的共同灵魂。"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。",
      },
    },
  },
};

// 垂直滚动
export const VerticalScroll: Story = {
  name: "垂直滚动",
  render: () => <VerticalScrollExample />,
  parameters: {
    docs: {
      description: {
        story: "搭配 NoticeBar 和 Swiper 组件可以实现垂直滚动的效果。",
      },
      source: {
        language: "tsx",
        code: `
import { VolumeO } from "@react-vant-next/icons";
import { NoticeBar, Swiper } from "@react-vant-next/ui";
import "./style.less";

export default function VerticalScrollExample() {
  return (
    <div className="demo-notice-bar">
      <NoticeBar leftIcon={<VolumeO />}>
        <Swiper
          autoplay={3000}
          indicator={false}
          vertical
          className="notice-swipe"
        >
          <Swiper.Item>内容 1</Swiper.Item>
          <Swiper.Item>内容 2</Swiper.Item>
          <Swiper.Item>内容 3</Swiper.Item>
        </Swiper>
      </NoticeBar>
    </div>
  );
};
`,
      },
    },
  },
};

// 实例方法组件
function InstanceMethodExample() {
  const noticeBarRef = useRef<NoticeBarInstance>(null);

  const reset = () => {
    noticeBarRef.current?.reset();
  };

  return (
    <div style={{ width: 320 }}>
      <NoticeBar
        ref={noticeBarRef}
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <Button type="primary" size="small" onClick={reset}>
          重置
        </Button>
      </div>
    </div>
  );
}

// 实例方法
export const InstanceMethod: Story = {
  name: "实例方法",
  render: () => <InstanceMethodExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 ref 可以获取到 NoticeBar 实例并调用实例方法，比如重置通知栏到初始状态。",
      },
      source: {
        language: "tsx",
        code: `
import { useRef } from "react";
import { NoticeBar, Button } from "@react-vant-next/ui";
import type { NoticeBarInstance } from "@react-vant-next/ui";

function InstanceMethodExample() {
  const noticeBarRef = useRef<NoticeBarInstance>(null);

  const reset = () => {
    noticeBarRef.current?.reset();
  };

  return (
    <div>
      <NoticeBar
        ref={noticeBarRef}
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <Button type="primary" size="small" onClick={reset}>
          重置
        </Button>
      </div>
    </div>
  );
}`,
      },
    },
  },
};
