import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CascaderOption } from "../index";
import { useState } from "react";
import Button from "../../button";
import Cell from "../../cell";
import Field from "../../field";
import { customFieldOptions } from "../demo/data";
import options from "../demo/options";
import Cascader from "../index";

const meta = {
  id: "form-cascader",
  title: "Form/Cascader",
  component: Cascader,
  parameters: {
    docs: {
      description: {
        component: "级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "顶部标题",
      table: {
        type: { summary: "ReactNode" },
        category: "外观",
      },
    },
    value: {
      control: { type: "object" },
      description: "当前选中的值",
      table: {
        type: { summary: "string[]" },
        category: "状态",
      },
    },
    defaultValue: {
      control: { type: "object" },
      description: "默认选中的值",
      table: {
        type: { summary: "string[]" },
        category: "状态",
      },
    },
    options: {
      control: "object",
      description: "可选项数据源",
      table: {
        type: { summary: "Option[]" },
        defaultValue: { summary: "[]" },
        category: "数据",
      },
    },
    optionRender: {
      description: "自定义选项文字",
      table: {
        type: { summary: "({ option: Option, selected: boolean }) => ReactNode" },
        category: "自定义",
      },
    },
    placeholder: {
      control: "text",
      description: "未选中时的提示文案",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "请选择" },
        category: "外观",
      },
    },
    activeColor: {
      control: "color",
      description: "选中状态的高亮颜色",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#ee0a24" },
        category: "外观",
      },
    },
    closeable: {
      control: "boolean",
      description: "是否显示关闭图标",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "外观",
      },
    },
    closeIcon: {
      description: "关闭图标",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "<Cross />" },
        category: "外观",
      },
    },
    fieldNames: {
      control: "object",
      description: "自定义 options 结构中的字段",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{ text: 'text', value: 'value', children: 'children' }" },
        category: "数据",
      },
    },
    swipeable: {
      control: "boolean",
      description: "是否开启手势左右滑动切换",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "交互",
      },
    },
    onChange: {
      description: "选中项变化时触发",
      table: {
        type: { summary: "(val: string[], selectedRows: CascaderOption[]) => void" },
        category: "事件",
      },
    },
    onFinish: {
      description: "全部选项选择完成后触发",
      table: {
        type: { summary: "(val: string[], selectedRows: CascaderOption[]) => void" },
        category: "事件",
      },
    },
    onClose: {
      description: "点击关闭图标时触发",
      table: {
        type: { summary: "() => void" },
        category: "事件",
      },
    },
    onClickTab: {
      description: "点击标签时触发",
      table: {
        type: { summary: "(tabIndex: number) => void" },
        category: "事件",
      },
    },
  },
} satisfies Meta<typeof Cascader>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基础用法
 */
export const Basic: Story = {
  name: "基础用法",
  parameters: {
    docs: {
      description: {
        story: "基础用法展示了级联选择器的基本功能，用于选择省市区等多层级数据。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `<Cascader popup={{ round: true }} title="请选择所在地区" options={options}>
  {(_, selectedRows, actions) => (
    <Field
      isLink
      value={selectedRows.map(el => el.text).join(',')}
      readOnly
      label="地区"
      placeholder="请选择所在地区"
      onClick={() => actions.open()}
    />
  )}
</Cascader>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: "16px" }}>
      <Cascader popup={{ round: true }} title="请选择所在地区" options={options}>
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.text).join(",")}
            readOnly
            label="地区"
            placeholder="请选择所在地区"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
    </div>
  ),
};

/**
 * 自定义字段名
 */
export const CustomFieldNames: Story = {
  name: "自定义字段名",
  parameters: {
    docs: {
      description: {
        story: "通过 fieldNames 属性可以自定义 options 里的字段名称。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `<Cascader
  popup={{ round: true }}
  title="请选择所在地区"
  options={customFieldOptions}
  fieldNames={{
    text: 'name',
    value: 'code',
    children: 'items',
  }}
>
  {(_, selectedRows, actions) => (
    <Field
      isLink
      value={selectedRows.map(el => el.name).join(',')}
      readOnly
      label="地区"
      placeholder="请选择所在地区"
      onClick={() => actions.open()}
    />
  )}
</Cascader>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: "16px" }}>
      <Cascader
        popup={{ round: true }}
        title="请选择所在地区"
        options={customFieldOptions}
        fieldNames={{
          text: "name",
          value: "code",
          children: "items",
        }}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.name).join(",")}
            readOnly
            label="地区"
            placeholder="请选择所在地区"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
    </div>
  ),
};

