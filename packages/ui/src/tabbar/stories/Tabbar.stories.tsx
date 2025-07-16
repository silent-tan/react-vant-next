import type { Meta, StoryObj } from "@storybook/react-vite";
import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import BadgeDemo from "../demo/badge";
import BaseDemo from "../demo/base";
import ControlDemo from "../demo/control";
import CustomDemo from "../demo/custom";
import { Tabbar } from "../index";

const meta = {
  id: "components-tabbar",
  title: "Navigate/Tabbar",
  component: Tabbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "底部导航栏，用于在不同页面之间进行切换。",
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
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    value: {
      description: "当前选中标签的名称或索引值",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        required: false,
      },
    },
    defaultValue: {
      description: "默认选中标签的名称或索引值",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
        required: false,
      },
    },
    // 外观
    fixed: {
      description: "是否固定在底部",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    border: {
      description: "是否显示外边框",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
    },
    zIndex: {
      description: "元素 z-index",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "1" },
        required: false,
      },
    },
    activeColor: {
      description: "选中标签的颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#3f45ff" },
        required: false,
      },
    },
    inactiveColor: {
      description: "未选中标签的颜色",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "#7d7e80" },
        required: false,
      },
    },
    placeholder: {
      description: "固定在底部时，是否在标签位置生成一个等高的占位元素",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    safeAreaInsetBottom: {
      description: "是否开启底部安全区适配，设置 fixed 时默认开启",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    // 事件
    onChange: {
      description: "切换标签时触发",
      table: {
        category: "事件",
        type: { summary: "(active: number | string) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Tabbar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  name: "基础用法",
  render: () => <BaseDemo />,
  parameters: {
    docs: {
      description: {
        story: "点击 `Tabbar.Item` 即可切换选中的标签(非受控状态)。",
      },
      source: {
        code: `
import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import { Tabbar } from "@react-vant-next/ui";

export default function BaseDemo() {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
      </Tabbar>
    </div>
  );
};
        `,
      },
    },
  },
};

// 受控用法
export const Controlled: Story = {
  name: "受控组件",
  render: () => <ControlDemo />,
  parameters: {
    docs: {
      description: {
        story: "- `value` 默认绑定选中标签的索引值，通过修改 `value` 即可切换选中的标签。\n- 在标签指定 `name` 属性的情况下，`value` 的值为当前标签的 `name`。",
      },
      source: {
        code: `
import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import { Tabbar } from "@react-vant-next/ui";
import { useState } from "react";

export default function ControlDemo() {
  const [name, setName] = useState("setting");
  return (
    <div className="demo-tabbar">
      <Tabbar value={name} onChange={v => setName(v as string)}>
        <Tabbar.Item name="home" icon={<HomeO />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item name="search" icon={<Search />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item name="firends" icon={<FriendsO />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item name="setting" icon={<SettingO />}>
          标签
        </Tabbar.Item>
      </Tabbar>
    </div>
  );
};
        `,
      },
    },
  },
};

// 徽标提示
export const Badge: Story = {
  name: "徽标提示",
  render: () => <BadgeDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 `badge` 属性，可以设置图标相应的徽标内容。",
      },
      source: {
        code: `
import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import { Tabbar } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
        <Tabbar.Item badge={{ dot: true }} icon={<Search />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item badge={{ content: 5 }} icon={<FriendsO />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item badge={{ content: 20 }} icon={<SettingO />}>
          标签
        </Tabbar.Item>
      </Tabbar>
    </div>
  );
};
        `,
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
        story: "通过 `icon` 属性自定义图标，可以接收一个函数，根据是否激活返回不同的图标。",
      },
      source: {
        code: `
import { FriendsO, HomeO, Search, SettingO } from "@react-vant-next/icons";
import { Tabbar } from "@react-vant-next/ui";
import "./style.less";

const icon = {
  active: "https://img.yzcdn.cn/vant/user-active.png",
  inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
};

export default function CustomDemo() {
  return (
    <div className="demo-tabbar">
      <Tabbar>
        <Tabbar.Item
          icon={ac => <img alt="tab" src={ac ? icon.active : icon.inactive} />}
        >
          图标
        </Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>图标</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>图标</Tabbar.Item>
      </Tabbar>
      <br />
      <Tabbar activeColor="#f44336" inactiveColor="#000">
        <Tabbar.Item icon={<HomeO />}>颜色</Tabbar.Item>
        <Tabbar.Item icon={<Search />}>颜色</Tabbar.Item>
        <Tabbar.Item icon={<FriendsO />}>颜色</Tabbar.Item>
        <Tabbar.Item icon={<SettingO />}>颜色</Tabbar.Item>
      </Tabbar>
    </div>
  );
};
        `,
      },
    },
  },
};

// 固定底部示例
export const Fixed: Story = {
  name: "固定底部",
  render: () => {
    return (
      <div style={{ padding: "16px", background: "#f7f8fa", position: "relative", height: "200px" }}>
        <div style={{ marginBottom: "50px" }}>
          <p>内容区域</p>
          <p>Tabbar 固定在底部</p>
        </div>
        <Tabbar fixed>
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `fixed` 属性可以固定标签栏在底部，默认值为 `true`。",
      },
      source: {
        code: `
<div style={{ position: "relative", height: "200px" }}>
  <div style={{ marginBottom: "50px" }}>
    <p>内容区域</p>
    <p>Tabbar 固定在底部</p>
  </div>
  <Tabbar fixed>
    <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
    <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
    <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
    <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
  </Tabbar>
</div>
        `,
      },
    },
  },
};

// 占位元素示例
export const Placeholder: Story = {
  name: "占位元素",
  render: () => {
    return (
      <div style={{ padding: "16px", background: "#f7f8fa", position: "relative", height: "200px" }}>
        <div>
          <p>内容区域</p>
          <p>Tabbar 固定在底部，并使用占位元素</p>
        </div>
        <Tabbar fixed placeholder>
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "固定在底部时，可以通过 `placeholder` 属性在标签位置生成一个等高的占位元素，避免遮挡页面内容。",
      },
      source: {
        code: `
<div style={{ position: "relative", height: "200px" }}>
  <div>
    <p>内容区域</p>
    <p>Tabbar 固定在底部，并使用占位元素</p>
  </div>
  <Tabbar fixed placeholder>
    <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
    <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
    <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
    <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
  </Tabbar>
</div>
        `,
      },
    },
  },
};
