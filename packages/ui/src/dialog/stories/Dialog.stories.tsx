import type { Meta, StoryObj } from "@storybook/react-vite";

// 导入 demo 组件
import BaseDemo from "../demo/base";
import CloseDemo from "../demo/close";
import CloseIconDemo from "../demo/closeIcon";
import ComponentDemo from "../demo/component";
import CustomDemo from "../demo/custom";
import PromiseDemo from "../demo/promise";
import ThemeDemo from "../demo/theme";

import TipDemo from "../demo/tip";
import Dialog from "../index";

const meta = {
  id: "components-dialog",
  title: "Feedback/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。弹出框组件支持函数调用和组件调用两种方式。",
      },
    },
  },
  argTypes: {
    // 基础
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "any" },
      },
    },
    style: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    children: {
      description: "自定义内容",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
    visible: {
      control: { type: "boolean" },
      description: "是否显示弹窗",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    title: {
      control: { type: "text" },
      description: "标题",
      table: {
        category: "基础",
        type: { summary: "string | React.ReactNode" },
      },
    },
    width: {
      control: { type: "text" },
      description: "弹窗宽度，默认单位为`px`",
      table: {
        category: "基础",
        type: { summary: "string | number" },
        defaultValue: { summary: "320px" },
      },
    },
    message: {
      control: { type: "text" },
      description: "文本内容，支持通过`\\n`换行",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },

    // 外观
    messageAlign: {
      control: { type: "select" },
      options: ["left", "right", "center"],
      description: "内容对齐方式，可选值为`left` `right`",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "center" },
      },
    },
    theme: {
      control: { type: "select" },
      options: ["default", "round-button"],
      description: "样式风格，可选值为`round`",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    showConfirmButton: {
      control: { type: "boolean" },
      description: "是否展示确认按钮",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showCancelButton: {
      control: { type: "boolean" },
      description: "是否展示取消按钮",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    confirmButtonText: {
      control: { type: "text" },
      description: "确认按钮文案",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "确认" },
      },
    },
    confirmButtonColor: {
      control: { type: "text" },
      description: "确认按钮颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#ee0a24" },
      },
    },
    cancelButtonText: {
      control: { type: "text" },
      description: "取消按钮文案",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "取消" },
      },
    },
    cancelButtonColor: {
      control: { type: "text" },
      description: "取消按钮颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "black" },
      },
    },
    closeable: {
      control: { type: "boolean" },
      description: "是否展示关闭图标",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeIcon: {
      control: { type: "object" },
      description: "自定义关闭图标",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },
    transition: {
      control: { type: "text" },
      description: "动画类名",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    overlay: {
      control: { type: "boolean" },
      description: "是否展示遮罩层",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    overlayClass: {
      control: { type: "text" },
      description: "自定义遮罩层类名",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    overlayStyle: {
      control: { type: "object" },
      description: "自定义遮罩层样式",
      table: {
        category: "外观",
        type: { summary: "object" },
      },
    },
    footer: {
      description: "自定义底部按钮区域",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
      },
    },

    // 状态
    closeOnClickOverlay: {
      control: { type: "boolean" },
      description: "是否在点击遮罩层后关闭弹窗",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeOnPopstate: {
      control: { type: "boolean" },
      description: "是否在页面回退时自动关闭",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    cancelProps: {
      description: "取消按钮的状态",
      table: {
        category: "状态",
        type: { summary: "{ loading?: boolean; disabled?: boolean }" },
      },
    },
    confirmProps: {
      description: "确认按钮的状态",
      table: {
        category: "状态",
        type: { summary: "{ loading?: boolean; disabled?: boolean }" },
      },
    },

    // 其他
    teleport: {
      description: "指定挂载的节点",
      table: {
        category: "其他",
        type: { summary: "HTMLElement | (() => HTMLElement)" },
        defaultValue: { summary: "body" },
      },
    },

    // 事件
    onClose: {
      description: "Dialog 关闭时的回调",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onClosed: {
      description: "Dialog 完全关闭时的回调",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onConfirm: {
      description: "点击确认按钮时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent) => void | boolean | Promise<boolean> | Promise<void> | Promise<void | boolean>" },
      },
    },
    onCancel: {
      description: "点击取消按钮时触发",
      table: {
        category: "事件",
        type: { summary: "(e: React.MouseEvent) => void | boolean | Promise<boolean> | Promise<void> | Promise<void | boolean>" },
      },
    },
    onClickCloseIcon: {
      description: "点击关闭图标时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

/**
 * 基础用法
 */
export const Base: Story = {
  name: "基础用法",
  render: () => <BaseDemo />,
  parameters: {
    docs: {
      description: {
        story: "Dialog 组件支持函数调用和组件调用两种方式。",
      },
      source: {
        code: `
import { Cell, Dialog } from "@react-vant-next/ui";

function BaseDemo() {
  return (
    <>
      <Cell
        title="弹窗提示"
        isLink
        onClick={() =>
          Dialog.confirm({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
            onCancel: () => console.log("cancel"),
            onConfirm: () => console.log("confirm"),
          })}
      />
      <Cell
        title="弹窗提示（无标题）"
        isLink
        onClick={() =>
          Dialog.alert({
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
      <Cell
        title="确认弹框"
        isLink
        onClick={() =>
          Dialog.confirm({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
    </>
  );
}

export default BaseDemo;`,
      },
    },
  },
};

/**
 * 消息提示
 */
export const Promise: Story = {
  name: "消息提示",
  render: () => <TipDemo />,
  parameters: {
    docs: {
      description: {
        story: "Dialog 支持 Promise 风格的调用。",
      },
      source: {
        code: `
import { Cell, Dialog } from "@react-vant-next/ui";

export default function TipDemo() {
  return (
    <>
      <Cell
        title="弹窗提示"
        isLink
        onClick={() =>
          Dialog.confirm({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
            onCancel: () => console.log("cancel"),
            onConfirm: () => console.log("confirm"),
          })}
      />
      <Cell
        title="弹窗提示（无标题）"
        isLink
        onClick={() =>
          Dialog.alert({
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
      <Cell
        title="确认弹框"
        isLink
        onClick={() =>
          Dialog.confirm({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
    </>
  );
};`,
      },
    },
  },
};

// promise 调用
export const PromiseCall: Story = {
  name: "Promise 调用",
  render: () => <PromiseDemo />,
  parameters: {
    docs: {
      description: {
        story: "Dialog 支持 Promise 风格的调用。",
      },
      source: {
        code: `import { Cell, Dialog } from "@react-vant-next/ui";

function PromiseDemo() {
  return (
    <>
      <Cell
        title="Dialog.alert"
        isLink
        onClick={async () => {
          await Dialog.alert({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
          });
          console.log("confirm");
        }}
      />
      <Cell
        title="Dialog.confirm"
        isLink
        onClick={async () => {
          try {
            await Dialog.confirm({
              title: "标题",
              message: "代码是写出来给人看的，附带能在机器上运行",
            });
            console.log("confirm");
          }
          catch {
            console.log("cancel");
          }
        }}
      />
    </>
  );
}

export default PromiseDemo;`,
      },
    },
  },
};

/**
 * 圆角按钮风格
 */
export const RoundButton: Story = {
  name: "圆角按钮风格",
  render: () => <ThemeDemo />,
  parameters: {
    docs: {
      description: {
        story: "将 theme 选项设置为 round-button 可以展示圆角按钮风格的弹窗。",
      },
      source: {
        code: `import { Cell, Dialog } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <>
      <Cell
        title="圆角按钮弹窗"
        isLink
        onClick={() =>
          Dialog.alert({
            title: "标题",
            theme: "round-button",
            showCancelButton: true,
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
      <Cell
        title="圆角按钮弹窗（无标题）"
        isLink
        onClick={() =>
          Dialog.alert({
            message: "代码是写出来给人看的，附带能在机器上运行",
            theme: "round-button",
          })}
      />
    </>
  );
};
`,
      },
    },
  },
};

/**
 * 自定义内容
 */
export const Custom: Story = {
  name: "自定义内容",
  render: () => <CustomDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 children 属性可以传入自定义内容。",
      },
      source: {
        code: `import { Cell, Dialog } from "@react-vant-next/ui";

export default () => {
  return (
    <Cell
      title="自定义内容"
      isLink
      onClick={() =>
        Dialog.alert({
          title: "标题",
          closeable: true,
          theme: "round-button",
          message: (
            <div style={{ textAlign: "center", margin: "16px" }}>
              自定义内容：代码是写出来给人看的，附带能在机器上运行
            </div>
          ),
        })}
    />
  );
};
`,
      },
    },
  },
};

/**
 * 异步关闭
 */
export const AsyncClose: Story = {
  name: "异步关闭",
  render: () => <CloseDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 onConfirm 和 onCancel 属性返回 Promise 可以实现异步关闭。",
      },
      source: {
        code: `import { Cell, Dialog, Toast } from "@react-vant-next/ui";

export default () => {
  return (
    <>
      <Cell
        title="完全关闭后的回调"
        isLink
        onClick={() =>
          Dialog.alert({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
            onClosed: () => console.log("onClosed"),
          })}
      />
      <Cell
        title="异步关闭"
        isLink
        onClick={() =>
          Dialog.show({
            title: "标题",
            message: "弹窗内容",
            showCancelButton: true,
            onCancel: () => {
              return new Promise((res) => {
                setTimeout(() => {
                  res(true);
                  Toast.success({ message: "取消按钮异步" });
                }, 3000);
              });
            },
            onConfirm: () => {
              return new Promise((res) => {
                setTimeout(() => {
                  res(true);
                  Toast.success({ message: "确认按钮异步" });
                }, 3000);
              });
            },
          })}
      />
    </>
  );
};
`,
      },
    },
  },
};

