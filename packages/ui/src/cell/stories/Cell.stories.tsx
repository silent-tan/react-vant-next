import type { Meta, StoryObj } from "@storybook/react-vite";
import { Location, Photograph, Setting, Shop, UserO } from "@react-vant-next/icons";
import Image from "../../image";

import Cell from "../index";

const meta = {
  id: "layout-cell",
  title: "Layout/Cell",
  component: Cell,
  parameters: {
    docs: {
      description: {
        component: "单元格为列表中的单个展示项。",
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "左侧标题",
      table: {
        type: { summary: "ReactNode" },
        category: "内容",
      },
    },
    value: {
      control: { type: "text" },
      description: "右侧内容",
      table: {
        type: { summary: "number | string | ReactNode" },
        category: "内容",
      },
    },
    label: {
      control: { type: "text" },
      description: "标题下方的描述信息",
      table: {
        type: { summary: "ReactNode" },
        category: "内容",
      },
    },
    extra: {
      control: { type: "text" },
      description: "自定义单元格最右侧的额外内容",
      table: {
        type: { summary: "ReactNode" },
        category: "内容",
      },
    },
    size: {
      control: { type: "select" },
      options: ["", "large"],
      description: "单元格大小",
      table: {
        type: { summary: `"large"` },
        category: "外观",
      },
    },
    icon: {
      control: { type: "object" },
      description: "左侧图标",
      table: {
        type: { summary: "ReactNode" },
        category: "外观",
      },
    },
    rightIcon: {
      control: { type: "object" },
      description: "自定义右侧按钮，默认为arrow",
      table: {
        type: { summary: "ReactNode" },
        category: "外观",
      },
    },
    border: {
      control: { type: "boolean" },
      description: "是否显示内边框",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "外观",
      },
    },
    clickable: {
      control: { type: "boolean" },
      description: "是否开启点击反馈",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "交互",
      },
    },
    isLink: {
      control: { type: "boolean" },
      description: "是否展示右侧箭头并开启点击反馈",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "交互",
      },
    },
    required: {
      control: { type: "boolean" },
      description: "是否显示表单必填星号",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
    },
    center: {
      control: { type: "boolean" },
      description: "是否使内容垂直居中",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "外观",
      },
    },
    arrowDirection: {
      control: { type: "select" },
      options: ["right", "left", "up", "down"],
      description: "箭头方向",
      table: {
        type: { summary: `"right" | "left" | "up" | "down"` },
        defaultValue: { summary: "right" },
        category: "外观",
      },
    },
    titleStyle: {
      control: { type: "object" },
      description: "左侧标题额外样式",
      table: {
        type: { summary: "CSSProperties" },
        category: "样式",
      },
    },
    titleClass: {
      control: { type: "text" },
      description: "左侧标题额外类名",
      table: {
        type: { summary: "string" },
        category: "样式",
      },
    },
    valueClass: {
      control: { type: "text" },
      description: "右侧内容额外类名",
      table: {
        type: { summary: "string" },
        category: "样式",
      },
    },
    labelClass: {
      control: { type: "text" },
      description: "描述信息额外类名",
      table: {
        type: { summary: "string" },
        category: "样式",
      },
    },
    onClick: {
      description: "点击单元格时触发",
      table: {
        type: { summary: "(e: React.MouseEvent<HTMLDivElement>) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: "基础用法",
  parameters: {
    docs: {
      description: {
        story: "单元格为列表中的单个展示项。",
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => (
    <Cell title="单元格" value="内容" label="描述信息" {...args} />
  ),
};

export const UserList: Story = {
  name: "用户列表",
  parameters: {
    docs: {
      description: {
        story: "通过 icon 属性可以自定义左侧内容。",
      },
    },
  },
  args: {
    center: true,
  },
  render: args => (
    <Cell.Group>
      <Cell icon={<UserO />} title="用户名" value="张三" />
      <Cell icon={<Location />} title="地址" value="浙江省杭州市" />
      <Cell center={args.center} icon={<Image width={44} height={44} round />} label="Deserunt dolor ea eaque eos" title="用户名" isLink />
    </Cell.Group>
  ),
};

export const CellSize: Story = {
  name: "单元格大小",
  parameters: {
    docs: {
      description: {
        story: "通过 `size` 属性可以控制单元格的大小。",
      },
    },
  },
  args: {
    size: "large",
  },
  render: args => (
    <Cell title="单元格" value="内容" {...args} />
  ),
};

export const WithIcon: Story = {
  name: "展示图标",
  parameters: {
    docs: {
      description: {
        story: "通过 `icon` 属性在标题左侧展示图标。",
      },
    },
  },
  args: {
    icon: <Shop />,
  },
  render: args => (
    <Cell.Group>
      <Cell {...args} title="单元格" value="内容" />
      <Cell icon={<Setting />} title="单元格" value="内容" />
    </Cell.Group>
  ),
};

export const OnlyValue: Story = {
  name: "只设置 value",
  parameters: {
    docs: {
      description: {
        story: "只设置 value 时，内容会靠左对齐。",
      },
    },
  },
  render: args => (
    <Cell.Group>
      <Cell {...args} value="内容" />
    </Cell.Group>
  ),
};

export const WithArrow: Story = {
  name: "展示箭头",
  parameters: {
    docs: {
      description: {
        story: "设置 isLink 属性后会在单元格右侧显示箭头，并且可以通过 arrowDirection 属性控制箭头方向。",
      },
    },
  },
  args: {
    isLink: true,
    arrowDirection: "right",
  },
  render: args => (
    <Cell.Group>
      <Cell isLink title="单元格" value="内容" />
      <Cell isLink title="单元格" value="内容" arrowDirection="down" />
      <Cell isLink title="单元格" value="内容" arrowDirection="up" />
      <Cell title="单元格" value="内容" {...args} />
    </Cell.Group>
  ),
};

export const CustomContent: Story = {
  name: "自定义内容",
  parameters: {
    docs: {
      description: {
        story: "如以上用法不能满足你的需求，可以来自定义内容。",
      },
    },
  },
  render: args => (
    <Cell title="单元格" icon={<Photograph />} {...args}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
          style={{ width: "80px", height: "80px", marginRight: "10px" }}
        />
        <div>
          <div>这是一段自定义内容</div>
          <div style={{ fontSize: "12px", color: "#999" }}>这是一段描述信息</div>
        </div>
      </div>
    </Cell>
  ),
};

export const VerticalCenter: Story = {
  name: "垂直居中",
  parameters: {
    docs: {
      description: {
        story: "通过 center 属性可以让 Cell 的左右内容都垂直居中。",
      },
    },
  },
  args: {
    center: true,
  },
  render: args => (
    <Cell title="单元格" value="内容" label="描述信息" {...args} />
  ),
};
