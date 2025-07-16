import type { Meta, StoryObj } from "@storybook/react-vite";
import Flex from "../index";

import "../demo/style.less";

const meta = {
  id: "layout-flex",
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Flex 布局组件，用于快速实现弹性布局。",
      },
    },
  },
  argTypes: {
    style: {
      control: { type: "object" },
      description: "容器样式",
      table: {
        category: "基础",
      },
    },
    className: {
      control: { type: "text" },
      description: "容器类名",
      table: {
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
    gutter: {
      control: { type: "object" },
      description: "列元素之间的间距，可以使用数组形式同时设置",
      table: {
        type: { summary: "number | [number, number]" },
        defaultValue: { summary: "0" },
        required: false,
        category: "外观",
      },
    },
    direction: {
      control: { type: "select" },
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "项目定位方向",
      table: {
        type: { summary: "'row' | 'row-reverse' | 'column' | 'column-reverse'" },
        defaultValue: { summary: "'row'" },
        required: false,
        category: "外观",
      },
    },
    wrap: {
      control: { type: "select" },
      options: ["wrap", "nowrap", "wrap-reverse"],
      description: "子元素的换行方式",
      table: {
        type: { summary: "'wrap' | 'nowrap' | 'wrap-reverse'" },
        defaultValue: { summary: "'wrap'" },
        required: false,
        category: "外观",
      },
    },
    justify: {
      control: { type: "select" },
      options: ["start", "end", "center", "between", "around"],
      description: "水平排列方式",
      table: {
        type: { summary: "'start' | 'end' | 'center' | 'between' | 'around'" },
        defaultValue: { summary: "'start'" },
        required: false,
        category: "外观",
      },
    },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end", "baseline", "stretch"],
      description: "垂直对齐方式",
      table: {
        type: { summary: "'start' | 'center' | 'end' | 'baseline' | 'stretch'" },
        defaultValue: { summary: "'start'" },
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
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <Flex justify="center" align="center" {...args}>
          <Flex.Item span={12}>span: 12</Flex.Item>
          <Flex.Item span={12}>span: 12</Flex.Item>
        </Flex>

        <Flex {...args}>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
        </Flex>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 Flex 和 Flex.Item 组件来实现 24 列栅格布局。",
      },
    },
  },
};

// 设置间距
export const Gutter: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <Flex gutter={16} wrap="wrap" {...args}>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
        </Flex>
      </div>
    );
  },
  args: {
    gutter: 16,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 gutter 属性可以设置列元素之间的间距，默认间距为 0; 如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]",
      },
    },
  },
};

// 方向
export const Direction: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <Flex direction="row" {...args}>
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
        <Flex direction="row-reverse">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
        <Flex direction="column">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
        <Flex direction="column-reverse">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 direction 属性可以设置项目的排列方向。",
      },
    },
  },
};

// 对齐方式
export const AlignAndJustify: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <p>水平对齐方式</p>
        <Flex style={{ marginBottom: "10px" }} {...args}>
          <Flex.Item flex="100px">start</Flex.Item>
          <Flex.Item flex="100px">start</Flex.Item>
        </Flex>
        <Flex justify="center" style={{ marginBottom: "10px" }}>
          <Flex.Item flex="100px">center</Flex.Item>
          <Flex.Item flex="100px">center</Flex.Item>
        </Flex>
        <Flex justify="end" style={{ marginBottom: "10px" }}>
          <Flex.Item flex="100px">end</Flex.Item>
          <Flex.Item flex="100px">end</Flex.Item>
        </Flex>
        <Flex justify="between" style={{ marginBottom: "10px" }}>
          <Flex.Item flex="100px">between</Flex.Item>
          <Flex.Item flex="100px">between</Flex.Item>
        </Flex>
        <Flex justify="around" style={{ marginBottom: "10px" }}>
          <Flex.Item flex="100px">around</Flex.Item>
          <Flex.Item flex="100px">around</Flex.Item>
        </Flex>
        <p>垂直对齐方式</p>
        <Flex align="start" style={{ height: "100px", marginBottom: "10px", background: "#f5f5f5" }}>
          <Flex.Item flex="100px">start</Flex.Item>
          <Flex.Item flex="100px">start</Flex.Item>
        </Flex>
        <Flex align="center" style={{ height: "100px", marginBottom: "10px", background: "#f5f5f5" }}>
          <Flex.Item flex="100px">center</Flex.Item>
          <Flex.Item flex="100px">center</Flex.Item>
        </Flex>
        <Flex align="end" style={{ height: "100px", marginBottom: "10px", background: "#f5f5f5" }}>
          <Flex.Item flex="100px">end</Flex.Item>
          <Flex.Item flex="100px">end</Flex.Item>
        </Flex>
        <Flex align="baseline" style={{ height: "100px", marginBottom: "10px", background: "#f5f5f5" }}>
          <Flex.Item flex="100px">baseline</Flex.Item>
          <Flex.Item flex="100px">baseline</Flex.Item>
        </Flex>
        <Flex align="stretch" style={{ height: "100px", marginBottom: "10px", background: "#f5f5f5" }}>
          <Flex.Item flex="100px">stretch</Flex.Item>
          <Flex.Item flex="100px">stretch</Flex.Item>
        </Flex>
      </div>
    );
  },
  args: {
    justify: "start",

  },
  parameters: {
    docs: {
      description: {
        story: "通过 justify 属性可以设置水平排列方式，通过 align 属性可以设置垂直对齐方式。",
      },
    },
  },
};

// 换行
export const Wrap: Story = {
  render: (args) => {
    return (
      <div className="demo-flex">
        <p>不换行（默认）</p>
        <Flex {...args} style={{ width: "300px" }}>
          <Flex.Item flex="100px">Block 1</Flex.Item>
          <Flex.Item flex="100px">Block 2</Flex.Item>
          <Flex.Item flex="100px">Block 3</Flex.Item>
          <Flex.Item flex="100px">Block 4</Flex.Item>
        </Flex>
        <p>换行</p>
        <Flex wrap="wrap" style={{ width: "300px" }}>
          <Flex.Item flex="100px">Block 1</Flex.Item>
          <Flex.Item flex="100px">Block 2</Flex.Item>
          <Flex.Item flex="100px">Block 3</Flex.Item>
          <Flex.Item flex="100px">Block 4</Flex.Item>
        </Flex>
        <p>反向换行</p>
        <Flex wrap="wrap-reverse" style={{ width: "300px" }}>
          <Flex.Item flex="100px">Block 1</Flex.Item>
          <Flex.Item flex="100px">Block 2</Flex.Item>
          <Flex.Item flex="100px">Block 3</Flex.Item>
          <Flex.Item flex="100px">Block 4</Flex.Item>
        </Flex>
      </div>
    );
  },
  args: {
    wrap: "nowrap",
  },
  parameters: {
    docs: {
      description: {
        story: "通过 wrap 属性可以设置子元素的换行方式。",
      },
    },
  },
};
