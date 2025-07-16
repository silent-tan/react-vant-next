import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Button from "../../button";
import Overlay from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-overlay",
  title: "Feedback/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。",
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
      },
    },
    style: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    customStyle: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    children: {
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    // 外观
    visible: {
      control: { type: "boolean" },
      description: "是否展示遮罩层",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    zIndex: {
      control: { type: "number" },
      description: "z-index 层级",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "1" },
      },
    },
    duration: {
      control: { type: "number" },
      description: "动画时长，单位毫秒",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "0.3" },
      },
    },
    // 状态
    lockScroll: {
      control: { type: "boolean" },
      description: "是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    // 事件
    onClick: {
      description: "点击时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent) => void" },
      },
    },
    // 其他
    stopPropagation: {
      description: "阻止某些事件冒泡",
      table: {
        category: "其他",
        type: { summary: "string[]" },
        defaultValue: { summary: "['click']" },
      },
    },
  },
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    return DefaultExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `visible` 控制是否显示遮罩层，点击遮罩层时会触发 `onClick` 事件。",
      },
      source: {
        language: "tsx",
        code: `import { useState } from 'react';
import { Button, Overlay } from '@react-vant-next/ui';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        显示遮罩层
      </Button>
      <Overlay visible={show} onClick={() => setShow(false)} />
    </>
  );
};`,
      },
    },
  },
};

// 嵌入内容
export const WithContent: Story = {
  name: "嵌入内容",
  render: (_args) => {
    return WithContentExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过默认插槽可以在遮罩层上嵌入任意内容。",
      },
      source: {
        language: "tsx",
        code: `import { useState } from 'react';
import { Button, Overlay } from '@react-vant-next/ui';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        嵌入内容
      </Button>
      <Overlay
        visible={visible}
        onClick={() => setVisible(false)}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 120, height: 120, backgroundColor: "#fff", borderRadius: 4 }} />
      </Overlay>
    </>
  );
};`,
      },
    },
  },
};

function WithContentExample() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        嵌入内容
      </Button>
      <Overlay
        visible={visible}
        onClick={() => setVisible(false)}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 120, height: 120, backgroundColor: "#fff", borderRadius: 4 }} />
      </Overlay>
    </>
  );
}

function DefaultExample() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        显示遮罩层
      </Button>
      <Overlay visible={show} onClick={() => setShow(false)} />
    </>
  );
}
