import type { Meta, StoryObj } from "@storybook/react-vite";

// 导入 demo 示例
import BaseDemo from "../demo/base";
import CustomDemo from "../demo/custom";
import DescriptionDemo from "../demo/description";
import MulitDemo from "../demo/mulit";
// 导入组件
import ShareSheet from "../index";

const meta = {
  id: "biz-sharesheet",
  title: "Biz/ShareSheet",
  component: ShareSheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。",
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
    visible: {
      description: "是否显示分享面板",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    options: {
      description: "分享选项",
      table: {
        category: "基础",
        type: { summary: "Option[]" },
        defaultValue: { summary: "[]" },
      },
    },

    // 外观
    title: {
      description: "顶部标题",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    cancelText: {
      description: "取消按钮文字，传入空字符串可以隐藏按钮",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "取消" },
      },
      control: "text",
    },
    description: {
      description: "标题下方的辅助描述文字",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    duration: {
      description: "动画时长，单位秒，设置为 0 可以禁用动画",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "0.3" },
      },
      control: { type: "number", min: 0, max: 1, step: 0.1 },
    },
    overlay: {
      description: "是否显示遮罩层",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    overlayClass: {
      description: "自定义遮罩层类名",
      table: {
        category: "外观",
        type: { summary: "string" },
      },
    },
    overlayStyle: {
      description: "自定义遮罩层样式",
      table: {
        category: "外观",
        type: { summary: "CSSProperties" },
      },
    },

    // 行为
    lockScroll: {
      description: "是否锁定背景滚动",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnClickOverlay: {
      description: "是否在点击遮罩层后关闭",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnPopstate: {
      description: "是否在页面回退时自动关闭",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    safeAreaInsetBottom: {
      description: "是否开启底部安全区适配",
      table: {
        category: "行为",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    // 事件
    onSelect: {
      description: "点击分享选项时触发",
      table: {
        category: "事件",
        type: { summary: "(option: Option, index: number) => void" },
      },
    },
    onCancel: {
      description: "点击取消按钮时触发",
      table: {
        category: "事件",
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof ShareSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: () => <BaseDemo />,
  parameters: {
    docs: {
      description: {
        story: "分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ShareSheet } from "@react-vant-next/ui";
import { useState } from "react";

const options = [
  { name: "微信", icon: "wechat" },
  { name: "微博", icon: "weibo" },
  { name: "复制链接", icon: "link" },
  { name: "分享海报", icon: "poster" },
  { name: "二维码", icon: "qrcode" },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="显示分享面板" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="立即分享给好友"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log("option", option);
          console.log("index", index);
          setVisible(false);
        }}
      />
    </>
  );
};
`,
      },
    },
  },
};

// 展示多行选项
export const MultiRow: Story = {
  name: "展示多行选项",
  render: () => <MulitDemo />,
  parameters: {
    docs: {
      description: {
        story: "当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ShareSheet } from "@react-vant-next/ui";
import { useState } from "react";

const options = [
  [
    { name: "微信", icon: "wechat" },
    { name: "朋友圈", icon: "wechat-moments" },
    { name: "微博", icon: "weibo" },
    { name: "QQ", icon: "qq" },
  ],
  [
    { name: "复制链接", icon: "link" },
    { name: "分享海报", icon: "poster" },
    { name: "二维码", icon: "qrcode" },
    { name: "小程序码", icon: "weapp-qrcode" },
  ],
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="显示分享面板" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="立即分享给好友"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log("option", option);
          console.log("index", index);
          setVisible(false);
        }}
      />
    </>
  );
};`,
      },
    },
  },
};

// 自定义图标
export const CustomIcon: Story = {
  name: "自定义图标",
  render: () => <CustomDemo />,
  parameters: {
    docs: {
      description: {
        story: "除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ShareSheet } from "@react-vant-next/ui";
import { useState } from "react";

const options = [
  {
    name: "名称",
    icon: "https://img.yzcdn.cn/vant/custom-icon-fire.png",
  },
  {
    name: "名称",
    icon: "https://img.yzcdn.cn/vant/custom-icon-light.png",
  },
  {
    name: "名称",
    icon: "https://img.yzcdn.cn/vant/custom-icon-water.png",
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="显示分享面板" onClick={() => setVisible(true)} />

      <ShareSheet
        visible={visible}
        options={options}
        title="立即分享给好友"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log("option", option);
          console.log("index", index);
          setVisible(false);
        }}
      />
    </>
  );
};`,
      },
    },
  },
};

// 展示描述信息
export const Description: Story = {
  name: "展示描述信息",
  render: () => <DescriptionDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。",
      },
      source: {
        language: "tsx",
        code: `import { Cell, ShareSheet } from "@react-vant-next/ui";
import { useState } from "react";

const options = [
  { name: "微信", icon: "wechat" },
  { name: "微博", icon: "weibo" },
  { name: "复制链接", icon: "link", description: "描述信息" },
  { name: "分享海报", icon: "poster" },
  { name: "二维码", icon: "qrcode" },
];

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Cell isLink title="显示分享面板" onClick={() => setVisible(true)} />
      <ShareSheet
        visible={visible}
        options={options}
        title="立即分享给好友"
        description="描述信息"
        onCancel={() => setVisible(false)}
        onSelect={(option, index) => {
          console.log("option", option);
          console.log("index", index);
          setVisible(false);
        }}
      />
    </>
  );
};`,
      },
    },
  },
};
