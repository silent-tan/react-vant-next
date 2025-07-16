import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CollapseItemInstance } from "../PropsType";
import { QuestionO } from "@react-vant-next/icons";
import { Button } from "@react-vant-next/ui";
import React, { useRef } from "react";
import Collapse from "../index";

const meta = {
  id: "components-collapse",
  title: "Display/Collapse",
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: "将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。",
      },
    },
  },
  tags: ["autodocs"],
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
    nativeRef: {
      description: "组件根部 DOM 元素引用",
      table: {
        category: "基础",
        type: { summary: "Ref" },
      },
    },
    // 状态
    initExpanded: {
      control: { type: "object" },
      description: "当前展开面板的 name",
      table: {
        type: { summary: "手风琴模式：number | string, 非手风琴模式：(number | string)[]" },
        category: "状态",
      },
    },
    value: {
      control: { type: "object" },
      description: "当前展开面板的 name（受控模式）",
      table: {
        type: { summary: "手风琴模式：number | string, 非手风琴模式：(number | string)[]" },
        category: "状态",
      },
    },
    // 行为
    accordion: {
      control: { type: "boolean" },
      description: "是否开启手风琴模式",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "行为",
      },
    },
    // 外观
    border: {
      control: { type: "boolean" },
      description: "是否显示外边框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "外观",
      },
    },
    // 事件
    onChange: {
      description: "切换面板时触发",
      table: {
        type: { summary: "(activeNames: number | string | Array<number | string>) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  parameters: {
    docs: {
      description: {
        story: "通过 `initExpanded` 控制展开的面板列表，`initExpanded` 为数组格式。",
      },
    },
  },
  render: _args => (
    <Collapse initExpanded={["1"]}>
      <Collapse.Item title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  ),
};

export const Accordion: Story = {
  name: "手风琴",
  parameters: {
    docs: {
      description: {
        story: "通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `initExpanded` 为字符串格式。",
      },
    },
  },
  render: _args => (
    <Collapse initExpanded="1" accordion>
      <Collapse.Item icon={<QuestionO />} title={<div>自定义标题</div>} name="1">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  ),
};

export const Disabled: Story = {
  name: "禁用状态",
  parameters: {
    docs: {
      description: {
        story: "通过 `disabled` 属性来禁用单个面板。",
      },
    },
  },
  render: _args => (
    <Collapse>
      <Collapse.Item title="标题1" name="1">
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题2" name="2" disabled>
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
      <Collapse.Item title="标题3" name="3" disabled>
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  ),
};

export const UseRef: Story = {
  name: "使用 ref 控制",
  parameters: {
    docs: {
      description: {
        story: "通过 ref 可以获取到 CollapseItem 实例并调用实例方法。",
      },
      source: {
        code: `const itemRef = useRef<CollapseItemInstance>(null);

return (
  <div>
    <div style={{ marginBottom: "16px" }}>
      <Button
        type="primary"
        onClick={() => itemRef.current?.toggle()}
        style={{ marginRight: "10px" }}
      >
        切换
      </Button>
      <Button
        type="primary"
        onClick={() => itemRef.current?.toggle(true)}
        style={{ marginRight: "10px" }}
      >
        展开
      </Button>
      <Button
        type="danger"
        onClick={() => itemRef.current?.toggle(false)}
      >
        收起
      </Button>
    </div>
    <Collapse>
      <Collapse.Item
        ref={itemRef}
        title="通过 ref 控制"
        name="1"
      >
        代码是写出来给人看的，附带能在机器上运行
      </Collapse.Item>
    </Collapse>
  </div>
);`,
      },
    },
  },
  render: (_args) => {
    return UseRefExample();
  },
};

function UseRefExample() {
  const itemRef = useRef<CollapseItemInstance>(null);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <Button
          type="primary"
          onClick={() => itemRef.current?.toggle()}
          style={{ marginRight: "10px" }}
        >
          切换
        </Button>
        <Button
          type="primary"
          onClick={() => itemRef.current?.toggle(true)}
          style={{ marginRight: "10px" }}
        >
          展开
        </Button>
        <Button
          type="danger"
          onClick={() => itemRef.current?.toggle(false)}
        >
          收起
        </Button>
      </div>
      <Collapse>
        <Collapse.Item
          ref={itemRef}
          title="通过 ref 控制"
          name="1"
        >
          代码是写出来给人看的，附带能在机器上运行
        </Collapse.Item>
      </Collapse>
    </div>
  );
}
