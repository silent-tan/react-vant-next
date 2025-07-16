import type { Meta, StoryObj } from "@storybook/react-vite";

import BaseExample from "../demo/base";
import CustomPanelExample from "../demo/custom";
import ItemStatusExample from "../demo/status";
import ActionSheet from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-action-sheet",
  title: "Feedback/ActionSheet",
  component: ActionSheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "底部弹起的模态面板，包含与当前情境相关的多个选项。",
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
      description: "自定义面板内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    // 状态
    visible: {
      control: { type: "boolean" },
      description: "是否显示动作面板",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // 内容
    actions: {
      description: "面板选项列表",
      table: {
        category: "内容",
        type: { summary: "Action[]" },
        defaultValue: { summary: "[]" },
      },
    },
    title: {
      control: { type: "text" },
      description: "顶部标题",
      table: {
        category: "内容",
        type: { summary: "ReactNode" },
      },
    },
    cancelText: {
      control: { type: "text" },
      description: "取消按钮",
      table: {
        category: "内容",
        type: { summary: "ReactNode" },
      },
    },
    description: {
      control: { type: "text" },
      description: "选项上方的描述信息",
      table: {
        category: "内容",
        type: { summary: "ReactNode" },
      },
    },
    closeIcon: {
      description: "自定义关闭图标",
      table: {
        category: "内容",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "<Cross />" },
      },
    },
    // 外观
    round: {
      control: { type: "boolean" },
      description: "是否显示圆角",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeable: {
      control: { type: "boolean" },
      description: "是否显示关闭图标",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    overlay: {
      control: { type: "boolean" },
      description: "是否显示遮罩层",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    overlayClass: {
      description: "自定义遮罩层类名",
      table: {
        category: "外观",
        type: { summary: "string | Array | object" },
      },
    },
    overlayStyle: {
      description: "自定义遮罩层样式",
      table: {
        category: "外观",
        type: { summary: "object" },
      },
    },
    duration: {
      description: "动画时长，单位毫秒",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "300" },
      },
    },
    safeAreaInsetBottom: {
      control: { type: "boolean" },
      description: "是否开启底部安全区适配",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    // 行为
    lockScroll: {
      control: { type: "boolean" },
      description: "是否锁定背景滚动",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnClickAction: {
      control: { type: "boolean" },
      description: "是否在点击选项后关闭",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeOnClickOverlay: {
      control: { type: "boolean" },
      description: "是否在点击遮罩层后关闭",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnPopstate: {
      control: { type: "boolean" },
      description: "是否在页面回退时自动关闭",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    beforeClose: {
      description: "关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise",
      table: {
        category: "行为",
        type: { summary: "(action: string) => boolean | Promise<boolean>" },
      },
    },
    // 事件
    onSelect: {
      description: "点击选项时触发，禁用或加载状态下不会触发",
      table: {
        category: "事件",
        type: { summary: "(action: Action, index: number) => void" },
      },
    },
    onCancel: {
      description: "点击取消按钮时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onOpen: {
      description: "打开面板时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onClose: {
      description: "关闭面板时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onOpened: {
      description: "打开面板且动画结束后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onClosed: {
      description: "关闭面板且动画结束后触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onClickOverlay: {
      description: "点击遮罩层时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
  },
} satisfies Meta<typeof ActionSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    return <BaseExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。",
      },
      source: {
        language: "tsx",
        code: `
import { ActionSheet, Cell } from "@react-vant-next/ui";
import { useState } from "react";

const actions = [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }];
const actions1 = [
  { name: "选项一" },
  { name: "选项二" },
  { name: "选项三", subname: "描述信息" },
];

export default function BaseExample() {
  const [visible, setVisible] = useState(-1);
  const onCancel = () => setVisible(-1);
  return (
    <>
      <Cell title="基础用法" isLink onClick={() => setVisible(1)} />
      <Cell title="展示取消按钮" isLink onClick={() => setVisible(2)} />
      <Cell title="展示描述信息" isLink onClick={() => setVisible(3)} />

      <ActionSheet
        visible={visible === 1}
        onCancel={onCancel}
        actions={actions}
      />
      <ActionSheet
        visible={visible === 2}
        onCancel={onCancel}
        actions={actions}
        cancelText="取消"
      />
      <ActionSheet
        visible={visible === 3}
        onCancel={onCancel}
        description="这是一段描述信息"
        actions={actions1}
        cancelText="取消"
      />
    </>
  );
};
`,
      },
    },
  },
};

// 选项状态
export const Status: Story = {
  name: "选项状态",
  render: (_args) => {
    return <ItemStatusExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过`color`设置选项的颜色",
      },
      source: {
        language: "tsx",
        code: `
import { ActionSheet, Cell } from "@react-vant-next/ui";
import { useState } from "react";

const actions2 = [
  { name: "选项一", color: "#ee0a24" },
  { name: "选项二", disabled: true },
  { loading: true },
];

export default function ItemStatusExample() {
  const [visible, setVisible] = useState(false);
  const onCancel = () => setVisible(false);
  return (
    <>
      <Cell title="选项状态" isLink onClick={() => setVisible(true)} />
      <ActionSheet
        visible={visible}
        onCancel={onCancel}
        actions={actions2}
        cancelText="取消"
      />
    </>
  );
};`,
      },
    },
  },
};

// 自定义面板
export const Custom: Story = {
  name: "自定义面板",
  render: (_args) => {
    return <CustomPanelExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过插槽可以自定义面板的展示内容，同时可以使用`title`属性展示标题栏",
      },
      source: {
        language: "tsx",
        code: `
import { ActionSheet, Cell } from "@react-vant-next/ui";
import { useState } from "react";

export default function CustomPanelExample() {
  const [visible, setVisible] = useState(false);
  const onCancel = () => setVisible(false);
  return (
    <>
      <Cell title="自定义面板" isLink onClick={() => setVisible(true)} />
      <ActionSheet visible={visible} onCancel={onCancel}>
        <div style={{ padding: "16px 16px 160px" }}>内容</div>
      </ActionSheet>
    </>
  );
};`,
      },
    },
  },
};
