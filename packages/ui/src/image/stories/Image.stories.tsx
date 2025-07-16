import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex, Loading } from "@react-vant-next/ui";
import Image from "../index";

import "../demo/style.less";

const meta = {
  id: "basic-image",
  title: "Basic/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "增强版的 img 标签，提供多种图片填充模式，支持加载中提示、加载失败提示。",
      },
    },
  },
  globals: {
    backgrounds: {
      value: "white",
    },
  },
  argTypes: {
    style: {
      control: {
        type: "object",
      },
      table: {
        type: { summary: "CSSProperties" },
        category: "基础",
      },
    },
    className: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "string" },
        category: "基础",
      },
    },
    children: {
      table: {
        type: { summary: "React.ReactNode" },
        category: "基础",
      },
    },
    src: {
      control: { type: "text" },
      description: "图片链接",
      table: {
        type: { summary: "string" },
        required: false,
        category: "基础",
      },
    },
    alt: {
      control: { type: "text" },
      description: "替代文本",
      table: {
        type: { summary: "string" },
        required: false,
        category: "基础",
      },
    },
    fit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "none", "scale-down"],
      description: "图片填充模式",
      table: {
        type: { summary: "'contain' | 'cover' | 'fill' | 'none' | 'scale-down'" },
        required: false,
        category: "外观",
      },
    },
    round: {
      control: { type: "boolean" },
      description: "是否显示为圆形",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    block: {
      control: { type: "boolean" },
      description: "是否为块级元素",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
        category: "外观",
      },
    },
    width: {
      control: { type: "text" },
      description: "宽度，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "外观",
      },
    },
    height: {
      control: { type: "text" },
      description: "高度，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "外观",
      },
    },
    radius: {
      control: { type: "text" },
      description: "圆角大小，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "外观",
      },
    },
    iconSize: {
      control: { type: "text" },
      description: "加载图标和失败图标的大小",
      table: {
        type: { summary: "number | string" },
        required: false,
        category: "外观",
      },
    },
    showError: {
      control: { type: "boolean" },
      description: "是否展示图片加载失败提示",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    showLoading: {
      control: { type: "boolean" },
      description: "是否展示图片加载中提示",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
        category: "外观",
      },
    },
    errorIcon: {
      control: { type: "object" },
      description: "失败时提示的图标名称或图片链接",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<PhotoFail />" },
        required: false,
        category: "外观",
      },
    },
    loadingIcon: {
      control: { type: "object" },
      description: "加载时提示的图标名称或图片链接",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<Photo />" },
        required: false,
        category: "外观",
      },
    },
    lazyload: {
      control: { type: "object" },
      description: "是否开启图片懒加载",
      table: {
        type: { summary: "boolean | { placeholder?: React.ReactNode }" },
        required: false,
        category: "基础",
      },
    },
    onLoad: {
      description: "图片加载完毕时触发",
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLImageElement>) => void" },
        required: false,
        category: "事件",
      },
    },
    onError: {
      description: "图片加载失败时触发",
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLImageElement>) => void" },
        required: false,
        category: "事件",
      },
    },
    onClick: {
      description: "点击图片时触发",
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLImageElement>) => void" },
        required: false,
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  args: {
    src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    width: "100",
    height: "100",
  },
  render: (args) => {
    return (
      <Image {...args} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "基础用法，通过 src 属性设置图片链接。",
      },
    },
  },
};