/**
 * 自定义颜色
 */
export const CustomColor: Story = {
  name: "自定义颜色",
  parameters: {
    docs: {
      description: {
        story: "通过 activeColor 属性可以自定义选中状态的高亮颜色。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `<Cascader
  popup={{ round: true }}
  title="请选择所在地区"
  options={options}
  activeColor="#1989fa"
>
  {(_, selectedRows, actions) => (
    <Field
      isLink
      value={selectedRows.map(el => el.text).join(',')}
      readOnly
      label="地区"
      placeholder="请选择所在地区"
      onClick={() => actions.open()}
    />
  )}
</Cascader>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: "16px" }}>
      <Cascader
        popup={{ round: true }}
        title="请选择所在地区"
        options={options}
        activeColor="#1989fa"
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.text).join(",")}
            readOnly
            label="地区"
            placeholder="请选择所在地区"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
    </div>
  ),
};

/**
 * 异步加载选项
 */
export const AsyncOptions: Story = {
  name: "异步加载选项",
  parameters: {
    docs: {
      description: {
        story: "可以监听 onChange 事件并动态设置 options，实现异步加载选项。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `function AsyncExample() {
  const [dynamicOpts, setDynamicOpts] = useState([
    { text: '浙江省', value: '330000' },
    { text: '江苏省', value: '320000' },
  ])

  const onChange = (value) => {
    if (value.length === 1) {
      setTimeout(() => {
        if (value[0] === '330000') {
          setDynamicOpts([
            { text: '浙江省', value: '330000', children: [
              { text: '杭州市', value: '330100' },
              { text: '宁波市', value: '330200' },
            ]},
            { text: '江苏省', value: '320000' },
          ])
        }
      }, 500)
    }

    if (value.length === 2) {
      setTimeout(() => {
        if (value[1] === '330100') {
          setDynamicOpts([
            {
              text: '浙江省',
              value: '330000',
              children: [
                {
                  text: '杭州市',
                  value: '330100',
                  children: [
                    { text: '上城区', value: '330102' },
                    { text: '下城区', value: '330103' },
                  ]
                },
                { text: '宁波市', value: '330200' },
              ]
            },
            { text: '江苏省', value: '320000' },
          ])
        }
      }, 500)
    }
  }

  return (
    <Cascader
      popup={{ round: true }}
      title="请选择所在地区"
      options={dynamicOpts}
      onChange={onChange}
    >
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.text).join(',')}
          readOnly
          label="地区"
          placeholder="请选择所在地区"
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}`,
      },
    },
  },
  render: () => {
    const AsyncExample = () => {
      const [dynamicOpts, setDynamicOpts] = useState<CascaderOption[]>([
        { text: "浙江省", value: "330000" },
        { text: "江苏省", value: "320000" },
      ]);

      const onChange = (value) => {
        if (value.length === 1) {
          setTimeout(() => {
            if (value[0] === "330000") {
              setDynamicOpts([
                { text: "浙江省", value: "330000", children: [
                  { text: "杭州市", value: "330100" },
                  { text: "宁波市", value: "330200" },
                ] },
                { text: "江苏省", value: "320000" },
              ]);
            }
          }, 500);
        }

        if (value.length === 2) {
          setTimeout(() => {
            if (value[1] === "330100") {
              setDynamicOpts([
                {
                  text: "浙江省",
                  value: "330000",
                  children: [
                    {
                      text: "杭州市",
                      value: "330100",
                      children: [
                        { text: "上城区", value: "330102" },
                        { text: "下城区", value: "330103" },
                      ],
                    },
                    { text: "宁波市", value: "330200" },
                  ],
                },
                { text: "江苏省", value: "320000" },
              ]);
            }
          }, 500);
        }
      };

      return (
        <Cascader
          popup={{ round: true }}
          title="请选择所在地区"
          options={dynamicOpts}
          onChange={onChange}
        >
          {(_, selectedRows, actions) => (
            <Field
              isLink
              value={selectedRows.map(el => el.text).join(",")}
              readOnly
              label="地区"
              placeholder="请选择所在地区"
              onClick={() => actions.open()}
            />
          )}
        </Cascader>
      );
    };

    return (
      <div style={{ padding: "16px" }}>
        <AsyncExample />
      </div>
    );
  },
};

/**
 * 自定义选项内容
 */
export const CustomOptionRender: Story = {
  name: "自定义选项内容",
  parameters: {
    docs: {
      description: {
        story: "通过 optionRender 函数可以自定义选项内容。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `<Cascader
  popup={{ round: true }}
  title="请选择所在地区"
  options={options}
  optionRender={({ option, selected }) => (
    <span style={{ color: selected ? '#1989fa' : undefined }}>
      {option.text} {selected ? '✓' : ''}
    </span>
  )}
>
  {(_, selectedRows, actions) => (
    <Field
      isLink
      value={selectedRows.map(el => el.text).join(',')}
      readOnly
      label="地区"
      placeholder="请选择所在地区"
      onClick={() => actions.open()}
    />
  )}
</Cascader>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: "16px" }}>
      <Cascader
        popup={{ round: true }}
        title="请选择所在地区"
        options={options}
        optionRender={({ option, selected }) => (
          <span style={{ color: selected ? "#1989fa" : undefined }}>
            {option.text}
            {" "}
            {selected ? "✓" : ""}
          </span>
        )}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.text).join(",")}
            readOnly
            label="地区"
            placeholder="请选择所在地区"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
    </div>
  ),
};

