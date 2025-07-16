import type { Meta, StoryObj } from "@storybook/react-vite";

import { Space } from "@react-vant-next/ui";
import CustomDemo from "../demo/custom";
import Badge from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-badge",
  title: "Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "在右上角展示徽标数字或小红点。",
      },
    },
  },
  argTypes: {
    // 基础
    children: {
      control: { type: "text" },
      description: "徽标包裹的内容",
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    tag: {
      control: { type: "text" },
      description: "badge指定渲染为html元素",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'div'" },
        category: "基础",
      },
    },
    // 外观
    content: {
      control: { type: "text" },
      description: "徽标内容",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    dot: {
      control: { type: "boolean" },
      description: "是否展示为小红点",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
    },
    max: {
      control: { type: "text" },
      description: "最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效",
      table: {
        type: { summary: "number | string" },
        category: "外观",
      },
    },
    color: {
      control: { type: "color" },
      description: "徽标背景颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#f44336" },
        category: "外观",
      },
    },
    offset: {
      control: { type: "object" },
      description: "设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 px",
      table: {
        type: { summary: "[number, number] | [string, string]" },
        category: "外观",
      },
      type: {
        name: "intersection",
        value: [
          { name: "array", value: { name: "number" } },
          { name: "array", value: { name: "string" } },
        ],
      },
    },
    // 状态
    showZero: {
      control: { type: "boolean" },
      description: "当 content 为数字 0 时，是否展示徽标",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "状态",
      },
    },
    // 事件
    onClick: {
      description: "点击时触发",
      table: {
        type: { summary: "(event: Event) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

function Child() {
  return <div style={{ width: 40, height: 40, background: "#f2f3f5", borderRadius: 4 }} />;
}

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => (
    <Space gap={20}>
      <Badge content={5}>
        <Child />
      </Badge>
      <Badge content={10}>
        <Child />
      </Badge>
      <Badge content="hot">
        <Child />
      </Badge>
      <Badge dot>
        <Child />
      </Badge>
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。",
      },
    },
  },
};

// 最大值
export const MaxValue: Story = {
  name: "最大值",
  render: _args => (
    <Space gap={20}>
      <Badge content={20} max={9}>
        <Child />
      </Badge>
      <Badge content="99" max="20">
        <Child />
      </Badge>
      <Badge content="9999" max="99">
        <Child />
      </Badge>
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。",
      },
    },
  },
};

// 自定义颜色和偏移量
export const CustomColorAndOffset: Story = {
  name: "自定义颜色和偏移量",
  render: _args => (
    <Space gap={20}>
      <Badge dot offset={["100%", 0]}>
        <Child />
      </Badge>

      <Badge dot color="#87d068">
        <Child />
      </Badge>

      <Badge dot offset={[0, "100%"]} color="#3f45ff">
        <Child />
      </Badge>

      <Badge dot offset={["100%", "100%"]} color="orange">
        <Child />
      </Badge>
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "- 通过 `color` 属性来设置徽标的颜色\n- 通过 `offset` 属性来调整徽标的偏移量",
      },
    },
  },
};

// 自定义徽标内容
export const CustomContent: Story = {
  name: "自定义徽标内容",
  render: () => <CustomDemo />,
  parameters: {
    docs: {
      description: {
        story: "可以通过 `content` 属性传入 React 组件，以实现自定义内容。",
      },
      source: {
        language: "tsx",
        code: `import { Cross, Down, Success } from "@react-vant-next/icons";
import { Badge, Space } from "@react-vant-next/ui";

function Child() {
  return (
    <div
      style={{ width: 40, height: 40, background: "#f2f3f5", borderRadius: 4 }}
    />
  );
}

export default () => {
  return (
    <Space gap={20}>
      <Badge content={<Success />}>
        <Child />
      </Badge>
      <Badge content={<Cross />}>
        <Child />
      </Badge>
      <Badge content={<Down />}>
        <Child />
      </Badge>
    </Space>
  );
};
`,
      },
    },
  },
};

// 独立展示
export const Standalone: Story = {
  name: "独立展示",
  render: _args => (
    <Space gap={20}>
      <Badge content="20" style={{ marginRight: 16 }} />
      <Badge content="200" max="99" />
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "当 Badge 没有子元素时，会作为一个独立的元素进行展示。",
      },
    },
  },
};
