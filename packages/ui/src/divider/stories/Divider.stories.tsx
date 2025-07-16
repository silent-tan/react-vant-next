import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space } from "@react-vant-next/ui";
import Divider from "../Divider";

const meta = {
  id: "components-divider",
  title: "Display/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "分隔线可以将内容分成清晰的几组。",
      },
    },
  },
  globals: {
    backgrounds: { value: "white" },
  },
  argTypes: {
    // 基础
    className: {
      description: "类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
    },
    style: {
      description: "样式",
      table: {
        category: "基础",
        type: { summary: "React.CSSProperties" },
      },
    },
    children: {
      control: { type: "text" },
      description: "分割线内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    // 外观
    dashed: {
      control: { type: "boolean" },
      description: "是否使用虚线",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    hairline: {
      control: { type: "boolean" },
      description: "是否使用 0.5px 线",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    type: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "水平还是垂直类型",
      table: {
        category: "外观",
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
        required: false,
      },
    },
    contentPosition: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "内容位置，可选值为 left、center、right",
      table: {
        category: "外观",
        type: { summary: "'left' | 'center' | 'right'" },
        defaultValue: { summary: "'center'" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => <Divider />,
  parameters: {
    docs: {
      description: {
        story: "默认渲染一条水平分割线。",
      },
    },
  },
};

// 展示文字
export const WithText: Story = {
  name: "展示文字",
  render: _args => <Divider>文字</Divider>,
  parameters: {
    docs: {
      description: {
        story: "通过插槽在可以分割线中间插入内容。",
      },
    },
  },
};

// 内容位置
export const ContentPosition: Story = {
  name: "内容位置",
  render: _args => (
    <>
      <Divider contentPosition="left">左侧内容位置</Divider>
      <Divider contentPosition="right">右侧内容位置</Divider>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `contentPosition` 指定内容所在位置。",
      },
    },
  },
};

// 虚线
export const Dashed: Story = {
  name: "虚线",
  render: _args => <Divider dashed>虚线Divider</Divider>,
  parameters: {
    docs: {
      description: {
        story: "添加 `dashed` 属性使分割线渲染为虚线。",
      },
    },
  },
};

// 自定义样式
export const CustomStyle: Story = {
  name: "自定义样式",
  render: _args => (
    <Divider style={{ color: "#3f45ff", borderColor: "#3f45ff", padding: "0 16px" }}>
      自定义样式
    </Divider>
  ),
  parameters: {
    docs: {
      description: {
        story: "可以直接通过 style 属性设置分割线的样式。",
      },
    },
  },
};

// 垂直分割线
export const Vertical: Story = {
  name: "垂直分割线",
  render: _args => (
    <Space>
      <span>文本</span>
      <Divider type="vertical" />
      <span>文本</span>
      <Divider type="vertical" />
      <span>文本</span>
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `type` 属性设置为 `vertical` 来渲染垂直分割线。",
      },
    },
  },
};