/**
 * 关闭图标
 */
export const CloseIcon: Story = {
  name: "关闭图标",
  render: () => <CloseIconDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 closeable 和 closeIcon 属性可以自定义关闭图标。",
      },
      source: {
        code: `import { Close } from "@react-vant-next/icons";
import { Cell, Dialog } from "@react-vant-next/ui";

export default () => {
  return (
    <>
      <Cell
        title="关闭按钮"
        isLink
        onClick={() =>
          Dialog.alert({
            title: "标题",
            closeable: true,
            theme: "round-button",
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
      <Cell
        title="自定义关闭按钮"
        isLink
        onClick={() =>
          Dialog.alert({
            title: "标题",
            closeable: true,
            closeIcon: <Close />,
            theme: "round-button",
            message: "代码是写出来给人看的，附带能在机器上运行",
          })}
      />
    </>
  );
};`,
      },
    },
  },
};

/**
 * 组件调用
 */
export const Component: Story = {
  name: "组件调用",
  render: () => <ComponentDemo />,
  parameters: {
    docs: {
      description: {
        story: "组件调用模式下，通过控制 visible 属性来显示/隐藏弹窗。",
      },
      source: {
        code: `import { Cell, Dialog, Toast } from "@react-vant-next/ui";
import { useState } from "react";
import "./style.less";

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        title="标题"
        showCancelButton
        onConfirm={() => {
          Toast.info("点击确认按钮");
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      >
        <img
          className="demo-dialog-img"
          src="https://img.yzcdn.cn/vant/apple-3.jpg"
          alt="2131"
        />
      </Dialog>
    </>
  );
};
`,
      },
    },
  },
};
