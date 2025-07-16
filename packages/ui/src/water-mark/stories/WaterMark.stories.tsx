import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Space, WaterMark } from "@react-vant-next/ui";
import { useState } from "react";

const meta = {
  id: "components-water-mark",
  title: "Display/WaterMark",
  component: WaterMark,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "给页面的某个区域加上水印，支持文字和图案。适用于防止信息盗用、标识版权时使用。",
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
    content: {
      description: "水印文字内容",
      table: {
        category: "基础",
        type: { summary: "string" },
        required: false,
      },
    },
    fullPage: {
      description: "是否覆盖整个页面",
      table: {
        category: "基础",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        required: false,
      },
      control: "boolean",
    },

    // 外观
    width: {
      description: "水印的宽度",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        required: false,
      },
      control: { type: "number" },
    },
    height: {
      description: "水印的高度",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "64" },
        required: false,
      },
      control: { type: "number" },
    },
    rotate: {
      description: "水印绘制时，旋转的角度，单位 °",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "-22" },
        required: false,
      },
      control: { type: "number" },
    },
    image: {
      description: "图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印",
      table: {
        category: "外观",
        type: { summary: "{ src: string; width: number; height: number }" },
        required: false,
      },
    },
    zIndex: {
      description: "追加的水印元素的 z-index",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "2000" },
        required: false,
      },
      control: { type: "number" },
    },
    font: {
      description: "canvas 文字属性设置",
      table: {
        category: "外观",
        type: { summary: "{ color?: string; size?: number | string; style?: string; family?: string; weight?: string }" },
        defaultValue: { summary: "{ color: 'rgba(0, 0, 0, .15)', size: 16, style: 'normal', weight: 'normal', family: 'sans-serif' }" },
        required: false,
      },
    },
    gapX: {
      description: "水印之间的水平间距",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "24" },
        required: false,
      },
      control: { type: "number" },
    },
    gapY: {
      description: "水印之间的垂直间距",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "48" },
        required: false,
      },
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof WaterMark>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    return (
      <div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
        <WaterMark content="React Vant Next" />
        <div style={{ marginTop: "16px" }}>
          <p>这是一个带有文字水印的区域</p>
          <p>水印组件默认实现为前置水印，即设想水印会显示在内容的上方</p>
          <p>zIndex 默认设置为 2000</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "水印组件默认实现为前置水印，即设想水印会显示在内容的上方，zIndex 默认设置为 2000，如果你不希望水印遮挡上层内容，可以调整该值到小于上层内容的 zIndex。",
      },
      source: {
        code: `
<div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
  <WaterMark content="React Vant Next" />
  <div style={{ marginTop: "16px" }}>
    <p>这是一个带有文字水印的区域</p>
    <p>水印组件默认实现为前置水印，即设想水印会显示在内容的上方</p>
    <p>zIndex 默认设置为 2000</p>
  </div>
</div>
        `,
      },
    },
  },
};

// 图片水印示例
export const ImageWatermark: Story = {
  name: "图片水印",
  render: (_args) => {
    return (
      <div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
        <WaterMark
          image={{
            src: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
            width: 115,
            height: 27,
          }}
          width={120}
          height={60}
        />
        <div style={{ marginTop: "16px" }}>
          <p>这是一个带有图片水印的区域</p>
          <p>通过 image 指定图片地址</p>
          <p>为保证图片高清且不被拉伸，请传入水印图片的宽高 width 和 height</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 image 指定图片地址。为保证图片高清且不被拉伸，请传入水印图片的宽高 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。",
      },
      source: {
        code: `
<div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
  <WaterMark
    image={{
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
      width: 115,
      height: 27,
    }}
    width={120}
    height={60}
  />
  <div style={{ marginTop: "16px" }}>
    <p>这是一个带有图片水印的区域</p>
    <p>通过 image 指定图片地址</p>
    <p>为保证图片高清且不被拉伸，请传入水印图片的宽高 width 和 height</p>
  </div>
</div>
        `,
      },
    },
  },
};

// 自定义样式水印示例
export const CustomStyleWatermark: Story = {
  name: "自定义样式",
  render: (_args) => {
    return (
      <div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
        <WaterMark
          content="React Vant Next"
          font={{
            color: "rgba(220, 38, 38, 0.15)",
            size: 20,
            weight: "bold",
          }}
          rotate={-15}
        />
        <div style={{ marginTop: "16px" }}>
          <p>这是一个自定义样式的水印区域</p>
          <p>通过 font 属性可以自定义文字的颜色、大小、样式等</p>
          <p>通过 rotate 属性可以调整水印的旋转角度</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 font 属性自定义水印文字的样式，通过 rotate 属性调整水印的旋转角度。",
      },
      source: {
        code: `
<div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
  <WaterMark
    content="React Vant Next"
    font={{
      color: "rgba(220, 38, 38, 0.15)",
      size: 20,
      weight: "bold",
    }}
    rotate={-15}
  />
  <div style={{ marginTop: "16px" }}>
    <p>这是一个自定义样式的水印区域</p>
    <p>通过 font 属性可以自定义文字的颜色、大小、样式等</p>
    <p>通过 rotate 属性可以调整水印的旋转角度</p>
  </div>
</div>
        `,
      },
    },
  },
};

