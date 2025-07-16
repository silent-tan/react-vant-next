import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space, Typography } from "@react-vant-next/ui";

const meta = {
  id: "basic-typography-title",
  component: Typography.Title,
  tags: ["autodocs"],
  title: "Basic/Typography/TypographyTitle",
  parameters: {
    docs: {
      description: {
        story: "文本的基本格式，支持个性化文本省略配置。",
      },
    },
  },
  argTypes: {
    level: {
      description: "标题级别",
      table: {
        type: { summary: "1 | 2 | 3 | 4 | 5 | 6" },
        required: false,
        category: "基础",
      },
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
    },
    style: {
      control: {
        type: "object",
      },
      table: {
        type: { summary: "CSSProperties" },
        category: "基础",
      },
    },
    className: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    children: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
        category: "基础",
      },
      description: "文本内容",
    },
    type: {
      description: "文本类型",
      table: {
        type: { summary: "'danger' | 'secondary' | 'light' | 'primary' | 'success' | 'warning'" },
        required: false,
        category: "外观",
      },
      control: { type: "select" },
      options: ["danger", "secondary", "light", "primary", "success", "warning"],
    },
    color: {
      description: "文本颜色",
      table: {
        type: { summary: "string | TypographyType" },
        required: false,
        category: "外观",
      },
    },
    disabled: {
      description: "禁用文本",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    delete: {
      description: "添加删除线样式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    underline: {
      description: "添加下划线样式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    center: {
      description: "文本居中",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    strong: {
      description: "文本加粗",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    ellipsis: {
      description: "文本省略配置",
      table: {
        type: { summary: "boolean | number | Omit<EllipsisProps, 'children'>" },
        required: false,
        category: "外观",
      },
    },
    onClick: {
      action: "clicked",
      description: "点击事件",
      table: {
        type: { summary: "(event: React.MouseEvent) => void" },
        required: false,
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Typography.Title>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Base: Story = {
  name: "基础用法",
  args: {
    level: 1,
    children: "一级测试标题",
  },
  render: (args) => {
    return (
      <Space direction="vertical" gap={16}>
        <Typography.Title level={args.level}>{args.children}</Typography.Title>
        <Typography.Title level={2}>二级测试标题</Typography.Title>
        <Typography.Title level={3}>三级测试标题</Typography.Title>
        <Typography.Title level={4}>四级测试标题</Typography.Title>
        <Typography.Title level={5}>五级测试标题</Typography.Title>
        <Typography.Title level={6}>六级测试标题</Typography.Title>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "使用 `Typography.Title` 组件可以创建不同级别的标题。",
      },
    },
  },
};

// 标题修饰
export const Modifier: Story = {
  name: "标题修饰",
  args: {
    level: 1,
    children: "一级测试标题",
    strong: true,
    center: true,
    disabled: true,
    delete: true,
    underline: true,
  },
  render: (args) => {
    return (
      <Space direction="vertical" gap={16}>
        <Typography.Title {...args} />
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `strong`、`center`、`disabled`、`delete`、`underline` 属性可以设置标题的修饰样式。",
      },
    },
  },
};
