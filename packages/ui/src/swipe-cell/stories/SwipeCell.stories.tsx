import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Cell, Dialog, Flex, Image, Toast, Typography } from "@react-vant-next/ui";
import RefDemo from "../demo/ref";
import { SwipeCell } from "../index";

import "../demo/style.less";

const meta = {
  id: "components-swipe-cell",
  title: "Feedback/SwipeCell",
  component: SwipeCell,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "可以左右滑动来展示操作按钮的单元格组件。",
      },
    },
  },
  argTypes: {
    // 基础
    style: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
    },
    children: {
      description: "组件内容",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
    name: {
      description: "标识符，可以在事件参数中获取到",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "''" },
      },
    },
    // 外观
    leftWidth: {
      description: "指定左侧滑动区域宽度，单位为 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "auto" },
      },
    },
    rightWidth: {
      description: "指定右侧滑动区域宽度，单位为 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "auto" },
      },
    },
    leftAction: {
      description: "左侧滑动区域的内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    rightAction: {
      description: "右侧滑动区域的内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    // 状态
    disabled: {
      description: "是否禁用滑动",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    // 其他
    beforeClose: {
      description: "关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise",
      table: {
        category: "其他",
        type: { summary: "(args) => boolean | Promise<boolean>" },
      },
    },
    stopPropagation: {
      description: "是否阻止滑动事件冒泡",
      table: {
        category: "其他",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    // 事件
    onClick: {
      description: "点击时触发",
      table: {
        category: "事件",
        type: { summary: "(position: 'left' | 'right' | 'cell' | 'outside') => void" },
      },
    },
    onOpen: {
      description: "打开时触发",
      table: {
        category: "事件",
        type: { summary: "({ name: string | number, position: 'left' | 'right' }) => void" },
      },
    },
    onClose: {
      description: "关闭时触发",
      table: {
        category: "事件",
        type: { summary: "({ name: string | number, position: 'left' | 'right' | 'cell' | 'outside' }) => void" },
      },
    },
  },
} satisfies Meta<typeof SwipeCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  render: _args => (
    <SwipeCell
      onOpen={() => Toast.info("打开")}
      onClose={() => Toast.info("关闭")}
      rightAction={(
        <Button style={{ height: "100%" }} square type="danger">
          删除
        </Button>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  ),
  parameters: {
    docs: {
      description: {
        story: "SwipeCell 组件提供了 leftAction 和 rightAction 两个属性，用于定义两侧滑动区域的内容。",
      },
      source: {
        code: `import { Button, Cell, SwipeCell, Toast } from "@react-vant-next/ui";

export default () => {
  return (
    <SwipeCell
      onOpen={() => Toast.info("打开")}
      onClose={() => Toast.info("关闭")}
      rightAction={(
        <Button style={{ height: "100%" }} square type="danger">
          删除
        </Button>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};`,
      },
    },
  },
};

export const EventListener: Story = {
  name: "事件监听",
  render: _args => (
    <SwipeCell
      leftAction={(
        <Button square type="primary">
          选择
        </Button>
      )}
      rightAction={(
        <>
          <Button square type="danger">
            删除
          </Button>
          <Button square type="primary">
            收藏
          </Button>
        </>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  ),
  parameters: {
    docs: {
      description: {
        story: "可以监听滑动单元格的各种事件。",
      },
      source: {
        code: `import { Button, Cell, SwipeCell } from "@react-vant-next/ui";

export default () => {
  return (
    <SwipeCell
      leftAction={(
        <Button square type="primary">
          选择
        </Button>
      )}
      rightAction={(
        <>
          <Button square type="danger">
            删除
          </Button>
          <Button square type="primary">
            收藏
          </Button>
        </>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};`,
      },
    },
  },
};

export const BothSides: Story = {
  name: "左右两侧",
  render: _args => (
    <SwipeCell
      leftAction={(
        <Button square type="primary">
          选择
        </Button>
      )}
      rightAction={(
        <>
          <Button square type="danger">
            删除
          </Button>
          <Button square type="primary">
            收藏
          </Button>
        </>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  ),
  parameters: {
    docs: {
      description: {
        story: "SwipeCell 组件可以同时设置左侧和右侧滑动区域的内容。右侧区域还可以包含多个按钮。",
      },
      source: {
        code: `import { Button, Cell, SwipeCell } from "@react-vant-next/ui";

export default () => {
  return (
    <SwipeCell
      leftAction={(
        <Button square type="primary">
          选择
        </Button>
      )}
      rightAction={(
        <>
          <Button square type="danger">
            删除
          </Button>
          <Button square type="primary">
            收藏
          </Button>
        </>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};`,
      },
    },
  },
};

export const CustomContent: Story = {
  name: "自定义内容",
  render: _args => (
    <SwipeCell
      rightAction={(
        <Button style={{ height: "100%" }} square type="danger">
          删除
        </Button>
      )}
    >
      <Flex className="demo-product-card" align="stretch">
        <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-product-card__img" />
        <Flex direction="column" justify="between" className="demo-product-card__content">
          <div>
            <Typography.Title level={5}>商品标题</Typography.Title>
            <Typography.Text type="secondary">这里是商品描述</Typography.Text>
          </div>
          <Flex justify="between" align="center">
            <Typography.Text strong size="lg">
              ¥2.00
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              x2
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </SwipeCell>
  ),
  parameters: {
    docs: {
      description: {
        story: "SwipeCell 可以嵌套任意内容，比如嵌套一个商品卡片。",
      },
      source: {
        code: `import { Button, Flex, Image, SwipeCell, Typography } from "@react-vant-next/ui";
import "./demo/style.less";

export default () => {
  return (
    <SwipeCell
      rightAction={(
        <Button style={{ height: "100%" }} square type="danger">
          删除
        </Button>
      )}
    >
      <Flex className="demo-product-card" align="stretch">
        <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-product-card__img" />
        <Flex direction="column" justify="between" className="demo-product-card__content">
          <div>
            <Typography.Title level={5}>商品标题</Typography.Title>
            <Typography.Text type="secondary">这里是商品描述</Typography.Text>
          </div>
          <Flex justify="between" align="center">
            <Typography.Text strong size="lg">
              ¥2.00
            </Typography.Text>
            <Typography.Text size="sm" type="secondary">
              x2
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </SwipeCell>
  );
};`,
      },
    },
  },
};

// 异步关闭示例
function AsyncCloseComponent() {
  const beforeClose = ({ position }) => {
    switch (position) {
      case "left":
      case "cell":
      case "outside":
        return true;
      case "right":
        return new Promise<boolean>((resolve) => {
          Dialog.confirm({
            title: "确定删除吗？",
          }).then(() => resolve(true)).catch(() => resolve(false));
        });
      default:
        return true;
    }
  };

  return (
    <SwipeCell
      beforeClose={beforeClose}
      leftAction={(
        <Button square type="primary">
          选择
        </Button>
      )}
      rightAction={(
        <Button square type="danger">
          删除
        </Button>
      )}
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
}

export const AsyncClose: Story = {
  name: "异步关闭",
  render: () => <AsyncCloseComponent />,
  parameters: {
    docs: {
      description: {
        story: "通过传入 beforeClose 回调函数，可以自定义两侧滑动内容关闭时的行为。右侧按钮点击后会弹出确认对话框。",
      },
      source: {
        code: `
import React from 'react';
import { SwipeCell, Button, Cell, Dialog } from 'react-vant';

const beforeClose = ({ position }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return (
        new Promise() <
        boolean >
        ((resolve) => {
          Dialog.confirm({
            title: '确定删除吗？',
          }).then(resolve);
        })
      );
    default:
      return true;
  }
};

export default () => {
  return (
    <SwipeCell
      beforeClose={beforeClose}
      leftAction={
        <Button square type="primary">
          选择
        </Button>
      }
      rightAction={
        <Button square type="danger">
          删除
        </Button>
      }
    >
      <Cell title="单元格" value="内容" />
    </SwipeCell>
  );
};
        `,
      },
    },
  },
};

// 外部调用示例
export const RefExample: Story = {
  name: "外部调用",
  render: () => <RefDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 ref 可以在外部调用 SwipeCell 的 open 和 close 方法。",
      },
      source: {
        code: `import { Button, Cell, SwipeCell } from "@react-vant-next/ui";
import { useRef } from "react";
import type { SwipeCellInstance } from "@react-vant-next/ui";

export default () => {
  const swipeCellRef = useRef<SwipeCellInstance>(null);

  const handleOpen = () => {
    swipeCellRef.current?.open("right");
  };

  const handleClose = () => {
    swipeCellRef.current?.close();
  };

  return (
    <div>
      <SwipeCell
        ref={swipeCellRef}
        rightAction={(
          <Button style={{ height: "100%" }} square type="danger">
            删除
          </Button>
        )}
      >
        <Cell title="单元格" value="内容" />
      </SwipeCell>
      <div style={{ marginTop: "16px" }}>
        <Button type="primary" style={{ marginRight: "8px" }} onClick={handleOpen}>
          打开
        </Button>
        <Button onClick={handleClose}>关闭</Button>
      </div>
    </div>
  );
};
        `,
      },
    },
  },
};

// 禁用状态示例
export const Disabled: Story = {
  name: "禁用状态",
  render: _args => (
    <SwipeCell
      disabled
      rightAction={(
        <Button style={{ height: "100%" }} square type="danger">
          删除
        </Button>
      )}
    >
      <Cell title="禁用状态" value="内容" />
    </SwipeCell>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 disabled 属性可以禁用滑动交互。",
      },
      source: {
        code: `import { Button, Cell, SwipeCell } from "@react-vant-next/ui";

export default () => {
  return (
    <SwipeCell
      disabled
      rightAction={(
        <Button style={{ height: "100%" }} square type="danger">
          删除
        </Button>
      )}
    >
      <Cell title="禁用状态" value="内容" />
    </SwipeCell>
  );
};
        `,
      },
    },
  },
};
