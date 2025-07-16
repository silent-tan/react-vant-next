import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../button";
import { Space } from "../index";

const meta = {
  title: "Layout/Space",
  component: Space,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Space 组件可以设置组件之间的间距，避免组件紧贴在一起，拉开统一的空间。",
      },
    },
  },
  argTypes: {
    style: {
      description: "容器样式",
      table: {
        type: { summary: "React.CSSProperties" },
        category: "基础",
      },
    },
    className: {
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
    direction: {
      description: "间距方向",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
        category: "外观",
      },
      control: "select",
      options: ["horizontal", "vertical"],
    },
    align: {
      description: "交叉轴对齐方式",
      table: {
        type: { summary: "start | end | center | baseline" },
        category: "外观",
      },
      control: "select",
      options: ["start", "end", "center", "baseline"],
    },
    justify: {
      description: "主轴对齐方式",
      table: {
        type: { summary: "start | end | center | between | around | evenly | stretch" },
        category: "外观",
      },
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly", "stretch"],
    },
    wrap: {
      description: "是否自动换行，仅在 horizontal 时有效",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
      control: "boolean",
    },
    block: {
      description: "是否渲染为块级元素",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
      control: "boolean",
    },
    gap: {
      description: "间距大小，设为数组时则分别设置垂直方向和水平方向的间距大小",
      table: {
        type: { summary: "number | string | [number | string, number | string]" },
        defaultValue: { summary: "8px" },
        category: "外观",
      },
    },
    divider: {
      description: "分隔内容",
      table: {
        type: { summary: "React.ReactNode" },
        category: "外观",
      },
    },
    onClick: {
      description: "点击事件",
      table: {
        category: "事件",
        type: { summary: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void" },
      },
      action: "onClick",
    },
  },
} satisfies Meta<typeof Space>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: args => (
    <Space {...args}>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </Space>
  ),
  parameters: {
    docs: {
      description: {
        story: "Space 组件可以给行内元素提供水平间距。",
      },
    },
  },
};

// 分隔内容
export const Divider: Story = {
  name: "分隔内容",
  render: args => (
    <Space {...args}>
      <span>文本</span>
      <span>文本</span>
      <span>文本</span>
    </Space>
  ),
  args: {
    divider: <span style={{ color: "#999" }}>|</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `divider` 属性可以设置分隔内容。",
      },
    },
  },
};

// 垂直间距
export const Vertical: Story = {
  name: "垂直间距",
  render: args => (
    <Space {...args}>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </Space>
  ),
  args: {
    direction: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story: "将 `direction` 属性设置为 `vertical` 可以设置垂直方向间距。",
      },
    },
  },
};

// 自定义间距
export const CustomGap: Story = {
  name: "自定义间距",
  render: args => (
    <Space {...args}>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </Space>
  ),
  args: {
    gap: 40,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `gap` 属性可以自定义间距大小，支持数字、字符串和数组类型。当使用数组形式时，可以分别设置垂直和水平方向的间距。",
      },
    },
  },
};

// 对齐方式
export const Alignment: Story = {
  name: "对齐方式",
  render: args => (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Space {...args}>
          <Button type="primary">按钮</Button>
          <div style={{ padding: "40px 0", background: "#f2f3f5" }}>块级元素</div>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Space align="center">
          <Button type="primary">按钮</Button>
          <div style={{ padding: "40px 0", background: "#f2f3f5" }}>块级元素</div>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Space align="start">
          <Button type="primary">按钮</Button>
          <div style={{ padding: "40px 0", background: "#f2f3f5" }}>块级元素</div>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div>
        <Space align="end">
          <Button type="primary">按钮</Button>
          <div style={{ padding: "40px 0", background: "#f2f3f5" }}>块级元素</div>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
    </div>
  ),
  args: {
    align: "start",
  },
  globals: {
    backgrounds: {
      value: "white",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `align` 属性可以设置交叉轴对齐方式，可选值为 `start`、`center`、`end`、`baseline`。",
      },
    },
  },
};

// 自动换行
export const Wrap: Story = {
  name: "自动换行",
  render: args => (
    <div style={{ width: 250, border: "1px solid #ccc", padding: 10 }}>
      <Space {...args}>
        {Array.from({ length: 10 }, (_, i) => (
          <Button key={i} type="primary" size="small">
            按钮
            {i + 1}
          </Button>
        ))}
      </Space>
    </div>
  ),
  args: {
    wrap: true,
  },
  parameters: {
    docs: {
      description: {
        story: "设置 `wrap` 属性后，Space 组件会自动换行，仅在 `direction` 为 `horizontal` 时有效。",
      },
    },
  },
};

// 主轴对齐方式
export const Justify: Story = {
  name: "主轴对齐方式",
  render: args => (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8 }}>
          justify=
          "
          {`${args.justify}`}
          "
        </div>
        <Space {...args} block style={{ border: "1px solid #ccc", padding: 10 }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8 }}>justify="center"</div>
        <Space justify="center" block style={{ border: "1px solid #ccc", padding: 10 }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8 }}>justify="end"</div>
        <Space justify="end" block style={{ border: "1px solid #ccc", padding: 10 }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8 }}>justify="between"</div>
        <Space justify="between" block style={{ border: "1px solid #ccc", padding: 10 }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>justify="around"</div>
        <Space justify="around" block style={{ border: "1px solid #ccc", padding: 10 }}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </div>
    </div>
  ),
  args: {
    justify: "start",
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `justify` 属性可以设置主轴对齐方式，可选值为 `start`、`end`、`center`、`between`、`around`、`evenly`、`stretch`。需要将 `block` 属性设置为 `true` 才能生效。",
      },
    },
  },
};
