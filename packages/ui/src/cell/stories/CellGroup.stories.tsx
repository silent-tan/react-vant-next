import type { Meta, StoryObj } from "@storybook/react-vite";
import Cell from "../index";

const meta = {
  title: "Layout/Cell/Cell.Group",
  component: Cell.Group,
  tags: ["autodocs"],
  globals: {
    backgrounds: {
      value: "light",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Cell.Group 是一个单元格分组组件，可以为 Cell 提供上下外边框。",
      },
    },
  },
  argTypes: {
    style: {
      control: { type: "object" },
      description: "容器样式",
      table: {
        type: { summary: "CSSProperties" },
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
        type: { summary: "ReactNode" },
        category: "基础",
      },
    },
    title: {
      control: { type: "text" },
      description: "左侧标题",
      table: {
        type: { summary: "ReactNode" },
        category: "外观",
      },
    },
    border: {
      control: {
        type: "boolean",
      },
      description: "是否显示外边框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "外观",
      },
    },
    card: {
      control: {
        type: "boolean",
      },
      description: "是否展示为卡片类型",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
    },
  },
} satisfies Meta<typeof Cell.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  parameters: {
    docs: {
      description: {
        story: "Cell 可以单独使用，也可以与 Cell.Group 搭配使用，Cell.Group 可以为 Cell 提供上下外边框。",
      },
      source: {
        code: `<Cell.Group>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</Cell.Group>`,
      },
    },
  },
  args: {},
  render: args => (
    <Cell.Group {...args}>
      <Cell title="单元格" value="内容" />
      <Cell title="单元格" value="内容" label="描述信息" />
    </Cell.Group>
  ),
};

export const GroupTitle: Story = {
  name: "分组标题",
  parameters: {
    docs: {
      description: {
        story: "通过 Cell.Group 的 title 属性可以指定分组标题。",
      },
    },
  },
  args: {
    title: "分组1",
  },
  render: args => (
    <>
      <Cell.Group {...args}>
        <Cell title="单元格" value="内容" />
      </Cell.Group>
      <Cell.Group title="分组2">
        <Cell title="单元格" value="内容" />
      </Cell.Group>
    </>
  ),
};

export const CardType: Story = {
  name: "卡片类型",
  parameters: {
    docs: {
      description: {
        story: "通过 Cell.Group 的 card 属性可以展示卡片类型。",
      },
    },
  },
  args: {
    card: true,
  },
  render: args => (
    <div style={{ padding: "16px", background: "#f7f8fa" }}>
      <Cell.Group {...args}>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" />
      </Cell.Group>
    </div>
  ),
};
