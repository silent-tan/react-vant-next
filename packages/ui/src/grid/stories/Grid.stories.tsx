import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeO, Photo, Search, Setting } from "@react-vant-next/icons";
import Image from "../../image";
import { Grid } from "../index";

const meta = {
  id: "layout-grid",
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。",
      },
    },
  },
  argTypes: {
    // 基础
    style: {
      description: "style",
      table: {
        category: "基础",
        type: { summary: "React.CSSProperties" },
      },
      control: { type: "object" },
    },
    className: {
      description: "类名",
      table: {
        category: "基础",
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    children: {
      description: "子元素",
      table: {
        category: "基础",
        type: { summary: "React.ReactNode" },
      },
    },
    columnNum: {
      description: "列数",
      table: {
        category: "基础",
        type: { summary: "number" },
        defaultValue: { summary: "4" },
      },
      control: { type: "number" },
    },
    // 外观
    iconSize: {
      description: "图标大小，默认单位为`px`",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "28px" },
      },
      control: { type: "text" },
    },
    gutter: {
      description: "格子之间的间距，默认单位为`px`",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
    },
    border: {
      description: "是否显示边框",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    center: {
      description: "是否将格子内容居中显示",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    square: {
      description: "是否将格子固定为正方形",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    direction: {
      description: "格子内容排列的方向，可选值为 `horizontal`",
      table: {
        category: "外观",
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'vertical'" },
      },
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    reverse: {
      description: "是否调换图标和文本的位置",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Partial<Story> = {
  name: "基础用法",
  render: _args => (
    <Grid>
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。",
      },
      source: {
        language: "tsx",
        code: `<Grid>
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
</Grid>`,
      },
      story: { height: "300px" },
    },
  },
};

// 自定义列数
export const CustomColumn: Partial<Story> = {
  name: "自定义列数",
  render: _args => (
    <Grid columnNum={3}>
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "默认一行展示四个格子，可以通过 `columnNum` 自定义列数。",
      },
      source: {
        language: "tsx",
        code: `<Grid columnNum={3}>
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
</Grid>`,
      },
    },
  },
};

// 自定义内容
export const CustomContent: Partial<Story> = {
  name: "自定义内容",
  render: _args => (
    <Grid columnNum={3} border={false}>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </Grid.Item>
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过插槽可以自定义格子展示的内容。",
      },
      source: {
        language: "tsx",
        code: `<Grid columnNum={3} border={false}>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </Grid.Item>
</Grid>`,
      },
    },
  },
};

// 正方形格子
export const Square: Partial<Story> = {
  name: "正方形格子",
  render: _args => (
    <Grid square>
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `square` 属性后，格子的高度会和宽度保持一致。",
      },
      source: {
        language: "tsx",
        code: `<Grid square>
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
</Grid>`,
      },
    },
  },
};

// 格子间距
export const Gutter: Partial<Story> = {
  name: "格子间距",
  render: _args => (
    <Grid gutter={10}>
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `gutter` 属性设置格子之间的距离。",
      },
      source: {
        language: "tsx",
        code: `<Grid gutter={10}>
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
</Grid>`,
      },
    },
  },
};

// 内容横排
export const Horizontal: Partial<Story> = {
  name: "内容横排",
  render: _args => (
    <Grid direction="horizontal" columnNum={3}>
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。",
      },
      source: {
        language: "tsx",
        code: `<Grid direction="horizontal" columnNum={3}>
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
</Grid>`,
      },
    },
  },
};

// 徽标提示
export const WithBadge: Partial<Story> = {
  name: "徽标提示",
  render: _args => (
    <Grid columnNum={2}>
      <Grid.Item icon={<HomeO />} text="文字" badge={{ dot: true }} />
      <Grid.Item icon={<Search />} text="文字" badge={{ content: "99+" }} />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。",
      },
      source: {
        language: "tsx",
        code: `<Grid columnNum={2}>
  <Grid.Item icon={<HomeO />} text="文字" badge={{ dot: true }} />
  <Grid.Item icon={<Search />} text="文字" badge={{ content: "99+" }} />
</Grid>`,
      },
    },
  },
};

// 图标颜色
export const IconColor: Partial<Story> = {
  name: "图标颜色",
  render: _args => (
    <Grid columnNum={3}>
      <Grid.Item icon={<Photo />} text="文字" iconColor="#1989fa" />
      <Grid.Item icon={<Photo />} text="文字" iconColor="#ee0a24" />
      <Grid.Item icon={<Photo />} text="文字" iconColor="#ff8800" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `iconColor` 属性设置图标颜色。",
      },
      source: {
        language: "tsx",
        code: `<Grid columnNum={3}>
  <Grid.Item icon={<Photo />} text="文字" iconColor="#1989fa" />
  <Grid.Item icon={<Photo />} text="文字" iconColor="#ee0a24" />
  <Grid.Item icon={<Photo />} text="文字" iconColor="#ff8800" />
</Grid>`,
      },
    },
  },
};

// 图标大小
export const IconSize: Partial<Story> = {
  name: "图标大小",
  render: _args => (
    <Grid columnNum={3} iconSize="40">
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `iconSize` 属性设置图标大小，默认单位为 px。",
      },
      source: {
        language: "tsx",
        code: `<Grid columnNum={3} iconSize="40">
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
  <Grid.Item icon={<Photo />} text="文字" />
</Grid>`,
      },
    },
  },
};

// 图标文字反转
export const Reverse: Partial<Story> = {
  name: "图标文字反转",
  render: _args => (
    <Grid columnNum={3} reverse>
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
      <Grid.Item icon={<Photo />} text="文字" />
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: "通过 `reverse` 属性可以调换图标和文本的位置。",
      },
    },
  },
};

// 多种图标
export const MultipleIcons: Partial<Story> = {
  name: "多种图标",
  render: (_args) => {
    return (
      <Grid columnNum={4}>
        <Grid.Item icon={<HomeO />} text="首页" />
        <Grid.Item icon={<Search />} text="搜索" />
        <Grid.Item icon={<Photo />} text="照片" />
        <Grid.Item icon={<Setting />} text="设置" />
      </Grid>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "可以使用不同的图标来丰富界面。",
      },
    },
  },
};
