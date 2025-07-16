import type { Meta, StoryObj } from "@storybook/react-vite";
import BasicExample from "../demo/base";
import BindValueExample from "../demo/control";
import NumberKeyboard from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-number-keyboard",
  title: "Form/NumberKeyboard",
  component: NumberKeyboard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "虚拟数字键盘，可以配合密码输入框或自定义的输入框组件使用。",
      },
    },
  },
  argTypes: {
    visible: {
      control: { type: "boolean" },
      description: "是否显示键盘",
      table: {
        type: { summary: "boolean" },
        required: true,
      },
    },
    theme: {
      control: { type: "select", options: ["default", "custom"] },
      description: "样式风格，可选值为 custom",
      table: {
        type: { summary: "NumberKeyboardTheme" },
        defaultValue: { summary: "'default'" },
        required: false,
      },
    },
    title: {
      control: { type: "text" },
      description: "键盘标题",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    value: {
      control: { type: "text" },
      description: "当前输入值",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
        required: false,
      },
    },
    maxlength: {
      control: { type: "number" },
      description: "输入值最大长度",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "Number.MAX_VALUE" },
        required: false,
      },
    },
    extraKey: {
      control: { type: "text" },
      description: "底部额外按键的内容",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "''" },
        required: false,
      },
    },
    closeButtonText: {
      control: { type: "text" },
      description: "关闭按钮文字，空则不展示",
      table: {
        type: { summary: "number | string" },
        required: false,
      },
    },
    deleteButtonText: {
      control: { type: "text" },
      description: "删除按钮文字，空则展示删除图标",
      table: {
        type: { summary: "number | string" },
        required: false,
      },
    },
    closeButtonLoading: {
      control: { type: "boolean" },
      description: "是否将关闭按钮设置为加载中状态，仅在 theme='custom' 时有效",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    showDeleteKey: {
      control: { type: "boolean" },
      description: "是否展示删除图标",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    randomKeyOrder: {
      control: { type: "boolean" },
      description: "是否将通过随机顺序展示按键",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    blurOnClose: {
      control: { type: "boolean" },
      description: "是否在点击关闭按钮时触发 blur 事件",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    hideOnClickOutside: {
      control: { type: "boolean" },
      description: "是否在点击外部时收起键盘",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    safeAreaInsetBottom: {
      control: { type: "boolean" },
      description: "是否开启底部安全区适配",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    transition: {
      control: { type: "boolean" },
      description: "是否开启过场动画",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    zIndex: {
      control: { type: "number" },
      description: "键盘 z-index 层级",
      table: {
        type: { summary: "number" },
        required: false,
      },
    },
    onInput: {
      description: "点击按键时触发",
      table: {
        type: { summary: "(key: string) => void" },
        required: false,
      },
    },
    onDelete: {
      description: "点击删除键时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    onClose: {
      description: "点击关闭按钮时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    onBlur: {
      description: "点击关闭按钮或非键盘区域时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    onShow: {
      description: "键盘完全弹出时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    onHide: {
      description: "键盘完全收起时触发",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    onChange: {
      description: "输入内容变化时触发",
      table: {
        type: { summary: "(key: string) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof NumberKeyboard>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Partial<Story> = {
  name: "基础用法",
  render: () => {
    return BasicExample();
  },
  parameters: {
    docs: {
      description: {
        story: `- 数字键盘提供了 \`onInput\`、\`onDelete\`、\`onBlur\` 事件，分别对应输入内容、删除内容和失去焦点的动作。
- 将 theme 属性设置为 \`custom\` 来展示键盘的右侧栏，常用于输入金额的场景。
- 通过 \`extraKey\` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 \`extraKey\` 设置为 \`X\`。
- 通过 \`title\` 属性可以设置键盘标题。
- 当 theme 为 \`custom\` 时，支持以数组的形式配置两个 \`extraKey\`。
- 通过 \`randomKeyOrder\` 属性可以随机排序数字键盘，常用于安全等级较高的场景。
`,
      },
      source: {
        language: "tsx",
        code: `import { useState } from 'react';
import { Button, NumberKeyboard } from '@react-vant-next/ui';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        弹出默认键盘
      </Button>
      <NumberKeyboard
        visible={visible}
        onClose={() => setVisible(false)}
        onInput={key => console.log('输入:', key)}
        onDelete={() => console.log('删除')}
      />
    </>
  );
};`,
      },
    },
  },
};

// 双向绑定
export const BindValue: Partial<Story> = {
  name: "双向绑定",
  render: () => {
    return BindValueExample();
  },
  parameters: {
    docs: {
      description: {
        story: "- 通过 value 属性和 onChange 事件来实现双向绑定。",
      },
      source: {
        language: "tsx",
        code: `
import { Field, hooks, NumberKeyboard } from "@react-vant-next/ui";

function BindValueExample() {
  const [state, set] = hooks.useSetState({
    visible: false,
    value: "",
  });
  return (
    <>
      <Field
        label="双向绑定"
        value={state.value}
        readOnly
        onClick={() => set({ visible: true })}
      />
      <NumberKeyboard
        value={state.value}
        visible={state.visible}
        maxlength={6}
        onChange={v => set({ value: v })}
        onBlur={() => set({ visible: false })}
      />
    </>
  );
}

export default BindValueExample;
`,
      },
    },
  },
};
