import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "../../divider";
import { Typography } from "../index";

const meta = {
  id: "basic-typography",
  component: Typography,
  title: "Basic/Typography",
  // tags: ["autodocs"],
  parameters: {
    docs: {
      defaultName: "Docs",
      description: {
        component: "Typography 组件提供了文本的通用能力",
      },
    },
  },
  argTypes: {
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
        category: "外观",
      },
      control: { type: "boolean" },
    },
    delete: {
      description: "添加删除线样式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
      control: { type: "boolean" },
    },
    underline: {
      description: "添加下划线样式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
      control: { type: "boolean" },
    },
    center: {
      description: "文本居中",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
      control: { type: "boolean" },
    },
    strong: {
      description: "文本加粗",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
      control: { type: "boolean" },
    },
    ellipsis: {
      description: "文本省略配置",
      table: {
        type: { summary: "boolean | number | Omit<EllipsisProps, 'children'>" },
        required: false,
        category: "外观",
      },
      control: { type: "object" },
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
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Base: Story = {
  name: "基础用法",
  render: (args) => {
    return (
      <Typography {...args}>
        Typography 组件提供了文本通用能力
      </Typography>
    );
  },
  args: {
    renderType: "text",
  },
  parameters: {
    docs: {
      description: {
        story: "可以通过不同的 renderType 属性来渲染不同的文本类型。",
      },
    },
  },
};

// 组合使用示例
export const Combined: Partial<Story> = {
  name: "组合使用",
  args: {
    renderType: "title",
    level: 3,
  },
  render: (args) => {
    return (
      <div>
        <Typography {...args}>React Vant</Typography>
        <Typography.Text type="secondary">
          一套轻量、可靠的移动端 React 组件库
        </Typography.Text>
        <Divider />
        <Typography.Text>
          React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
        </Typography.Text>
        <br />
        <Typography.Text strong>主要特性：</Typography.Text>
        <ul>
          <li>
            <Typography.Text type="primary">60+ 高质量组件</Typography.Text>
          </li>
          <li>
            <Typography.Text type="success">完善的中文文档和示例</Typography.Text>
          </li>
          <li>
            <Typography.Text type="warning">支持按需引入</Typography.Text>
          </li>
          <li>
            <Typography.Text type="danger">支持主题定制</Typography.Text>
          </li>
        </ul>
        <Typography.Text>
          详情请访问
          {" "}
          <Typography.Link href="https://github.com/3lang3/react-vant" target="_blank" underline>
            GitHub 仓库
          </Typography.Link>
        </Typography.Text>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography 组件可以组合使用，创建丰富的文本内容。",
      },
    },
  },
};
