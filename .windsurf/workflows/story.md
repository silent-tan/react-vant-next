---
description: React Vant Next 组件 Storybook 文档编写与调整工作流程
---

1. 前期准备
  - 阅读并理解组件 README 文档
    - “介绍”是 Storybook 中的组件描述
    - “代码演示”将会是 Storybook 中的组件示例
  - 系统已经安装了 mcp-language-server，你可以用它来对 typescript 文件进行分析
  - 查看组件的 demo 文件夹，这里面是 README 中的示例引用，也大概率是 Storybook 中需要用到的示例外部组件的引用
2. 创建或者调整 Meta 部分
  - 添加完整的组件描述，内容应与 README 中的介绍一致
  - 设置合适的 parameters 配置，确保有设置到 component 字段
    ```tsx
    parameters: {
      docs: {
        description: {
          component: "README 中的介绍",
        },
        // toc: false, // 根据需要设置，只有一个示例的时候设置为 false
      },
    }
    ```
  - 确保 title 和 id 命名规范一致
3. argTypes 分类优化：你需要查看组件的 PropType，调整或者补充属性
  - 一般将属性按以下类别分组：
    - 基础：style、className、children、value、defaultValue 等基础属性
    - 外观：与组件视觉外观相关的属性
    - 状态：与组件状态相关的属性（如 disabled、readonly 等）
    - 事件：所有回调函数（如 onChange、onClick 等）
    - 其他：不属于以上类别的特殊属性
  - 分组示例：
    ```tsx
    argTypes: {
      // 基础
      style: {
        description: "README 中的属性说明",
        table: {
          category: "基础",
          type: { summary: "CSSProperties" },
        },
      },
      // 状态
      disabled: {
        description: "README 中的属性说明",
        table: {
          category: "状态",
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
        },
        control: "boolean",
      },
    }
    ```
4. Story 示例标准化
  - 按 README 顺序，创建或者重新编排 story
  - 为每个 story 添加合适的名称和描述，确保每个 Story 都有 name 属性，并且 name 和 描述和 README 一致
  - 除了 demo 已经有的组件，少于20行的代码示例都不需要创建一个独立组件，优先使用已有的 demo 组件
  - render 的内容基本上都是直接复制 README 对应示例就行了，不要画蛇添足添加多余代码
  - 如果是简单示例，使用 render: args => ... 形式，无状态示例优先使用 render: args => ...，无需写 source.code 字段，但需显式写出参数
    ```tsx
    export const Basic: Partial<Story> = {
      name: "基础用法",
      render: (_args) => <XXXX />, // _args 显式显示可以让 Storybook 自动生成 source.code
      parameters: {
        docs: {
          description: {
            story: "README 中的示例描述",
          },
        },
      },
    };
    ```
  - 如果是复杂示例，有内部状态并且没有在 demo 文件夹下有对应示例
    ```tsx
    export const Basic: Partial<Story> = {
      name: "基础用法",
      render: () => {
        const [value, setValue] = useState(10);
        const onChangeAfter = v => Toast.info(`当前值：${v}`);
        return <XXXX value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
      },
      parameters: {
        docs: {
          description: {
            story: "README 中的示例描述",
          },
        },
        source: {
          code: "直接 README 中的代码",
        },
      },
    };
    ```
  - 如果 demo 文件夹下有对应示例：
    ```tsx
    export const Basic: Partial<Story> = {
      name: "基础用法",
      render: () => <OuterDemo />,
      parameters: {
        docs: {
          description: {
            story: "README 中的示例描述",
          },
        },
        source: {
          code: "和 引用文件 的内容一致",
        },
      },
    };
    ```
  - 缺失的示例需要补充，README 中没有的示例需要删除
5. 代码规范检查
  - 简单示例使用 `render: args => ...` 形式，无状态示例优先使用 `render: args => ...`，无需写 source.code 字段，但需显式写出参数
  - 复杂示例可以使用独立的组件函数或外部 demo 文件
  - 确保每个示例的 parameters.docs.source.code 字段与实际渲染代码完全一致
  - 有状态示例或复杂示例使用独立函数或外部 demo 文件
6. 最终 CheckList
  - 逐项核查所有 story 示例与 README 的一致性
  - 检查所有示例的参数、说明、顺序是否与 README 完全一致
  - 检查是否有遗漏的属性或示例
