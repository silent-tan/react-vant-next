import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoO } from "@react-vant-next/icons";
import { Checkbox } from "@react-vant-next/ui";

import { SubmitBar } from "../index";
import "../demo/style.less";

const meta = {
  title: "Biz/SubmitBar",
  component: SubmitBar,
  parameters: {
    docs: {
      description: {
        component: "用于展示订单金额与提交订单。",
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
    children: {
      description: "自定义内容",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
    price: {
      description: "金额（单位分）",
      table: {
        category: "基础",
        type: { summary: "number | string" },
      },
      control: { type: "number" },
    },
    decimalLength: {
      description: "金额小数点位数",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "2" },
      },
      control: { type: "number" },
    },
    label: {
      description: "金额左侧文案",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "合计：" },
      },
      control: "text",
    },
    suffixLabel: {
      description: "金额右侧文案",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    currency: {
      description: "货币符号",
      table: {
        category: "基础",
        type: { summary: "string" },
        defaultValue: { summary: "¥" },
      },
      control: "text",
    },

    // 外观
    textAlign: {
      description: "金额文案对齐方向",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "right" },
      },
      control: "select",
      options: ["left", "right"],
    },
    buttonText: {
      description: "按钮文字",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
      control: "text",
    },
    buttonType: {
      description: "按钮类型",
      table: {
        category: "外观",
        type: { summary: "ButtonType" },
        defaultValue: { summary: "danger" },
      },
      control: "select",
      options: ["primary", "success", "warning", "danger"],
    },
    buttonColor: {
      description: "自定义按钮颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
      control: "color",
    },
    tip: {
      description: "在订单栏上方的提示文案",
      table: {
        category: "外观",
        type: { summary: "string | ReactNode" },
      },
      control: "text",
    },
    tipIcon: {
      description: "提示文案左侧的图标",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    button: {
      description: "自定义按钮",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    top: {
      description: "自定义订单栏上方内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },

    // 状态
    disabled: {
      description: "是否禁用按钮",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    loading: {
      description: "是否显示将按钮显示为加载中状态",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    safeAreaInsetBottom: {
      description: "是否开启底部安全区适配",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    // 事件
    onSubmit: {
      description: "按钮点击事件回调",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
      action: "onSubmit",
    },
  },
} satisfies Meta<typeof SubmitBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: _args => (
    <div className="demo-submit-bar">
      <SubmitBar price="3050" buttonText="提交订单" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "基础用法",
      },
    },
  },
};

// 禁用状态
export const Disabled: Partial<Story> = {
  name: "禁用状态",
  render: _args => (
    <div className="demo-submit-bar">
      <SubmitBar
        disabled
        price="3050"
        tip="你的收货地址不支持同城送, 我们已为你推荐快递"
        tipIcon={<InfoO />}
        buttonText="提交订单"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "禁用状态下不会触发 `onSubmit` 事件。",
      },
    },
  },
};

// 加载状态
export const Loading: Partial<Story> = {
  name: "加载状态",
  render: _args => (
    <div className="demo-submit-bar">
      <SubmitBar loading price="3050" buttonText="提交订单" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "加载状态下不会触发 `onSubmit` 事件。",
      },
    },
  },
};

// 高级用法
export const Advanced: Partial<Story> = {
  name: "高级用法",
  render: _args => (
    <div className="demo-submit-bar">
      <SubmitBar
        price="3050"
        buttonText="提交订单"
        tip={(
          <>
            你的收货地址不支持同城送,
            <span style={{ color: "#1989fa" }}>修改地址</span>
          </>
        )}
      >
        <Checkbox>全选</Checkbox>
      </SubmitBar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "自定义内容。",
      },
    },
  },
};
