import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@react-vant-next/ui";
import { useRef } from "react";
import Sticky from "../index";

const meta = {
  title: "Layout/Sticky",
  component: Sticky,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。",
      },
    },
  },
  globals: {
    backgrounds: {
      value: "white",
    },
  },
  argTypes: {
    // 基础
    children: {
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    // 外观
    position: {
      description: "吸附位置，可选值为 bottom",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "top" },
      },
      control: "select",
      options: ["top", "bottom"],
    },
    offset: {
      description: "吸顶/吸底时与容器的距离，支持 px vw vh rem 单位，默认 px",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
    },
    zIndex: {
      description: "吸顶时的 z-index",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "99" },
      },
      control: { type: "number" },
    },
    container: {
      description: "容器对应的 HTML 节点",
      table: {
        category: "基础",
        type: { summary: "RefElement" },
      },
    },
    // 事件
    onScroll: {
      description: "滚动时触发",
      table: {
        category: "事件",
        type: { summary: "({ scrollTop: number, isFixed: boolean }) => void" },
      },
      action: "onScroll",
    },
    onChange: {
      description: "当吸顶状态改变时触发",
      table: {
        category: "事件",
        type: { summary: "(isFixed: boolean) => void" },
      },
      action: "onChange",
    },
  },
} satisfies Meta<typeof Sticky>;

export default meta;

type Story = StoryObj<typeof meta>;

function BasicExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ height: "200vh" }}>
      <div style={{ height: 200, background: "#f2f3f5" }}></div>
      <Sticky position="top" container={containerRef}>
        <Button type="primary" style={{ marginLeft: 15 }}>
          基础用法
        </Button>
      </Sticky>
      <div style={{ height: 500, background: "#f2f3f5" }}></div>
    </div>
  );
}

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => BasicExample(),
  parameters: {
    docs: {
      description: {
        story: "将内容包裹在 `Sticky` 组件内即可。",
      },
      source: {
        language: "tsx",
        code: `
function BasicExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ height: "200vh" }}>
      <div style={{ height: 200, background: "#f2f3f5" }}></div>
      <Sticky position="top" container={containerRef}>
        <Button type="primary" style={{ marginLeft: 15 }}>
          基础用法
        </Button>
      </Sticky>
      <div style={{ height: 500, background: "#f2f3f5" }}></div>
    </div>
  );
}`,
      },
    },
  },
};

// 吸顶距离
export const OffsetTop: Story = {
  name: "吸顶距离",
  render: () => (
    <div style={{ height: "200vh" }}>
      <div style={{ height: 200, background: "#f2f3f5" }}></div>
      <Sticky offset={20}>
        <Button type="primary" style={{ marginLeft: 15 }}>
          吸顶距离 20px
        </Button>
      </Sticky>
      <div style={{ height: 300, background: "#f2f3f5" }}></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `offset` 属性可以设置组件在吸顶时与顶部的距离。",
      },
      source: {
        language: "tsx",
        code: `
<div style={{ height: "200vh" }}>
  <div style={{ height: 200, background: "#f2f3f5" }}></div>
  <Sticky offset={20}>
    <Button type="primary" style={{ marginLeft: 15 }}>
      吸顶距离 20px
    </Button>
  </Sticky>
  <div style={{ height: 300, background: "#f2f3f5" }}></div>
</div>`,
      },
    },
  },
};

function ContainerExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div style={{ height: 100, background: "yellow" }}></div>
      <div ref={containerRef} style={{ height: 400, background: "pink" }}>
        <Sticky container={containerRef}>
          <Button type="warning" style={{ marginLeft: 15 }}>
            指定容器
          </Button>
        </Sticky>
        <div style={{ height: 200 }}></div>
        <div style={{ height: 300 }}></div>
      </div>
      <div style={{ height: "100vh", background: "yellow" }}></div>
    </div>
  );
}

// 指定容器
export const Container: Story = {
  name: "指定容器",
  render: () => {
    return ContainerExample();
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。",
      },
      source: {
        language: "tsx",
        code: `
function ContainerExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div style={{ height: 100, background: "yellow" }}></div>
      <div ref={containerRef} style={{ height: 400, background: "pink" }}>
        <Sticky container={containerRef}>
          <Button type="warning" style={{ marginLeft: 15 }}>
            指定容器
          </Button>
        </Sticky>
        <div style={{ height: 200 }}></div>
        <div style={{ height: 300 }}></div>
      </div>
      <div style={{ height: "100vh", background: "yellow" }}></div>
    </div>
  );
}
`,
      },
    },
  },
};

// 吸底距离
export const OffsetBottom: Story = {
  name: "吸底距离",
  render: () => (
    <div>
      <div style={{ height: "120vh", background: "#f2f3f5" }}></div>
      <Sticky position="bottom" offset={20}>
        <Button type="primary" style={{ marginLeft: 15 }}>
          吸底距离 20px
        </Button>
      </Sticky>
      <div style={{ height: "100vh", background: "#f2f3f5" }}></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "将 `position` 设置为 `bottom` 可以让组件吸附在底部。通过 `offset` 属性可以设置组件在吸底时与底部的距离。",
      },
      source: {
        language: "tsx",
        code: `
<div>
  <div style={{ height: "120vh", background: "#f2f3f5" }}></div>
  <Sticky position="bottom" offset={20}>
    <Button type="primary" style={{ marginLeft: 15 }}>
      吸底距离 20px
    </Button>
  </Sticky>
  <div style={{ height: "100vh", background: "#f2f3f5" }}></div>
</div>`,
      },
    },
  },
};
