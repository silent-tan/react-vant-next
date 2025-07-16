import type { Meta, StoryObj } from "@storybook/react-vite";
import CouponList from "../CouponList";
import CouponListDemo from "../demo";

const meta = {
  id: "biz-coupon-list",
  title: "Biz/CouponList",
  component: CouponList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于优惠券的兑换和选择。",
      },
      toc: false,
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
    code: {
      control: { type: "text" },
      description: "当前输入的兑换码",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
    },
    chosenCoupon: {
      control: { type: "number" },
      description: "当前选中优惠券的索引",
      table: {
        category: "基础",
        type: { summary: "number" },
        defaultValue: { summary: "-1" },
      },
    },
    coupons: {
      control: { type: "object" },
      description: "可用优惠券列表",
      table: {
        category: "基础",
        type: { summary: "Coupon[]" },
        defaultValue: { summary: "[]" },
      },
    },
    disabledCoupons: {
      control: { type: "object" },
      description: "不可用优惠券列表",
      table: {
        category: "基础",
        type: { summary: "Coupon[]" },
        defaultValue: { summary: "[]" },
      },
    },

    // 外观
    enabledTitle: {
      control: { type: "text" },
      description: "可用优惠券列表标题",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "可使用优惠券" },
      },
    },
    disabledTitle: {
      control: { type: "text" },
      description: "不可用优惠券列表标题",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "不可使用优惠券" },
      },
    },
    exchangeButtonText: {
      control: { type: "text" },
      description: "兑换按钮文字",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "兑换" },
      },
    },
    closeButtonText: {
      control: { type: "text" },
      description: "列表底部按钮文字",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "不使用优惠" },
      },
    },
    inputPlaceholder: {
      control: { type: "text" },
      description: "输入框文字提示",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "请输入优惠码" },
      },
    },
    currency: {
      control: { type: "text" },
      description: "货币符号",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "¥" },
      },
    },
    emptyImage: {
      control: { type: "text" },
      description: "列表为空时的占位图",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "https://img.yzcdn.cn/vant/coupon-empty.png" },
      },
    },

    // 状态
    exchangeButtonLoading: {
      control: { type: "boolean" },
      description: "是否显示兑换按钮加载动画",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    exchangeButtonDisabled: {
      control: { type: "boolean" },
      description: "是否禁用兑换按钮",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // 其他
    showCount: {
      control: { type: "boolean" },
      description: "是否展示可用 / 不可用数量",
      table: {
        category: "其他",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showExchangeBar: {
      control: { type: "boolean" },
      description: "是否展示兑换栏",
      table: {
        category: "其他",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "是否显示列表底部按钮",
      table: {
        category: "其他",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    exchangeMinLength: {
      control: { type: "number" },
      description: "兑换码最小长度",
      table: {
        category: "其他",
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    displayedCouponIndex: {
      control: { type: "number" },
      description: "滚动至特定优惠券位置",
      table: {
        category: "其他",
        type: { summary: "number" },
      },
    },
    listFooter: {
      control: { type: "object" },
      description: "优惠券列表底部",
      table: {
        category: "其他",
        type: { summary: "ReactNode" },
      },
    },
    disabledListFooter: {
      control: { type: "object" },
      description: "不可用优惠券列表底部",
      table: {
        category: "其他",
        type: { summary: "ReactNode" },
      },
    },
    tabsProps: {
      control: { type: "object" },
      description: "Tabs 组件属性",
      table: {
        category: "其他",
        type: { summary: "Omit<TabsProps, 'children'>" },
      },
    },

    // 事件
    onExchange: {
      description: "兑换优惠券回调",
      table: {
        category: "事件",
        type: { summary: "(code: string) => void" },
      },
    },
    onChange: {
      description: "优惠券切换回调",
      table: {
        category: "事件",
        type: { summary: "(index: number) => void" },
      },
    },
  },
} satisfies Meta<typeof CouponList>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => <CouponListDemo />,
  parameters: {
    docs: {
      description: {
        story: "用于优惠券的兑换和选择。",
      },
      source: {
        code: `import { CouponCell, CouponList, Popup, Toast } from "@react-vant-next/ui";
import { useState } from "react";
import { data, disabledCoupon, disabledDiscountCoupon } from "./demo";

function getRandomId(max = 999999) {
  return String(Math.floor(Math.random() * max) + 1);
}

export default function CouponListDemo() {
  const [coupons, setCoupons] = useState([data, disabledDiscountCoupon]);
  const [disabledCoupons] = useState([disabledCoupon, disabledDiscountCoupon]);
  const [chosenCoupon, setChosenCoupon] = useState(-1);
  const [visible, setVisible] = useState(false);

  const onChange = (index: number) => {
    setVisible(false);
    setChosenCoupon(index);
  };

  const onExchange = (code) => {
    console.log("code: ", code);
    Toast("兑换成功");
    setCoupons(v => [...v, { ...data, id: getRandomId() } as any]);
  };

  return (
    <>
      <CouponCell
        coupons={coupons}
        chosenCoupon={chosenCoupon}
        onClick={() => setVisible(true)}
      />
      <Popup
        round
        position="bottom"
        style={{ height: "90%", paddingTop: 4 }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CouponList
          chosenCoupon={chosenCoupon}
          coupons={coupons}
          disabledCoupons={disabledCoupons}
          onChange={onChange}
          onExchange={onExchange}
        />
      </Popup>
    </>
  );
}
`,
      },
    },
  },
};
