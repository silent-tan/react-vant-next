import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "@react-vant-next/ui";
import { useState } from "react";
import { Sidebar } from "../index";

const meta = {
  id: "components-sidebar",
  title: "Navigate/Sidebar",
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: "垂直展示的导航栏，用于在不同的内容区域之间进行切换。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
      control: "text",
    },
    style: {
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
        type: { summary: "React.ReactElement | React.ReactElement[]" },
      },
    },
    // 外观
    sideClassName: {
      description: "左侧容器类名",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
      control: "text",
    },
    sideStyle: {
      description: "左侧容器样式",
      table: {
        category: "外观",
        type: { summary: "CSSProperties" },
      },
    },
    // 状态
    value: {
      description: "当前导航项的索引",
      table: {
        category: "状态",
        type: { summary: "number" },
      },
      control: { type: "number", min: 0, max: 10, step: 1 },
    },
    defaultValue: {
      description: "默认索引",
      table: {
        category: "状态",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0, max: 10, step: 1 },
    },
    // 事件
    onChange: {
      description: "切换导航项时触发",
      table: {
        category: "事件",
        type: { summary: "(value: number) => void" },
      },
      action: "onChange",
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法组件
function BasicExample() {
  const [active, setActive] = useState(2);

  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(`标签名 ${v + 1}`);
      }}
    >
      <Sidebar.Item title="标签名1" />
      <Sidebar.Item title="标签名2" />
      <Sidebar.Item title="标签名3" />
    </Sidebar>
  );
}

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => <BasicExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `value` 绑定当前选中项的索引。",
      },
      source: {
        language: "tsx",
        code: `
import { Sidebar, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [active, setActive] = useState(2);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(\`标签名 \${v + 1}\`);
      }}
    >
      <Sidebar.Item title="标签名1" />
      <Sidebar.Item title="标签名2" />
      <Sidebar.Item title="标签名3" />
    </Sidebar>
  );
};`,
      },
    },
  },
};

// 徽标提示
export const Badge: Story = {
  name: "徽标提示",
  render: _args => (
    <Sidebar>
      <Sidebar.Item title="标签名" dot />
      <Sidebar.Item title="标签名" badge={5} />
      <Sidebar.Item title="标签名" badge={20} />
    </Sidebar>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。",
      },
    },
  },
};

// 禁用选项
export const Disabled: Story = {
  name: "禁用选项",
  render: _args => (
    <Sidebar>
      <Sidebar.Item title="标签名" />
      <Sidebar.Item title="标签名" disabled />
      <Sidebar.Item title="标签名" />
    </Sidebar>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性禁用选项。",
      },
    },
  },
};

// 自定义内容区组件
function CustomContentExample() {
  const [active, setActive] = useState(0);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(`内容区 ${v + 1}`);
      }}
    >
      <Sidebar.Item contentStyle={{ backgroundColor: "#fff", padding: "18px 10px" }} title="内容1">
        我是内容区1
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: "#fff", padding: "18px 10px" }} title="内容2">
        我是内容区2
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: "#fff", padding: "18px 10px" }} title="内容3">
        我是内容区3
      </Sidebar.Item>
    </Sidebar>
  );
}

// 自定义内容区
export const CustomContent: Story = {
  name: "自定义内容区",
  render: () => <CustomContentExample />,
  parameters: {
    docs: {
      description: {
        story: "通过 `Sidebar.Item` 的 `children` 可以自定义标签内容。",
      },
      source: {
        language: "tsx",
        code: `
import { Sidebar, Toast } from "@react-vant-next/ui";
import React, { useState } from "react";

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Sidebar
      value={active}
      onChange={(v) => {
        setActive(v);
        Toast.info(\`内容区 \${v + 1}\`);
      }}
    >
      <Sidebar.Item contentStyle={{ backgroundColor: "#fff", padding: "18px 10px" }} title="内容1">
        我是内容区1
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: "#fff", padding: "18px 10px" }} title="内容2">
        我是内容区2
      </Sidebar.Item>
      <Sidebar.Item contentStyle={{ backgroundColor: "#fff", padding: "18px 10px" }} title="内容3">
        我是内容区3
      </Sidebar.Item>
    </Sidebar>
  );
};`,
      },
    },
  },
};
