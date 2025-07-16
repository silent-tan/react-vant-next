import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "@react-vant-next/ui";
import BaseDemo from "../demo/base";
import { items } from "../demo/items";

import LazyloadComponent from "../demo/lazy";
import Swiper from "../index";
import "../demo/base.less";
import "../demo/indicator.less";

const meta = {
  id: "components-swiper",
  title: "Display/Swiper",
  component: Swiper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于循环播放一组图片或内容。",
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
      description: "轮播内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactElement | React.ReactElement[]" },
      },
    },
    initialSwipe: {
      description: "初始位置索引值",
      table: {
        category: "基础",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: "number",
    },

    // 外观
    vertical: {
      description: "是否为纵向滚动",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    slideSize: {
      description: "滑块的宽度百分比",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
      control: "number",
    },
    trackOffset: {
      description: "滑块轨道整体的偏移量百分比",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    autoHeight: {
      description: "自适应高度",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    indicator: {
      description: "自定义指示器",
      table: {
        category: "外观",
        type: { summary: "boolean | ((total: number, current: number) => React.ReactNode)" },
      },
    },
    indicatorProps: {
      description: "指示器属性",
      table: {
        category: "外观",
        type: { summary: "{ style?: React.CSSProperties; className?: string }" },
      },
    },

    // 状态
    enabled: {
      description: "是否启用 Swiper",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    touchable: {
      description: "是否可以通过手势滑动",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    loop: {
      description: "是否开启循环播放",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    autoplay: {
      description: "自动轮播间隔，单位为 ms",
      table: {
        category: "状态",
        type: { summary: "number | boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "number" },
    },

    // 行为
    duration: {
      description: "动画时长，单位为 ms",
      table: {
        category: "行为",
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
      control: "number",
    },
    rubberband: {
      description: "是否在拖动超出内容区域时启用橡皮筋效果，仅在非 loop 模式下生效",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    stuckAtBoundary: {
      description: "是否在边界两边卡住，避免出现空白，仅在非 loop 模式且 slideSize < 100 时生效",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    preventScroll: {
      description: "是否阻止内部滚动行为",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    // 事件
    onChange: {
      description: "每一页轮播结束后触发",
      table: {
        category: "事件",
        type: { summary: "(index: number) => void" },
      },
    },
  },
} satisfies Meta<typeof Swiper>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  name: "基础用法",
  render: () => (<BaseDemo />),
  parameters: {
    docs: {
      description: {
        story: "每个 Swiper.Item 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。",
      },
      source: {
        code: `
import { Swiper } from "@react-vant-next/ui";
import { items } from "./items";
import "./base.less";

export default function BaseDemo() {
  return (
    <div className="demo-swiper">
      <Swiper autoplay={5000}>{items}</Swiper>
    </div>
  );
};
`,
      },
    },
  },
};

// 懒加载示例
export const Lazyload: Story = {
  name: "懒加载",
  render: () => <LazyloadComponent />,
  parameters: {
    docs: {
      description: {
        story: "当 Swiper 中含有图片时，可以通过设置图片 `lazyload` 属性来开启懒加载模式。在懒加载模式下，只会渲染当前页，上一页和下一页。",
      },
      source: {
        code: `
import { Swiper, Image } from '@react-vant-next/ui';
import { images } from './images';
import './images.less';

export default function LazyloadComponent() {
  return (
    <div className="demo-swiper">
      <Swiper>
        {images.map((image) => (
          <Swiper.Item key={image}>
            <Image lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>
    </div>
  );
};
        `,
      },
    },
  },
};

// 监听 onChange 事件示例
export const OnChange: Story = {
  name: "监听 onChange 事件",
  render: () => (
    <div className="demo-swiper">
      <Swiper onChange={i => Toast(`当前索引${i}`)}>{items}</Swiper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "在每一页轮播结束后，会触发 `onChange` 事件。",
      },
      source: {
        code: `
const [current, setCurrent] = useState(0)

const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "150px",
      background: color,
      fontSize: "20px",
      color: "#fff",
    }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

return (
  <div>
    <Swiper onChange={(index) => setCurrent(index)}>{items}</Swiper>
    <div style={{ textAlign: "center", marginTop: "10px" }}>当前索引: {current}</div>
  </div>
)
        `,
      },
    },
  },
};

// 纵向滚动示例
export const Vertical: Story = {
  name: "纵向滚动",
  render: () => (
    <div className="demo-swiper">
      <Swiper autoplay={5000} vertical style={{ height: 150 }}>
        {items}
      </Swiper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。",
      },
      source: {
        code: `
const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "150px",
      background: color,
      fontSize: "20px",
      color: "#fff",
    }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

return <Swiper autoplay={5000} vertical style={{ height: 150 }}>{items}</Swiper>
        `,
      },
    },
  },
};

// 自定义滑块大小示例
export const CustomSize: Story = {
  name: "自定义滑块大小",
  render: () => (
    <div className="demo-swiper">
      <Swiper slideSize={80}>{items}</Swiper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "滑块默认宽度为 `100%`，可以通过 `slideSize` 属性改变滑块宽度。",
      },
      source: {
        code: `
const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "150px",
      background: color,
      fontSize: "20px",
      color: "#fff",
    }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

return <Swiper slideSize={80}>{items}</Swiper>
        `,
      },
    },
  },
};

// 滑块居中示例
export const Centered: Story = {
  name: "滑块居中",
  render: () => (
    <div className="demo-swiper">
      <Swiper slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `trackOffset` 改变滑块偏移量实现居中展示。",
      },
      source: {
        code: `
const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "150px",
      background: color,
      fontSize: "20px",
      color: "#fff",
    }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

return <Swiper slideSize={80} trackOffset={10}>{items}</Swiper>
        `,
      },
    },
  },
};

// 垂直滑块居中示例
export const VerticalCentered: Story = {
  name: "垂直滑块居中",
  render: () => (
    <div className="demo-swiper">
      <Swiper style={{ height: 150 }} vertical slideSize={80} trackOffset={10}>
        {items}
      </Swiper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "垂直模式下也可以使用 slideSize 和 trackOffset 属性实现居中显示。",
      },
      source: {
        code: `
const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "150px",
      background: color,
      fontSize: "20px",
      color: "#fff",
    }}>
      {index + 1}
    </div>
  </Swiper.Item>
))

return <Swiper style={{ height: 150 }} vertical slideSize={80} trackOffset={10}>{items}</Swiper>
        `,
      },
    },
  },
};

// 自定义指示器示例
export const CustomIndicator: Story = {
  name: "自定义指示器",
  render: _args => (
    <div className="demo-swiper">
      <Swiper
        indicator={(total, current) => (
          <div className="custom-indicator">
            {current + 1}
            /
            {total}
          </div>
        )}
      >
        {items}
      </Swiper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `indicator` 属性可以自定义指示器的样式。",
      },
    },
  },
};
