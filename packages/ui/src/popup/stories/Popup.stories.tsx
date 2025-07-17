import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { expect, within } from "storybook/test";
import Button from "../../button";
import Cell from "../../cell";
import PositionDemo from "../demo/position";
import Popup from "../index";

import "../demo/style.less";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Basic/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: {
    // 可选，控制故事如何在 Storybook 中显示
  },
  // 更多关于 argTypes 的信息: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    visible: {
      description: "是否显示弹出层",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    overlay: {
      description: "是否显示遮罩层",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    position: {
      description: "弹出位置",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "center" },
      },
      control: "select",
      options: ["center", "top", "right", "bottom", "left"],
    },
    duration: {
      description: "动画时长，单位秒",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "0.3" },
      },
      control: "number",
    },
    round: {
      description: "是否显示圆角",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    closeable: {
      description: "是否显示关闭图标",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    closeIconPosition: {
      description: "关闭图标位置",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "top-right" },
      },
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
    closeOnClickOverlay: {
      description: "是否在点击遮罩层后关闭",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    lockScroll: {
      description: "是否锁定背景滚动",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    destroyOnClose: {
      description: "关闭时销毁 Popup 里的子元素",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    safeAreaInsetBottom: {
      description: "是否开启底部安全区适配",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
} satisfies Meta<typeof Popup>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Cell title="展示弹出层" isLink onClick={() => setVisible(true)} />
        <Popup
          {...args}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div data-testid="popup-content">内容</div>
        </Popup>
      </>
    );
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: "通过 `visible` 控制弹出层是否显示。",
      },
      story: {
        autoplay: false,
      },
    },
  },
  play: async ({ canvasElement, userEvent }) => {
    const container = within(canvasElement.parentElement);
    await userEvent.click(container.getByText("展示弹出层"));
    await expect(container.getByTestId("popup-content")).toBeInTheDocument();
  },
};

// 弹出位置
export const Position: Story = {
  render: () => {
    return <PositionDemo />;
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: "通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。",
      },
      source: {
        language: "tsx",
        code: `
import type { PopupPosition } from "@react-vant-next/ui";
import { Cell, Popup } from "@react-vant-next/ui";
import React, { useState } from "react";

export default function PositionDemo() {
  const [state, setState] = useState<PopupPosition>("");

  const onClose = () => setState("");

  return (
    <>
      <Cell title="顶部弹出" isLink onClick={() => setState("top")} />
      <Cell title="底部弹出" isLink onClick={() => setState("bottom")} />
      <Cell title="左侧弹出" isLink onClick={() => setState("left")} />
      <Cell title="右侧弹出" isLink onClick={() => setState("right")} />

      <Popup
        visible={state === "top"}
        style={{ height: "30%" }}
        position="top"
        onClose={onClose}
      />
      <Popup
        visible={state === "bottom"}
        style={{ height: "30%" }}
        position="bottom"
        onClose={onClose}
      />
      <Popup
        visible={state === "left"}
        style={{ width: "30%", height: "100%" }}
        position="left"
        onClose={onClose}
      />
      <Popup
        visible={state === "right"}
        style={{ width: "30%", height: "100%" }}
        position="right"
        onClose={onClose}
      />
    </>
  );
};

`,
      },
    },
  },
};

// 关闭图标
export const CloseIcon: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);
    const [closeIcon, setCloseIcon] = useState(true);
    const [closeIconPosition, setCloseIconPosition] = useState<"top-left" | "top-right" | "bottom-left" | "bottom-right">("top-right");

    return (
      <>
        <Cell
          title="关闭图标"
          isLink
          onClick={() => {
            setCloseIcon(true);
            setCloseIconPosition("top-right");
            setVisible(true);
          }}
        />
        <Cell
          title="自定义图标位置"
          isLink
          onClick={() => {
            setCloseIcon(true);
            setCloseIconPosition("bottom-right");
            setVisible(true);
          }}
        />

        <Popup
          visible={visible}
          closeable={closeIcon}
          closeIconPosition={closeIconPosition}
          {...args}
          style={{ height: "30%", padding: "30px 50px" }}
          position="bottom"
          onClose={() => setVisible(false)}
        >
          内容
        </Popup>
      </>
    );
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: "设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIconPosition` 属性自定义图标位置。",
      },
    },
  },
};

// 圆角弹窗
export const Rounded: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Cell title="圆角弹窗" isLink onClick={() => setVisible(true)} />
        <Popup
          visible={visible}
          round
          style={{ padding: "30px 50px" }}
          position="bottom"
          onClose={() => setVisible(false)}
          {...args}
        >
          内容
        </Popup>
      </>
    );
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: "设置 `round` 属性后，弹窗会有圆角效果。",
      },
    },
  },
};

// 自定义内容
export const CustomContent: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Cell title="自定义内容" isLink onClick={() => setVisible(true)} />
        <Popup
          {...args}
          visible={visible}
          style={{ height: "40%", padding: "20px" }}
          position="bottom"
          round
          onClose={() => setVisible(false)}
        >
          <div style={{ padding: "20px", height: "100%", overflowY: "auto" }}>
            <h3 style={{ margin: "0 0 16px" }}>标题</h3>
            <p style={{ margin: "0 0 16px" }}>这是一段自定义内容</p>
            <Button type="primary" block onClick={() => setVisible(false)}>
              关闭弹窗
            </Button>
          </div>
        </Popup>
      </>
    );
  },
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Popup 组件可以接收任意 React 组件作为内容。",
      },
    },
  },
};
