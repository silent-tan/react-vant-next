import type { Meta, StoryObj } from "@storybook/react-vite";
import { Arrow } from "@react-vant-next/icons";
import { Button } from "@react-vant-next/ui";
import CoverDemo from "../demo/cover";
import Card from "../index";

const meta = {
  id: "components-card",
  title: "Display/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "最基础的卡片容器，可承载文字、列表、图片、段落。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // 基础
    className: {
      description: "css 类名",
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    style: {
      description: "css 样式",
      table: {
        type: { summary: "CSSProperties" },
        category: "基础",
      },
    },
    children: {
      description: "卡片内容",
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    // 外观
    round: {
      control: "boolean",
      description: "开启圆角",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
    },
    border: {
      control: "boolean",
      description: "显示边框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
    },
    // 事件
    onClick: {
      description: "卡片点击事件",
      table: {
        type: { summary: "(e: MouseEvent) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Partial<Story> = {
  name: "基础用法",
  render: _args => (
    <Card>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "最基础的卡片用法，包含标题和内容区域。",
      },
    },
  },
};

export const Round: Partial<Story> = {
  name: "圆角卡片",
  render: _args => (
    <Card round>
      <Card.Header>圆角卡片</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "`round`属性开启圆角样式",
      },
    },
  },
};

export const WithFooter: Partial<Story> = {
  name: "底部内容",
  render: _args => (
    <Card round>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body>
        React Vant 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
      </Card.Body>
      <Card.Footer>
        <Button type="primary" round block size="small">
          查看更多
        </Button>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `Card.Footer` 设置底部内容。",
      },
    },
  },
};

export const WithCover: Partial<Story> = {
  name: "封面展示",
  render: () => <CoverDemo />,
  parameters: {
    docs: {
      description: {
        story: "使用 `Card.Cover` 可以方便的展示封面，随意调整位置",
      },
      source: {
        code: `import { Arrow, Like } from "@react-vant-next/icons";
import { Button, Card, Image, Space, Toast } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <>
      <Card round style={{ marginBottom: 20 }}>
        <Card.Cover onClick={() => Toast.info("点击了Cover区域")}>
          <Image src="/demo_avatar_1.jpg" />
        </Card.Cover>
        <Card.Header
          extra={<Arrow />}
          onClick={() => Toast.info("点击了Header区域")}
        >
          封面展示
        </Card.Header>
        <Card.Body onClick={() => Toast.info("点击了Body区域")}>
          卡片内容区域
        </Card.Body>
        <Card.Footer>
          <Space>
            <Button round size="small">
              更多
            </Button>
            <Button
              icon={<Like />}
              round
              color="linear-gradient(to right, #ff6034, #ee0a24)"
              size="small"
            >
              Like
            </Button>
          </Space>
        </Card.Footer>
      </Card>
      <Card round>
        <Card.Header
          extra={<Arrow />}
          onClick={() => Toast.info("点击了Header区域")}
        >
          封面展示
        </Card.Header>
        <Card.Body onClick={() => Toast.info("点击了Body区域")}>
          卡片内容区域
        </Card.Body>
        <Card.Cover onClick={() => Toast.info("点击了Cover区域")}>
          <Image src="/demo_view_1.png" />
        </Card.Cover>
      </Card>
    </>
  );
};`,
      },
    },
  },
};

export const WithBorders: Partial<Story> = {
  name: "展示边框",
  render: _args => (
    <Card round>
      <Card.Header border>卡片标题</Card.Header>
      <Card.Body
        style={{
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        卡片内容区域
      </Card.Body>
      <Card.Footer border>
        <Button type="primary" round block size="mini">
          查看更多
        </Button>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "`Card.Header` 和 `Card.Footer` 的 `border` 属性可以展示对应边框",
      },
    },
  },
};

export const CustomStyle: Partial<Story> = {
  name: "自定义卡片样式",
  render: _args => (
    <Card round style={{ backgroundColor: "#ccc", color: "white" }}>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body
        style={{
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        卡片内容区域
      </Card.Body>
      <Card.Footer>
        <div style={{ textAlign: "center" }}>我是自定义的底部</div>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "可以通过 style 属性自定义卡片样式。",
      },
    },
  },
};

export const HeaderWithExtra: Partial<Story> = {
  name: "头部额外内容",
  render: _args => (
    <Card round>
      <Card.Header extra={<Arrow />}>卡片标题</Card.Header>
      <Card.Body>这是一个带有额外头部内容的卡片示例。</Card.Body>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 Card.Header 的 extra 属性可以添加额外的头部内容。",
      },
    },
  },
};

export const CompactFooter: Partial<Story> = {
  name: "紧凑底部",
  render: _args => (
    <Card round>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
      <Card.Footer compact>
        <Button type="primary" round block size="mini">
          紧凑底部按钮
        </Button>
      </Card.Footer>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 compact 属性可以设置卡片底部为紧凑模式，减少内边距。",
      },
    },
  },
};
