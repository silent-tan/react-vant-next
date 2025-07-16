import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import Image from "../../image";
import { Typography } from "../../typography";
import Lazyload from "../Lazyload";

const meta = {
  id: "components-lazyload",
  title: "Display/Lazyload",
  component: Lazyload,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。",
      },
    },
  },
  argTypes: {
    // 基础
    style: {
      description: "占位容器样式",
      table: {
        category: "基础",
        type: { summary: "CSSProperties" },
      },
    },
    className: {
      description: "占位容器类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
    },
    children: {
      description: "需要延迟加载的内容",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    // 外观
    height: {
      control: { type: "text" },
      description: "设置占位容器高度",
      table: {
        category: "外观",
        type: { summary: "number | string" },
      },
    },
    placeholder: {
      description: "自定义占位容器视图",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<Skeleton title />" },
      },
    },
  },
} satisfies Meta<typeof Lazyload>;

export default meta;

type Story = StoryObj<typeof meta>;

// 图片懒加载
export const ImageLazyload: Story = {
  name: "图片懒加载",
  render: (_args) => {
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
      <>
        {imageList.map(img => (
          <Image lazyload src={img} key={img} />
        ))}
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将 `Image` 组件的 lazyload 属性设为 `true` 即可开启懒加载功能。",
      },
      source: {
        code: `import React from "react";
import { Image } from "@react-vant-next/ui";

const imageList = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
  "https://img.yzcdn.cn/vant/apple-4.jpg",
  "https://img.yzcdn.cn/vant/apple-5.jpg",
  "https://img.yzcdn.cn/vant/apple-6.jpg",
  "https://img.yzcdn.cn/vant/apple-7.jpg",
];

export default () => {
  return (
    <>
      {imageList.map(img => (
        <Image lazyload src={img} key={img} />
      ))}
    </>
  );
};`,
      },
    },
  },
};

function LazyComponent() {
  useEffect(() => {
    console.log("lazy component mounted");
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
      </Typography.Text>
    </div>
  );
}

// 组件懒加载
export const ComponentLazyload: Story = {
  name: "组件懒加载",
  render: (_args) => {
    return (
      <Lazyload>
        <LazyComponent />
      </Lazyload>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "将需要懒加载的组件放在 `Lazyload` 组件中，即可实现组件懒加载。",
      },
      source: {
        code: `import React, { useEffect } from "react";
import { Image, Lazyload, Typography } from "@react-vant-next/ui";

function LazyComponent() {
  useEffect(() => {
    console.log("lazy component mounted");
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
      </Typography.Text>
    </div>
  );
}

export default () => {
  return (
    <Lazyload>
      <LazyComponent />
    </Lazyload>
  );
};`,
      },
    },
  },
};
