import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex, Typography } from "@react-vant-next/ui";
import { useState } from "react";
import Button from "../../button";
import Skeleton from "../index";
import "../demo/style.less";

const meta = {
  id: "components-skeleton",
  title: "Display/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "用于在内容加载过程中展示一组占位图形。",
      },
    },
  },
  globals: {
    backgrounds: {
      value: "white",
    },
  },
  tags: ["autodocs"],
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
    loading: {
      description: "是否显示骨架屏，传 false 时会展示子组件内容",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    // 外观
    row: {
      description: "段落占位图行数",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "3" },
      },
      control: { type: "number", min: 0, max: 10, step: 1 },
    },
    rowWidth: {
      description: "段落占位图宽度，可传数组来设置每一行的宽度",
      table: {
        category: "外观",
        type: { summary: "number | string | (number | string)[]" },
        defaultValue: { summary: "100%" },
      },
    },
    rowHeight: {
      description: "段落占位图高度，可传数组来设置每一行的高度",
      table: {
        category: "外观",
        type: { summary: "number | string | (number | string)[]" },
      },
    },
    title: {
      description: "是否显示标题占位图",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    titleWidth: {
      description: "标题占位图宽度",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "40%" },
      },
      control: "text",
    },
    round: {
      description: "是否将标题和段落显示为圆角风格",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    animate: {
      description: "是否开启动画",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    avatar: {
      description: "是否显示头像占位图",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    avatarSize: {
      description: "头像占位图大小",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "32px" },
      },
      control: "text",
    },
    avatarShape: {
      description: "头像占位图形状，可选值为 square",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "round" },
      },
      control: "select",
      options: ["square", "round"],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: _args => <Skeleton title />,
  parameters: {
    docs: {
      description: {
        story: "通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。",
      },
    },
  },
};

// 显示头像
export const WithAvatar: Story = {
  name: "显示头像",
  render: _args => <Skeleton avatar />,
  parameters: {
    docs: {
      description: {
        story: "通过 `avatar` 属性显示头像占位图。",
      },
    },
  },
};

// 自定义高度
export const CustomHeight: Story = {
  name: "自定义高度",
  render: _args => <Skeleton rowHeight={10} />,
  parameters: {
    docs: {
      description: {
        story: "通过 `rowHeight` 属性显示头像占位图。",
      },
    },
  },
};

// 展示子组件
function ShowChildrenDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="demo-skeleton">
      <Button
        type="primary"
        size="small"
        style={{ margin: "0 16px 12px" }}
        onClick={() => setLoading(!loading)}
      >
        {loading ? "显示内容" : "显示骨架屏"}
      </Button>
      <Skeleton avatar loading={loading}>
        <Flex className="demo-preview">
          <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
          <div className="demo-content">
            <Typography.Title>关于 Vant</Typography.Title>
            <Typography.Text type="secondary">
              Vant 是一套轻量、可靠的移动端 Vue
              组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </Typography.Text>
          </div>
        </Flex>
      </Skeleton>
    </div>
  );
}

export const ShowChildren: Story = {
  name: "展示子组件",
  render: () => <ShowChildrenDemo />,
  parameters: {
    docs: {
      description: {
        story: "将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。",
      },
      source: {
        code: `import { Flex, Skeleton, Switch, Typography } from "@react-vant-next/ui";
import React, { useState } from "react";
import "./demo/style.less";

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="demo-skeleton">
      <Switch checked={loading} onChange={setLoading} size={24} />
      <Skeleton avatar loading={loading}>
        <Flex className="demo-preview">
          <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
          <div className="demo-content">
            <Typography.Title>关于 Vant</Typography.Title>
            <Typography.Text type="secondary">
              Vant 是一套轻量、可靠的移动端 Vue
              组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </Typography.Text>
          </div>
        </Flex>
      </Skeleton>
    </div>
  );
};`,
      },
    },
  },
};
