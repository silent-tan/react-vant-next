import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tag } from "@react-vant-next/ui";
import { ProductCard } from "../index";

const meta = {
  title: "Biz/ProductCard",
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component: "商品卡片，用于展示商品的图片、价格等信息。",
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
    thumb: {
      description: "左侧图片 URL，或自定义内容",
      table: {
        category: "基础",
        type: { summary: "string | ReactNode" },
      },
      control: "text",
    },
    title: {
      description: "标题",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    desc: {
      description: "描述",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    num: {
      description: "商品数量",
      table: {
        category: "基础",
        type: { summary: "number | string | ReactNode" },
      },
      control: "text",
    },
    // 外观
    price: {
      description: "商品价格",
      table: {
        category: "外观",
        type: { summary: "number | string | ReactNode" },
      },
      control: "text",
    },
    originPrice: {
      description: "商品划线原价",
      table: {
        category: "外观",
        type: { summary: "number | string | ReactNode" },
      },
      control: "text",
    },
    currency: {
      description: "货币符号",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "¥" },
      },
      control: "text",
    },
    decimal: {
      description: "补全价格两位小数",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    centered: {
      description: "内容是否垂直居中",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    tag: {
      description: "图片角标",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    lazyload: {
      description: "是否开启图片懒加载",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    thumbLink: {
      description: "点击左侧图片后跳转的链接地址",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
      control: "text",
    },
    priceTop: {
      description: "自定义价格上方区域",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    bottom: {
      description: "自定义价格下方区域",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    tags: {
      description: "自定义描述下方标签区域",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    footer: {
      description: "自定义右下角内容",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
    },
    // 事件
    onClick: {
      description: "点击时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
    onClickThumb: {
      description: "点击自定义图片时触发",
      table: {
        category: "事件",
        type: { summary: "(event: MouseEvent) => void" },
      },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: _args => (
    <ProductCard
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "商品卡片组件用于展示商品的图片、价格等信息。",
      },
    },
  },
};

// 营销信息
export const Marketing: Partial<Story> = {
  name: "营销信息",
  render: _args => (
    <ProductCard
      tag="标签"
      num="2"
      price="2.00"
      originPrice="10.00"
      desc="描述信息"
      title="商品名称"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `originPrice` 设置商品原价，通过 `tag` 设置商品左上角标签。",
      },
    },
  },
};

// 自定义内容
export const CustomContent: Partial<Story> = {
  name: "自定义内容",
  render: (_args) => {
    return (
      <ProductCard
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品名称"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        tags={(
          <>
            <Tag plain type="danger" style={{ marginRight: 5 }}>
              标签
            </Tag>
            <Tag plain type="danger">
              标签
            </Tag>
          </>
        )}
        footer={(
          <>
            <Button size="mini" round plain style={{ marginRight: 2 }}>
              标签1
            </Button>
            <Button size="mini" round plain>
              标签2
            </Button>
          </>
        )}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "`ProductCard` 组件提供了多个插槽，可以灵活地自定义内容。",
      },

    },
  },
};

// 价格格式化
export const PriceFormatting: Partial<Story> = {
  name: "价格格式化",
  render: _args => (
    <ProductCard
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      title="商品名称"
      desc="描述信息"
      price={2999.99}
      decimal
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `decimal` 属性可以控制价格是否显示小数点后两位。",
      },
    },
  },
};

// 垂直居中
export const Centered: Partial<Story> = {
  name: "垂直居中",
  render: _args => (
    <ProductCard
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      title="商品名称"
      desc="描述信息"
      price="4999"
      centered
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `centered` 属性可以使内容垂直居中。",
      },
    },
  },
};