/**
 * 受控组件
 */
export const ControlledComponent: Story = {
  name: "受控组件",
  parameters: {
    docs: {
      description: {
        story: "通过 value 属性可以使 Cascader 成为受控组件。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `function ControlledExample() {
  const [value, setValue] = useState(['330000', '330100', '330102'])
  const [selectedText, setSelectedText] = useState('浙江省,杭州市,上城区')

  const onChange = (val, selectedRows) => {
    setValue(val)
    setSelectedText(selectedRows.map(item => item.text).join(','))
  }

  const onReset = () => {
    setValue([])
    setSelectedText('')
  }

  return (
    <>
      <Cascader
        popup={{ round: true }}
        title="请选择所在地区"
        value={value}
        options={options}
        onChange={onChange}
      >
        {(_, __, actions) => (
          <Field
            isLink
            value={selectedText}
            readOnly
            label="地区"
            placeholder="请选择所在地区"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
      <Cell>
        <Button block onClick={onReset}>重置</Button>
      </Cell>
    </>
  )
}`,
      },
    },
  },
  render: () => {
    const ControlledExample = () => {
      const [value, setValue] = useState(["330000", "330100", "330102"]);
      const [selectedText, setSelectedText] = useState("浙江省,杭州市,上城区");

      const onChange = (val, selectedRows) => {
        setValue(val);
        setSelectedText(selectedRows.map(item => item.text).join(","));
      };

      const onReset = () => {
        setValue([]);
        setSelectedText("");
      };

      return (
        <>
          <Cascader
            popup={{ round: true }}
            title="请选择所在地区"
            value={value}
            options={options}
            onChange={onChange}
          >
            {(_, __, actions) => (
              <Field
                isLink
                value={selectedText}
                readOnly
                label="地区"
                placeholder="请选择所在地区"
                onClick={() => actions.open()}
              />
            )}
          </Cascader>
          <Cell>
            <Button block onClick={onReset}>重置</Button>
          </Cell>
        </>
      );
    };

    return (
      <div style={{ padding: "16px" }}>
        <ControlledExample />
      </div>
    );
  },
};

/**
 * 自定义关闭图标
 */
export const CustomCloseIcon: Story = {
  name: "自定义关闭图标",
  parameters: {
    docs: {
      description: {
        story: "通过 closeIcon 属性可以自定义关闭图标。",
      },
      canvas: { sourceState: "shown" },
      source: {
        language: "tsx",
        code: `<Cascader
  popup={{ round: true }}
  title="请选择所在地区"
  options={options}
  closeIcon={<div style={{ fontSize: '14px', padding: '8px' }}>关闭</div>}
>
  {(_, selectedRows, actions) => (
    <Field
      isLink
      value={selectedRows.map(el => el.text).join(',')}
      readOnly
      label="地区"
      placeholder="请选择所在地区"
      onClick={() => actions.open()}
    />
  )}
</Cascader>`,
      },
    },
  },
  render: () => (
    <div style={{ padding: "16px" }}>
      <Cascader
        popup={{ round: true }}
        title="请选择所在地区"
        options={options}
        closeIcon={<div style={{ fontSize: "14px", padding: "8px" }}>关闭</div>}
      >
        {(_, selectedRows, actions) => (
          <Field
            isLink
            value={selectedRows.map(el => el.text).join(",")}
            readOnly
            label="地区"
            placeholder="请选择所在地区"
            onClick={() => actions.open()}
          />
        )}
      </Cascader>
    </div>
  ),
};