// 局部区域水印示例
export const PartialWatermark: Story = {
  name: "局部区域水印",
  render: (_args) => {
    return (
      <div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "120px",
            background: "#ffffff",
            padding: "16px",
            margin: "0 auto",
            border: "1px solid #ebedf0",
            borderRadius: "8px",
          }}
        >
          <WaterMark content="局部水印" fullPage={false} />
          <p>这是一个只在局部区域显示水印的示例</p>
          <p>
            通过设置 fullPage=
            {false}
            {" "}
            可以让水印只在特定容器内显示
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 fullPage 属性控制水印是否覆盖整个页面。设置为 false 时，水印只会在其父容器内显示。",
      },
      source: {
        code: `
<div style={{ position: "relative", height: "200px", background: "#f7f8fa", padding: "16px" }}>
  <div
    style={{
      position: "relative",
      width: "80%",
      height: "120px",
      background: "#ffffff",
      padding: "16px",
      margin: "0 auto",
      border: "1px solid #ebedf0",
      borderRadius: "8px",
    }}
  >
    <WaterMark content="局部水印" fullPage={false} />
    <p>这是一个只在局部区域显示水印的示例</p>
    <p>通过设置 fullPage={false} 可以让水印只在特定容器内显示</p>
  </div>
</div>
        `,
      },
    },
  },
};

// 可切换水印示例
function SwitchableWatermarkExample() {
  const [type, setType] = useState<"text" | "image">("text");
  const [fullPage, setFullPage] = useState(true);

  const textProps = {
    content: "React Vant Next",
  };

  const imageProps = {
    image: {
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
      width: 27,
      height: 27,
    },
    width: 60,
    height: 60,
  };

  return (
    <div style={{ position: "relative", height: "250px", background: "#f7f8fa", padding: "16px" }}>
      <Space>
        <Button type={type === "text" ? "primary" : "default"} onClick={() => setType("text")}>
          文字水印
        </Button>
        <Button type={type === "image" ? "primary" : "default"} onClick={() => setType("image")}>
          图片水印
        </Button>
        <Button onClick={() => setFullPage(!fullPage)}>
          {fullPage ? "局部区域" : "整个页面"}
        </Button>
      </Space>

      <div style={{ marginTop: "16px" }}>
        <p>这是一个可以切换水印类型和范围的示例</p>
        <p>点击上方按钮可以切换不同类型的水印和显示范围</p>
      </div>

      <WaterMark
        {...(type === "text" ? textProps : imageProps)}
        fullPage={fullPage}
      />
    </div>
  );
}

export const SwitchableWatermark: Story = {
  name: "动态切换水印",
  render: () => <SwitchableWatermarkExample />,
  parameters: {
    docs: {
      description: {
        story: "这个示例展示了如何动态切换水印的类型和显示范围。",
      },
      source: {
        code: `
function SwitchableWatermarkExample() {
  const [type, setType] = useState<"text" | "image">("text")
  const [fullPage, setFullPage] = useState(true)

  const textProps = {
    content: "React Vant Next",
  }

  const imageProps = {
    image: {
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
      width: 115,
      height: 27,
    },
    width: 120,
    height: 60,
  }

  return (
    <div style={{ position: "relative", height: "250px", background: "#f7f8fa", padding: "16px" }}>
      <Space>
        <Button type={type === "text" ? "primary" : "default"} onClick={() => setType("text")}>
          文字水印
        </Button>
        <Button type={type === "image" ? "primary" : "default"} onClick={() => setType("image")}>
          图片水印
        </Button>
        <Button onClick={() => setFullPage(!fullPage)}>
          {fullPage ? "局部区域" : "整个页面"}
        </Button>
      </Space>

      <div style={{ marginTop: "16px" }}>
        <p>这是一个可以切换水印类型和范围的示例</p>
        <p>点击上方按钮可以切换不同类型的水印和显示范围</p>
      </div>

      <WaterMark
        {...(type === "text" ? textProps : imageProps)}
        fullPage={fullPage}
      />
    </div>
  )
}
        `,
      },
    },
  },
};
