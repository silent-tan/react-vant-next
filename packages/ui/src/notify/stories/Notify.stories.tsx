import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cell } from "@react-vant-next/ui";
import ComponentUsageExample from "../demo/component";
import Notify from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-notify",
  title: "Feedback/Notify",
  component: Notify,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "在页面顶部展示消息提示，支持函数调用和组件调用两种方式。",
      },
    },
  },
  argTypes: {
    // 基础
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string" },
        required: false,
      },
    },
    teleport: {
      description: "指定挂载的节点",
      table: {
        category: "基础",
        type: { summary: "HTMLElement | () => HTMLElement" },
        defaultValue: { summary: "body" },
        required: false,
      },
    },
    message: {
      control: { type: "text" },
      description: "展示文案，支持通过\\n换行",
      table: {
        category: "基础",
        type: { summary: "string | React.ReactNode" },
        required: false,
      },
    },
    visible: {
      control: { type: "boolean" },
      description: "是否显示通知",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        required: false,
      },
    },
    // 外观
    type: {
      control: { type: "select", options: ["primary", "success", "danger", "warning"] },
      description: "类型，可选值为 primary success warning",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "danger" },
        required: false,
      },
    },
    color: {
      control: { type: "color" },
      description: "字体颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "white" },
        required: false,
      },
    },
    background: {
      control: { type: "color" },
      description: "背景颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        required: false,
      },
    },
    duration: {
      control: { type: "number" },
      description: "展示时长(ms)，值为 0 时，notify 不会消失",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "3000" },
        required: false,
      },
    },
    // 状态
    lockScroll: {
      control: { type: "boolean" },
      description: "是否锁定背景滚动",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    // 事件
    onClick: {
      description: "点击时的回调函数",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
        required: false,
      },
    },
    onClose: {
      description: "关闭时的回调函数",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
    onOpened: {
      description: "完全展示后的回调函数",
      table: {
        category: "事件",
        type: { summary: "() => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Notify>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    return (
      <Cell title="基础用法" isLink onClick={() => Notify.show("通知内容")} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Notify 是一个函数，调用后会直接在页面中弹出相应的消息提示。",
      },
      source: {
        language: "tsx",
        code: `import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return <Cell title="基础用法" isLink onClick={() => Notify.show('通知内容')} />;
};`,
      },
    },
  },
};

// 通知类型
export const NotifyTypes: Story = {
  name: "通知类型",
  render: (_args) => {
    return (
      <>
        <Cell
          title="主要通知"
          isLink
          onClick={() => Notify.show({ type: "primary", message: "通知内容" })}
        />
        <Cell
          title="成功通知"
          isLink
          onClick={() => Notify.show({ type: "success", message: "通知内容" })}
        />
        <Cell
          title="危险通知"
          isLink
          onClick={() => Notify.show({ type: "danger", message: "通知内容" })}
        />
        <Cell
          title="警告通知"
          isLink
          onClick={() => Notify.show({ type: "warning", message: "通知内容" })}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。",
      },
      source: {
        language: "tsx",
        code: `import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="主要通知"
        isLink
        onClick={() => Notify.show({ type: 'primary', message: '通知内容' })}
      />
      <Cell
        title="成功通知"
        isLink
        onClick={() => Notify.show({ type: 'success', message: '通知内容' })}
      />
      <Cell
        title="危险通知"
        isLink
        onClick={() => Notify.show({ type: 'danger', message: '通知内容' })}
      />
      <Cell
        title="警告通知"
        isLink
        onClick={() => Notify.show({ type: 'warning', message: '通知内容' })}
      />
    </>
  );
};`,
      },
    },
  },
};

// 自定义通知
export const CustomNotify: Story = {
  name: "自定义通知",
  render: (_args) => {
    return (
      <>
        <Cell
          title="自定义颜色"
          isLink
          onClick={() =>
            Notify.show({ message: "自定义颜色", color: "#ad0000", background: "#ffe1e1" })}
        />
        <Cell
          title="自定义时长"
          isLink
          onClick={() => Notify.show({ message: "自定义时长", duration: 1000 })}
        />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "自定义消息通知的颜色和展示时长。",
      },
      source: {
        language: "tsx",
        code: `import React from 'react';
import { Notify, Cell } from 'react-vant';

export default () => {
  return (
    <>
      <Cell
        title="自定义颜色"
        isLink
        onClick={() =>
          Notify.show({ message: '自定义颜色', color: '#ad0000', background: '#ffe1e1' })
        }
      />
      <Cell
        title="自定义时长"
        isLink
        onClick={() => Notify.show({ message: '自定义时长', duration: 1000 })}
      />
    </>
  );
};`,
      },
    },
  },
};

// 组件调用
export const ComponentUsage: Story = {
  name: "组件调用",
  render: () => {
    return ComponentUsageExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过组件调用 Notify 时，可以通过下面的方式进行注册。",
      },
      source: {
        language: "tsx",
        code: `import { Bell, Close } from "@react-vant-next/icons";
import { Cell, Flex, Notify } from "@react-vant-next/ui";
import { useState } from "react";

export default function ComponentUsageExample() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      <Notify visible={visible} type="success">
        <Flex style={{ width: "100%" }} align="center" justify="between">
          <div />
          <div>
            <Bell style={{ marginRight: 4 }} />
            <span>通知内容</span>
          </div>
          <Close onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};`,
      },
    },
  },
};
