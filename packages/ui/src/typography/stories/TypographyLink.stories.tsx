import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space, Typography } from "@react-vant-next/ui";

const meta = {
  id: "basic-typography-link",
  title: "Basic/Typography/TypographyLink",
  component: Typography.Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "文本的基本格式，支持个性化文本省略配置。",
      },
    },
  },
  argTypes: {
    href: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    target: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        category: "基础",
      },
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
} satisfies Meta<typeof Typography.Link>;

export default meta;

type Story = StoryObj<typeof meta>;

// 链接示例
export const Link: Story = {
  name: "基本使用",
  args: {
    children: "默认链接",
    href: "https://github.com/3lang3/react-vant",
    target: "_blank",
  },
  render: (args) => {
    return (
      <Space direction="vertical">
        <Typography.Link {...args} />
        <Typography.Link type="primary" href="https://github.com/3lang3/react-vant" target="_blank">
          主要链接
        </Typography.Link>
        <Typography.Link type="danger" href="https://github.com/3lang3/react-vant" target="_blank">
          危险链接
        </Typography.Link>
        <Typography.Link disabled href="https://github.com/3lang3/react-vant" target="_blank">
          禁用链接
        </Typography.Link>
        <Typography.Link underline href="https://github.com/3lang3/react-vant" target="_blank">
          下划线链接
        </Typography.Link>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "使用 `Typography.Link` 组件可以创建不同样式的链接。",
      },
    },
  },
};
