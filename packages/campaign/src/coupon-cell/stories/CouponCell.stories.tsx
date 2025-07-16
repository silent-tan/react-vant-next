import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CouponInfo } from "../../coupon-list/PropsType";
import CouponCell from "../index";

// 示例优惠券数据
const coupons: CouponInfo[] = [
  {
    id: 1,
    name: "优惠券名称",
    value: 150,
    denominations: 0,
    originCondition: 0,
    startAt: 1489104000,
    endAt: 1514592000,
    description: "描述信息",
  },
  {
    id: 2,
    name: "满减券",
    value: 0,
    denominations: 1000,
    originCondition: 5000,
    startAt: 1489104000,
    endAt: 1514592000,
    description: "满 50 减 10",
  },
];

const meta = {
  id: "biz-coupon-cell",
  title: "Biz/CouponCell",
  component: CouponCell,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "优惠券单元格，用于展示优惠券信息。",
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "单元格标题",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "优惠券" },
        required: false,
      },
    },
    border: {
      control: { type: "boolean" },
      description: "是否显示边框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    editable: {
      control: { type: "boolean" },
      description: "是否可点击进入优惠券选择页",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    chosenCoupon: {
      control: { type: "number" },
      description: "选中优惠券的索引",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "-1" },
        required: false,
      },
    },
    coupons: {
      control: { type: "object" },
      description: "可用优惠券列表",
      table: {
        type: { summary: "CouponInfo[]" },
        defaultValue: { summary: "[]" },
        required: false,
      },
    },
    currency: {
      control: { type: "text" },
      description: "货币符号",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "¥" },
        required: false,
      },
    },
    onClick: {
      description: "点击单元格时触发",
      table: {
        type: { summary: "(event?: React.MouseEvent) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof CouponCell>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Default: Story = {
  render: args => <CouponCell {...args} />,
  args: {
    coupons: [],
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
      source: {
        type: "code",
        language: "tsx",
        code: "<CouponCell />",
      },
    },
  },
};

// 选中状态
export const Selected: Story = {
  render: args => <CouponCell {...args} />,
  args: {
    coupons,
    chosenCoupon: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `chosenCoupon` 属性设置选中的优惠券，`chosenCoupon` 为对应优惠券在 `coupons` 数组中的索引。",
      },
      source: {
        language: "tsx",
        code: `const coupons = [
  {
    id: 1,
    name: "优惠券名称",
    value: 150,
    denominations: 0,
    originCondition: 0,
    startAt: 1489104000,
    endAt: 1514592000,
    description: "描述信息",
  },
];

<CouponCell coupons={coupons} chosenCoupon={0} />`,
      },
    },
  },
};

// 自定义单元格内容
export const CustomTitle: Story = {
  render: args => <CouponCell {...args} />,
  args: {
    coupons,
    title: "优惠券选择",
    chosenCoupon: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `title` 属性设置单元格标题。",
      },
      source: {
        language: "tsx",
        code: `<CouponCell title="优惠券选择" coupons={coupons} chosenCoupon={1} />`,
      },
    },
  },
};

// 禁用点击
export const Disabled: Story = {
  render: args => <CouponCell {...args} />,
  args: {
    coupons,
    editable: false,
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `editable` 属性设置是否可点击进入优惠券选择页。",
      },
      source: {
        language: "tsx",
        code: `<CouponCell coupons={coupons} editable={false} />`,
      },
    },
  },
};

// 自定义货币符号
export const CustomCurrency: Story = {
  render: args => <CouponCell {...args} />,
  args: {
    coupons,
    chosenCoupon: 0,
    currency: "$",
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `currency` 属性设置货币符号。",
      },
      source: {
        language: "tsx",
        code: `<CouponCell coupons={coupons} chosenCoupon={0} currency="$" />`,
      },
    },
  },
};

// 点击事件
export const ClickEvent: Story = {
  render: () => {
    const handleClick = () => {
      console.log("点击了优惠券单元格");
      // 实际使用中可以跳转到优惠券列表页
    };

    return <CouponCell coupons={coupons} onClick={handleClick} />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `onClick` 属性设置点击单元格时的回调函数。",
      },
      source: {
        language: "tsx",
        code: `const handleClick = () => {
  console.log("点击了优惠券单元格");
  // 实际使用中可以跳转到优惠券列表页
};

<CouponCell coupons={coupons} onClick={handleClick} />`,
      },
    },
  },
};