// 填充模式
export const FitMode: Story = {
  name: "填充模式",
  args: {
    src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    width: "100",
    height: "100",
  },
  render: (args) => {
    const fits = ["contain", "cover", "fill", "none", "scale-down"] as const;

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {fits.map(fit => (
          <div key={fit} style={{ textAlign: "center" }}>
            <Image
              {...args}
              fit={fit}
              style={{ marginBottom: "8px" }}
            />
            <div>{fit}</div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 fit 属性可以设置图片填充模式，可选值为 contain、cover、fill、none、scale-down。",
      },
    },
  },
};

// 圆形图片
export const Round: Story = {
  name: "圆形图片",
  args: {
    src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    width: "100",
    height: "100",
  },
  render: (args) => {
    const fits = ["contain", "cover", "fill", "none", "scale-down"] as const;

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {fits.map(fit => (
          <div key={fit} style={{ textAlign: "center" }}>
            <Image
              {...args}
              fit={fit}
              round
              style={{ marginBottom: "8px" }}
            />
            <div>{fit}</div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。",
      },
    },
  },
};

// 加载中提示
export const LoadingExample: Story = {
  name: "加载中提示",
  args: {
    width: "100",
    height: "100",
  },
  render: (args) => {
    return (
      <div className="demo-image">
        <Flex wrap="wrap" gutter={20}>
          <Flex.Item>
            <Image {...args} />
            <div className="text">默认提示</div>
          </Flex.Item>
          <Flex.Item>
            <Image
              width="100"
              height="100"
              showLoading
              loadingIcon={<Loading type="spinner" />}
            />
            <div className="text">自定义提示</div>
          </Flex.Item>
        </Flex>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Image 组件提供了默认的加载中提示，支持通过 loadingIcon 自定义内容。",
      },
    },
  },
  globals: {
    backgrounds: {
      value: "white",
    },
  },
};

// 加载失败提示
export const ErrorExample: Story = {
  name: "加载失败提示",
  args: {
    width: "100",
    height: "100",
  },
  render: (args) => {
    return (
      <div className="demo-image">
        <Flex wrap="wrap" gutter={20}>
          <Flex.Item>
            <Image {...args} src="x.jpg" />
            <div className="text">默认提示</div>
          </Flex.Item>
          <Flex.Item>
            <Image
              {...args}
              src="x.jpg"
              errorIcon={<div style={{ fontSize: 14 }}>加载失败</div>}
            />
            <div className="text">自定义提示</div>
          </Flex.Item>
        </Flex>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Image 组件提供了默认的加载失败提示，支持通过 errorIcon 自定义内容。",
      },
    },
  },
  globals: {
    backgrounds: {
      value: "white",
    },
  },
};

// 图片懒加载
export const LazyloadExample: Story = {
  name: "图片懒加载",
  render: (args) => {
    const imageList = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg",
      "https://img.yzcdn.cn/vant/apple-3.jpg",
      "https://img.yzcdn.cn/vant/apple-4.jpg",
      "https://img.yzcdn.cn/vant/apple-5.jpg",
      "https://img.yzcdn.cn/vant/apple-6.jpg",
      "https://img.yzcdn.cn/vant/apple-7.jpg",
    ];
    return (
      <div className="demo-lazyimage">
        {imageList.map(img => (
          <Image lazyload={args.lazyload} src={img} key={img} />
        ))}
      </div>
    );
  },
  args: {
    lazyload: true,
  },
  parameters: {
    docs: {
      description: {
        story: "设置 lazyload 属性来开启图片懒加载，需要注意的是懒加载特性依赖 IntersectionObserver API，部分浏览器不支持。",
      },
    },
  },
};

// 自定义圆角
export const CustomRadiusExample: Story = {
  name: "自定义圆角",
  args: {
    src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    width: "100",
    height: "100",
    radius: "8px",
  },
  render: (args) => {
    return (
      <Image {...args} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 radius 属性设置图片圆角大小。",
      },
    },
  },
};

// 自定义图标大小
export const CustomIconSizeExample: Story = {
  name: "自定义图标大小",
  args: {
    iconSize: 40,
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: "16px" }}>
        <Image
          width="100"
          height="100"
          iconSize={args.iconSize}
        />
        <Image
          width="100"
          height="100"
          src="https://invalid-url"
          iconSize={args.iconSize}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 iconSize 属性设置加载图标和失败图标的大小。",
      },
    },
  },
};

// 块级元素
export const BlockElementExample: Story = {
  name: "块级元素",
  args: {
    src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    block: true,
  },
  render: (args) => {
    return (
      <Image {...args} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "设置 block 属性可以让图片渲染为块级元素，此时会占满父元素的宽度。",
      },
    },
  },
};
