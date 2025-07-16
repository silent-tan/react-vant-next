import type { Meta, StoryObj } from "@storybook/react-vite";
import BaseDemo from "../demo/base";
import FloatingPanel from "../index";

const meta = {
  id: "components-floating-panel",
  title: "Display/FloatingPanel",
  component: FloatingPanel,
  parameters: {
    docs: {
      description: {
        component: "可以上下拖动的浮动面板。",
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
    children: {
      description: "面板内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    // 外观
    anchors: {
      control: { type: "object" },
      description: "可拖拽至哪些高度，单位为 px",
      table: {
        category: "外观",
        type: { summary: "number[]" },
        defaultValue: { summary: "[100]" },
      },
    },
    // 事件
    onHeightChange: {
      description: "面板高度变化时触发",
      table: {
        category: "事件",
        type: { summary: "(height: number) => void" },
      },
    },
  },
} satisfies Meta<typeof FloatingPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: (_args) => {
    return <BaseDemo />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 anchors 属性设置面板的锚点高度，当面板拖动到锚点附近时，会自动吸附到对应的高度。",
      },
      source: {
        language: "tsx",
        code: `import { CartO, Discount, LocationO, StarO } from "@react-vant-next/icons";
import { Divider, FloatingPanel, Grid, ProductCard, Search } from "@react-vant-next/ui";

export default function BaseDemo() {
  return (
    <div>
      <FloatingPanel anchors={[170, 320, window.innerHeight * 0.8]}>
        <Search />
        <Grid gutter={8}>
          <Grid.Item icon={<LocationO />} onClick={() => 0} text="附近" />
          <Grid.Item icon={<StarO />} onClick={() => 0} text="收藏" />
          <Grid.Item icon={<CartO />} onClick={() => 0} text="购物车" />
          <Grid.Item icon={<Discount />} onClick={() => 0} text="优惠" />
        </Grid>
        <Divider>好物推荐</Divider>
        {Array.from(Array.from({ length: 5 })).map((_, index) => (
          <ProductCard
            key={index}
            title={\`热卖商品\${index}\`}
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            desc="热卖商品，优惠后 2.00"
            num={3}
            price="2.00"
          />
        ))}
      </FloatingPanel>
    </div>
  );
};
`,
      },
    },
  },
};
