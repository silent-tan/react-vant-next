import type { Meta, StoryObj } from "@storybook/react-vite";
import AsyncCloseExample from "../demo/async";
import BasicExample from "../demo/base";
import ComponentCallExample from "../demo/component";
import ConfigExample from "../demo/config";
import TeleportExample from "../demo/teleport";
import ImagePreview from "../index";

const meta = {
  id: "components-image-preview",
  title: "Display/ImagePreview",
  component: ImagePreview,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "图片预览，支持函数调用和组件调用两种方式。",
      },
    },
  },
  argTypes: {
    // 基础
    className: {
      description: "自定义类名",
      table: {
        category: "基础",
        type: { summary: "string | Array | object" },
      },
    },
    style: {
      description: "自定义样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    visible: {
      control: { type: "boolean" },
      description: "是否显示图片预览",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    images: {
      control: { type: "object" },
      description: "需要预览的图片 URL 数组",
      table: {
        category: "基础",
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    teleport: {
      description: "指定挂载的节点",
      table: {
        category: "基础",
        type: { summary: "HTMLElement | (() => HTMLElement)" },
        defaultValue: { summary: "body" },
      },
    },

    // 外观
    overlay: {
      control: { type: "boolean" },
      description: "是否显示遮罩层",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    overlayStyle: {
      control: { type: "object" },
      description: "自定义遮罩层样式",
      table: {
        category: "外观",
        type: { summary: "React.CSSProperties" },
      },
    },
    showIndex: {
      control: { type: "boolean" },
      description: "是否显示页码",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showIndicators: {
      control: { type: "boolean" },
      description: "是否显示轮播指示器",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    indexRender: {
      description: "自定义页码渲染",
      table: {
        category: "外观",
        type: { summary: "({ index, len }: { index: number; len: number }) => React.ReactNode" },
      },
    },
    closeable: {
      control: { type: "boolean" },
      description: "是否显示关闭图标",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeIcon: {
      control: { type: "object" },
      description: "关闭图标名称或图片链接",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<Close />" },
      },
    },
    closeIconPosition: {
      control: { type: "select" },
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
      description: "关闭图标位置",
      table: {
        category: "外观",
        type: { summary: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'" },
        defaultValue: { summary: "'top-right'" },
      },
    },

    // 行为
    lazyload: {
      control: { type: "object" },
      description: "是否开启懒加载",
      table: {
        category: "行为",
        type: { summary: "boolean | { placeholder?: React.ReactNode }" },
        defaultValue: { summary: "false" },
      },
    },
    maxZoom: {
      control: { type: "number" },
      description: "手势缩放时，最大缩放比例",
      table: {
        category: "行为",
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
    closeOnPopstate: {
      control: { type: "boolean" },
      description: "是否在页面回退时自动关闭",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnlyClickCloseIcon: {
      control: { type: "boolean" },
      description: "是否只在点击关闭图标时关闭图片预览",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    startPosition: {
      control: { type: "number" },
      description: "图片预览起始位置索引",
      table: {
        category: "行为",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
      },
    },
    swipeDuration: {
      control: { type: "number" },
      description: "动画时长，单位为 ms",
      table: {
        category: "行为",
        type: { summary: "number | string" },
        defaultValue: { summary: "300" },
      },
    },

    // 事件
    beforeClose: {
      description: "关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise",
      table: {
        category: "事件",
        type: { summary: "(active: string | number) => boolean | Promise<boolean>" },
      },
    },
    onClose: {
      description: "关闭时的回调函数",
      table: {
        category: "事件",
        type: { summary: "(p?: CloseParams) => void" },
      },
    },
    onClosed: {
      description: "完全关闭时的回调",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
    onChange: {
      description: "切换图片时的回调函数，回调参数为当前索引",
      table: {
        category: "事件",
        type: { summary: "(index: number) => void" },
      },
    },
  },
} satisfies Meta<typeof ImagePreview>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => {
    return <BasicExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 images 属性设置需要预览的图片 URL 数组。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ImagePreview } from "@react-vant-next/ui";

const images = [
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg",
];

export default function BasicExample() {
  return (
    <Cell
      title="预览图片"
      isLink
      onClick={() =>
        ImagePreview.open({
          images,
          onChange: index => console.log(\`当前展示第\${index + 1}张\`),
        })}
    />
  );
}
`,
      },
    },
  },
};

// 配置项
export const ConfigStory: Story = {
  name: "配置项",
  render: () => {
    return <ConfigExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 startPosition 属性指定图片预览的起始位置。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ImagePreview, Toast } from "@react-vant-next/ui";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
];

export default function ConfigExample() {
  return (
    <>
      <Cell
        title="指定初始位置"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2 })}
      />
      <Cell
        title="展示关闭按钮"
        isLink
        onClick={() => ImagePreview.open({ images, startPosition: 2, closeable: true })}
      />
      <Cell
        title="只允许点击关闭按钮关闭"
        isLink
        onClick={() =>
          ImagePreview.open({ images, closeable: true, closeOnlyClickCloseIcon: true })}
      />
      <Cell
        title="监听关闭事件"
        isLink
        onClick={() =>
          ImagePreview.open({
            images,
            startPosition: 2,
            onClose: () => {
              Toast.info("关闭预览");
            },
          })}
      />
      <Cell
        title="展示指示点"
        isLink
        onClick={() => ImagePreview.open({ images, showIndicators: true, showIndex: false })}
      />
    </>
  );
};
`,
      },
    },
  },
};

// 异步关闭
export const AsyncClose: Story = {
  name: "异步关闭",
  render: () => {
    return <AsyncCloseExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 onChange 回调函数监听当前图片切换事件，回调函数的参数为当前图片的索引。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ImagePreview } from "@react-vant-next/ui";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
];

export default function AsyncCloseExample() {
  return (
    <Cell
      title="预览图片"
      isLink
      onClick={() => {
        const destory = ImagePreview.open({ images });
        setTimeout(() => destory(), 2000);
      }}
    />
  );
};
`,
      },
    },
  },
};

// 组件调用
export const ComponentCall: Story = {
  name: "组件调用",
  render: () => {
    return <ComponentCallExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "ImagePreview 是一个组件，调用后会直接在页面中展示图片预览界面。",
      },
      source: {
        language: "tsx",
        code: `import React, { useState } from 'react';
import { ImagePreview, Cell } from '@react-vant-next/ui';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default function ComponentCallExample() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell title="组件调用" isLink onClick={() => setVisible(true)} />
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        showIndicators
        showIndex={false}
      />
    </>
  );
};
`,
      },
    },
  },
};

// 指定挂载节点
export const Teleport: Story = {
  name: "指定挂载节点",
  render: () => {
    return <TeleportExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 teleport 属性指定图片预览的挂载节点。",
      },
      source: {
        language: "tsx",
        code: `import React from 'react';
import { ImagePreview, Cell } from '@react-vant-next/ui';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
];

export default function TeleportExample() {
  const ref = React.useRef(null);
  return (
    <>
      <Cell
        title="指定挂载节点"
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <div ref={ref} />
    </>
  );
};
`,
      },
    },
  },
};
