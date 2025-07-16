import type { Meta, StoryObj } from "@storybook/react-vite";
import Flex from "../index";

import "../demo/style.less";

const meta = {
  id: "layout-flex-item",
  title: "Layout/Flex/FlexItem",
  component: Flex.Item,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "FlexItem 布局组件，用于快速实现弹性布局。",
      },
    },
  },
  argTypes: {
    style: {
      control: { type: "object" },
      description: "容器样式",
      table: {
        type: { summary: "React.CSSProperties" },
        category: "基础",
      },
    },
    className: {
      control: { type: "text" },
      description: "容器类名",
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    children: {
      description: "子元素",
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    span: {
      control: { type: "number" },
      description: "栅格占据的列数",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        required: false,
        category: "外观",
      },
    },
    flex: {
      control: { type: "text" },
      description: "flex 布局属性",
      table: {
        type: { summary: "number | 'none' | 'auto' | string" },
        required: false,
        category: "外观",
      },
    },
    onClick: {
      description: "点击事件",
      table: {
        type: { summary: "(e: React.MouseEvent) => void" },
        required: false,
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Flex.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <Flex gutter={16}>
          <Flex.Item {...args}>
            span: 12-1
          </Flex.Item>
          <Flex.Item {...args}>
            span: 12-2
          </Flex.Item>
        </Flex>
      </div>
    );
  },
  args: {
    span: 12,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 Flex 和 Flex.Item 组件来实现 24 列栅格布局。",
      },
    },
  },
};

// Flex 布局
export const FlexLayout: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <div style={{ marginBottom: "16px" }}>
          <p>基础用法</p>
          <Flex {...args}>
            <Flex.Item>Block</Flex.Item>
            <Flex.Item>Block</Flex.Item>
          </Flex>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <p>使用 flex 属性</p>
          <Flex {...args}>
            <Flex.Item flex="1">flex: 1</Flex.Item>
            <Flex.Item flex="2">flex: 2</Flex.Item>
          </Flex>
        </div>
        <div>
          <p>设置固定宽度</p>
          <Flex {...args}>
            <Flex.Item flex="100px">100px</Flex.Item>
            <Flex.Item flex="auto">auto</Flex.Item>
          </Flex>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 flex 属性可以设置 Flex 布局属性，支持固定宽度和比例设置。",
      },
    },
  },
};
