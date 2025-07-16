import type { Meta, StoryObj } from "@storybook/react-vite";
import { Space, Typography } from "@react-vant-next/ui";

const meta = {
  id: "basic-typography-text",
  component: Typography.Text,
  tags: ["autodocs"],
  title: "Basic/Typography/TypographyText",
  parameters: {
    docs: {
      description: {
        component: "文本的基本格式，支持个性化文本省略配置。",
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
    tag: {
      description: "自定义标签",
      table: {
        type: { summary: "string" },
        required: false,
        category: "基础",
      },
      control: { type: "text" },
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
    size: {
      description: "文本大小",
      table: {
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'" },
        required: false,
        category: "外观",
      },
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
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
        control: { type: "boolean" },
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
} satisfies Meta<typeof Typography.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  name: "基础用法",
  render: (args) => {
    return (
      <Space direction="vertical">
        <Typography.Text strong {...args}>加粗文本</Typography.Text>
        <Typography.Text underline>下划线文本</Typography.Text>
        <Typography.Text delete>删除线文本</Typography.Text>
        <Typography.Text center>居中文本</Typography.Text>
        <Typography.Text disabled>禁用文本</Typography.Text>
        <Typography.Text color="#1989fa">自定义颜色文本</Typography.Text>
      </Space>
    );
  },
  args: {
    type: "danger",
  },
  parameters: {
    docs: {
      description: {
        story: "Typography.Text 提供了多种文本样式，包括加粗、下划线、删除线、居中、禁用和自定义颜色。",
      },
    },
  },
};

// 文本类型示例
export const TextType: Story = {
  name: "文本类型",
  args: {
    type: void 0,
  },
  render: (args) => {
    return (
      <Space direction="vertical">
        <Typography.Text {...args}>默认文本</Typography.Text>
        <Typography.Text type="primary">主要文本</Typography.Text>
        <Typography.Text type="success">成功文本</Typography.Text>
        <Typography.Text type="danger">危险文本</Typography.Text>
        <Typography.Text type="warning">警告文本</Typography.Text>
        <Typography.Text type="secondary">次要文本</Typography.Text>
        <Typography.Text type="light">浅色文本</Typography.Text>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `type` 属性可以设置不同类型的文本。",
      },
    },
  },
};

// 文本省略示例
export const TextEllipsis: Story = {
  name: "文本省略",
  args: {
    ellipsis: true,
    children: "React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用，使用过程中发现任何问题都可以提 Issue 给我们，当然，我们也非常欢迎你给我们发 PR。",
  },
  render: (args) => {
    return (
      <Space direction="vertical" gap={16} style={{ width: "100%" }}>
        <div>
          <Typography.Text>单行省略：</Typography.Text>
          <Typography.Text {...args}>{args.children}</Typography.Text>
        </div>

        <div>
          <Typography.Text>多行省略：</Typography.Text>
          <Typography.Text ellipsis={2}>{args.children}</Typography.Text>
        </div>

        <div>
          <Typography.Text>带展开操作：</Typography.Text>
          <Typography.Text
            ellipsis={{
              rows: 2,
              collapseText: "收起",
              expandText: "展开",
            }}
          >
            {args.children}
          </Typography.Text>
        </div>

        <div>
          <Typography.Text>保留末位文本：</Typography.Text>
          <Typography.Text
            ellipsis={{
              rows: 2,
              symbol: "......",
              suffixCount: 10,
            }}
          >
            {args.children}
          </Typography.Text>
        </div>

        <div>
          <Typography.Text>自定义文本后缀：</Typography.Text>
          <Typography.Text
            ellipsis={{
              rows: 2,
              suffixText: "--William",
              expandText: "更多",
            }}
          >
            {args.children}
          </Typography.Text>
        </div>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "使用 `ellipsis` 属性可以定制个性化的文本省略形式。开启 `ellipsis` 后，请确保 `children` 为纯字符串或数字类型。",
      },
    },
  },
};

// 文本大小示例
export const TextSize: Story = {
  name: "文本大小",
  args: {
    size: "xs",
    children: "特小号文本",
  },
  render: (args) => {
    return (
      <Space direction="vertical">
        <Typography.Text {...args} />
        <Typography.Text size="sm">小号文本</Typography.Text>
        <Typography.Text size="md">中号文本</Typography.Text>
        <Typography.Text size="lg">大号文本</Typography.Text>
        <Typography.Text size="xl">特大号文本</Typography.Text>
        <Typography.Text size="xxl">超大号文本</Typography.Text>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `size` 属性可以设置不同大小的文本。",
      },
    },
  },
};
