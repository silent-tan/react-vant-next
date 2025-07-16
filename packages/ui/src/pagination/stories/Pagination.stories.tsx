import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import CustomDemo from "../demo/custom";
import { Pagination } from "../index";

// 更多关于如何设置故事的信息: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  id: "components-pagination",
  title: "Navigate/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。",
      },
    },
  },
  argTypes: {
    // 基础
    value: {
      control: { type: "number" },
      description: "当前页码",
      table: {
        category: "基础",
        type: { summary: "number" },
        required: false,
      },
    },
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

    // 外观
    mode: {
      control: { type: "select", options: ["simple", "multi"] },
      description: "显示模式，可选值为 simple",
      table: {
        category: "外观",
        type: { summary: "PaginationMode" },
        defaultValue: { summary: "multi" },
        required: false,
      },
    },
    prevText: {
      control: { type: "text" },
      description: "上一页按钮文字",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "上一页" },
        required: false,
      },
    },
    nextText: {
      control: { type: "text" },
      description: "下一页按钮文字",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "下一页" },
        required: false,
      },
    },
    pageCount: {
      control: { type: "number" },
      description: "总页数",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "根据页数计算" },
        required: false,
      },
    },
    totalItems: {
      control: { type: "number" },
      description: "总记录数",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "0" },
        required: false,
      },
    },
    itemsPerPage: {
      control: { type: "number" },
      description: "每页记录数",
      table: {
        category: "基础",
        type: { summary: "number | string" },
        defaultValue: { summary: "10" },
        required: false,
      },
    },
    showPageSize: {
      control: { type: "number" },
      description: "显示的页码个数",
      table: {
        category: "外观",
        type: { summary: "number | string" },
        defaultValue: { summary: "5" },
        required: false,
      },
    },
    forceEllipses: {
      control: { type: "boolean" },
      description: "是否显示省略号",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    pageDesc: {
      control: { type: "text" },
      description: "自定义页码描述文字，仅在 mode='simple' 时生效",
      table: {
        category: "外观",
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    pageRender: {
      description: "自定义页码",
      table: {
        category: "外观",
        type: { summary: "({ number, text, active }: PageItem) => React.ReactNode" },
        required: false,
      },
    },

    // 事件
    onChange: {
      description: "页码改变时触发",
      table: {
        category: "事件",
        type: { summary: "(page: number) => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法
export const Basic: Story = {
  name: "基础用法",
  render: (_args) => {
    const [page, setPage] = useState(1);
    return <Pagination value={page} onChange={setPage} totalItems={24} itemsPerPage={5} />;
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `value` 来绑定当前页码。",
      },
    },
  },
};

// 简单模式
export const SimpleMode: Story = {
  name: "简单模式",
  render: (_args) => {
    const [page, setPage] = useState(1);
    return <Pagination value={page} mode="simple" onChange={setPage} pageCount={12} />;
  },
  parameters: {
    docs: {
      description: {
        story: "将 `mode` 设置为 `simple` 来切换到简单模式，此时分页器不会展示具体的页码按钮。",
      },
    },
  },
};

// 显示省略号
export const ShowEllipses: Story = {
  name: "显示省略号",
  render: (_args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination forceEllipses value={page} onChange={setPage} totalItems={125} showPageSize={3} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "显示省略号。",
      },
    },
  },
};

// 自定义按钮
export const CustomText: Story = {
  name: "自定义按钮",
  render: () => <CustomDemo />,
  parameters: {
    docs: {
      description: {
        story: "通过 `prevText`、`nextText` 等属性来自定义分页按钮的内容。",
      },
      source: {
        language: "tsx",
        code: `import { Arrow, ArrowLeft } from "@react-vant-next/icons";
import { Pagination } from "@react-vant-next/ui";
import { useState } from "react";

export default function CustomDemo() {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => \`\${text} 😀\`}
    />
  );
};`,
      },
    },
  },
};

// 自定义页码
export const CustomPageRender: Story = {
  name: "自定义页码",
  render: (_args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        value={page}
        pageCount={10}
        onChange={setPage}
        pageRender={({ text, active }) => {
          return active
            ? <span style={{ color: "#1989fa" }}>{text}</span>
            : <span>{text}</span>;
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `pageRender` 属性自定义页码的渲染内容。",
      },
      source: {
        language: "tsx",
        code: `import { useState } from 'react';
import { Pagination } from '@react-vant-next/ui';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      value={currentPage}
      pageCount={10}
      onChange={setCurrentPage}
      pageRender={({ number, text, active }) => {
        return active ? (
          <span style={{ color: "#1989fa" }}>{text}</span>
        ) : (
          <span>{text}</span>
        );
      }}
    />
  );
};`,
      },
    },
  },
};

// 使用总条目数
export const UseTotalItems: Story = {
  name: "使用总条目数",
  render: (_args) => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        value={page}
        totalItems={125}
        itemsPerPage={10}
        onChange={setPage}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "可以通过 `totalItems` 和 `itemsPerPage` 属性来设置总条目数和每页条目数，组件会自动计算总页数。",
      },
      source: {
        language: "tsx",
        code: `import { useState } from 'react';
import { Pagination } from '@react-vant-next/ui';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      value={currentPage}
      totalItems={125}
      itemsPerPage={10}
      onChange={setCurrentPage}
    />
  );
};`,
      },
    },
  },
};
