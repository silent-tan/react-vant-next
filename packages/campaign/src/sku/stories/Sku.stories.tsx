import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SkuInstance } from "../PropsType";
import { Button, Toast } from "@react-vant-next/ui";
import { useRef } from "react";
import { getSkuData, initialSku } from "../demo/data";
import Sku from "../index";

// 创建 Meta 对象
const meta = {
  id: "biz-sku",
  title: "Biz/Sku",
  component: Sku,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "商品规格选择组件，用于选择商品的规格、数量等信息。",
      },
    },
  },
  argTypes: {
    // 基础
    sku: {
      description: "商品 sku 数据",
      table: {
        category: "基础",
        type: { summary: "SkuData" },
        required: true,
      },
    },
    goods: {
      description: "商品信息",
      table: {
        category: "基础",
        type: { summary: "Record<string | number, unknown>" },
        required: true,
      },
    },
    goodsId: {
      description: "商品 id",
      table: {
        category: "基础",
        type: { summary: "number | string" },
      },
    },
    priceTag: {
      description: "显示在价格后面的标签",
      table: {
        category: "基础",
        type: { summary: "ReactNode" },
      },
    },
    properties: {
      description: "商品属性",
      table: {
        category: "基础",
        type: { summary: "array" },
      },
    },
    initialSku: {
      description: "默认选中的 sku",
      table: {
        category: "基础",
        type: { summary: "object" },
      },
    },
    getContainer: {
      description: "指定挂载的节点",
      table: {
        category: "基础",
        type: { summary: "string | () => Element" },
      },
    },

    // 外观
    hideStock: {
      description: "是否显示商品剩余库存",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    hideQuotaText: {
      description: "是否显示限购提示",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    hideSelectedText: {
      description: "是否隐藏已选提示",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    stockThreshold: {
      description: "库存阈值。低于这个值会把库存数高亮显示",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "50" },
      },
    },
    showAddCartBtn: {
      description: "是否显示加入购物车按钮",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    buyText: {
      description: "购买按钮文字",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "立即购买" },
      },
    },
    addCartText: {
      description: "加入购物车按钮文字",
      table: {
        category: "外观",
        type: { summary: "string" },
        defaultValue: { summary: "加入购物车" },
      },
    },
    stepperTitle: {
      description: "数量选择组件左侧文案",
      table: {
        category: "外观",
        type: { summary: "ReactNode" },
        defaultValue: { summary: "购买数量" },
      },
    },
    showHeaderImage: {
      description: "是否展示头部图片",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    lazyload: {
      description: "是否开启图片懒加载",
      table: {
        category: "外观",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    bodyOffsetTop: {
      description: "sku 距视窗顶部距离",
      table: {
        category: "外观",
        type: { summary: "number" },
        defaultValue: { summary: "200" },
      },
    },

    // 状态
    quota: {
      description: "限购数，0 表示不限购",
      table: {
        category: "状态",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    quotaUsed: {
      description: "已经购买过的数量",
      table: {
        category: "状态",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    resetOnHide: {
      description: "隐藏时重置选择的商品数量",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disableStepperInput: {
      description: "是否禁用步进器输入",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    closeOnClickOverlay: {
      description: "是否在点击遮罩层后关闭",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    safeAreaInsetBottom: {
      description: "是否开启底部安全区适配",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    startSaleNum: {
      description: "起售数量",
      table: {
        category: "状态",
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    showSoldoutSku: {
      description: "是否展示售罄的 sku，默认展示并置灰",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    disableSoldoutSku: {
      description: "是否禁用售罄的 sku",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    previewOnClickImage: {
      description: "是否在点击商品图片时自动预览",
      table: {
        category: "状态",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    // 自定义渲染
    customStepperConfig: {
      description: "步进器相关自定义配置",
      table: {
        category: "自定义渲染",
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
      },
    },
    customSkuValidator: {
      description: "自定义 sku 校验规则",
      table: {
        category: "自定义渲染",
        type: { summary: "(type, selectedValue) => void | boolean | Promise<boolean>" },
      },
    },
    skuHeader: {
      description: "商品信息展示区，包含商品图片、名称、价格等信息",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuHeaderPriceRender: {
      description: "自定义 sku 头部价格展示",
      table: {
        category: "自定义渲染",
        type: { summary: "(price: number) => ReactNode" },
      },
    },
    skuHeaderOriginPrice: {
      description: "自定义 sku 头部原价展示",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuHeaderExtra: {
      description: "额外 sku 头部区域",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuHeaderImageExtra: {
      description: "自定义 sku 头部图片额外的展示",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuBodyTop: {
      description: "sku 展示区上方的内容，无默认展示内容，按需使用",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuGroup: {
      description: "商品 sku 展示区",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuGroupExtra: {
      description: "额外商品 sku 展示区，一般用不到",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuStepper: {
      description: "商品数量选择区",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuActionsTop: {
      description: "操作按钮区顶部内容，无默认展示内容，按需使用",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },
    skuActions: {
      description: "操作按钮区",
      table: {
        category: "自定义渲染",
        type: { summary: "ReactNode" },
      },
    },

    // 事件
    onAddCart: {
      description: "点击添加购物车回调",
      table: {
        category: "事件",
        type: { summary: "(value: object) => void" },
      },
    },
    onBuyClicked: {
      description: "点击购买回调",
      table: {
        category: "事件",
        type: { summary: "(value: object) => void" },
      },
    },
    onStepperChange: {
      description: "购买数量变化时触发",
      table: {
        category: "事件",
        type: { summary: "(value: number) => void" },
      },
    },
    onSkuSelected: {
      description: "切换规格类目时触发",
      table: {
        category: "事件",
        type: { summary: "({ skuValue, selectedSku, selectedSkuComb }) => void" },
      },
    },
    onSkuPropSelected: {
      description: "切换商品属性时触发",
      table: {
        category: "事件",
        type: { summary: "({ propValue, selectedProp, selectedSkuComb }) => void" },
      },
    },
    onOpenPreview: {
      description: "打开商品图片预览时触发",
      table: {
        category: "事件",
        type: { summary: "(data: object) => void" },
      },
    },
    onClosePreview: {
      description: "关闭商品图片预览时触发",
      table: {
        category: "事件",
        type: { summary: "(data: object) => void" },
      },
    },
  },
} satisfies Meta<typeof Sku>;

export default meta;

type Story = StoryObj<typeof meta>;

// 示例数据
const skuData = getSkuData();

// 基础用法示例
function DefaultComponent() {
  const ref = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref.current?.show()}
      >
        基础用法
      </Button>

      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show(initialSku)}
      >
        设置默认值
      </Button>
      <Sku
        ref={ref}
        sku={skuData.sku}
        goods={skuData.goods_info}
        goodsId={skuData.goods_id}
        properties={skuData.properties}
        onAddCart={value => Toast(JSON.stringify(value))}
        onBuyClicked={value => Toast(JSON.stringify(value))}
      />
    </>
  );
}

export const Basic: Partial<Story> = {
  name: "基础用法",
  render: () => <DefaultComponent />,
  parameters: {
    docs: {
      description: {
        story: "商品规格选择组件，用于选择商品的规格、数量等信息。",
      },
      source: {
        code: `import type { SkuInstance } from "@react-vant-next/ui";
import { Button, Sku, Toast } from "@react-vant-next/ui";
import React, { useRef } from "react";
import { getSkuData, initialSku } from "./demo/data";

const demoData = getSkuData();

export default () => {
  const ref = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref.current?.show()}
      >
        基础用法
      </Button>

      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show(initialSku)}
      >
        设置默认值
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        onAddCart={value => Toast(JSON.stringify(value))}
        onBuyClicked={value => Toast(JSON.stringify(value))}
      />
    </>
  );
};
        `,
      },
    },
  },
};

// 自定义步进器
function CustomStepperComponent() {
  const ref = useRef<SkuInstance>(null);

  const customStepperConfig = {
    quotaText: "单次限购100件",
    stockFormatter: stock => `剩余${stock}`,
    handleOverLimit: (data) => {
      const { action, limitType, quota, startSaleNum = 1 } = data;
      if (action === "minus") {
        Toast(startSaleNum > 1 ? `${startSaleNum}件起售` : "至少选择一件商品");
      }
      else if (action === "plus") {
        if (limitType === 0) {
          Toast(`限购${quota}件`);
        }
        else {
          Toast("库存不够了");
        }
      }
    },
  };

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        自定义步进器
      </Button>
      <Sku
        ref={ref}
        sku={skuData.sku}
        goods={skuData.goods_info}
        goodsId={skuData.goods_id}
        properties={skuData.properties}
        quota={skuData.quota}
        quotaUsed={skuData.quota_used}
        startSaleNum={skuData.start_sale_num}
        onBuyClicked={r => console.log(r)}
        onStepperChange={v => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
    </>
  );
}

export const CustomStepper: Partial<Story> = {
  name: "自定义步进器",
  render: () => <CustomStepperComponent />,
  parameters: {
    docs: {
      description: {
        story: "通过自定义 `customStepperConfig` 可以设置步进器相关的配置。",
      },
      source: {
        code: `import type { SkuInstance } from "@react-vant-next/ui";
import { Button, Sku, Toast } from "@react-vant-next/ui";
import React, { useRef } from "react";
import { getSkuData } from "./demo/data";

const demoData = getSkuData();

const customStepperConfig = {
  quotaText: "单次限购100件",
  stockFormatter: stock => "剩余" + stock,
  handleOverLimit: (data) => {
    const { action, limitType, quota, startSaleNum = 1 } = data;
    if (action === "minus") {
      Toast(startSaleNum > 1 ? \`\${startSaleNum}件起售\` : "至少选择一件商品");
    }
    else if (action === "plus") {
      if (limitType === 0) {
        Toast(\`限购\${quota}件\`);
      }
      else {
        Toast("库存不够了");
      }
    }
  },
};

export default () => {
  const ref = useRef<SkuInstance>(null);
  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        自定义步进器
      </Button>
      <Sku
        ref={ref}
        sku={demoData.sku}
        goods={demoData.goods_info}
        goodsId={demoData.goods_id}
        properties={demoData.properties}
        quota={demoData.quota}
        quotaUsed={demoData.quota_used}
        startSaleNum={demoData.start_sale_num}
        onBuyClicked={r => console.log(r)}
        onStepperChange={v => console.log(v)}
        customStepperConfig={customStepperConfig}
      />
    </>
  );
};
        `,
      },
    },
  },
};

// 大图模式
function LargeImageComponent() {
  const ref = useRef<SkuInstance>(null);
  const demoDataLarge = getSkuData(true);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref.current?.show()}
      >
        大图模式
      </Button>
      <Sku
        ref={ref}
        sku={demoDataLarge.sku}
        goods={demoDataLarge.goods_info}
        goodsId={demoDataLarge.goods_id}
        properties={demoDataLarge.properties}
        disableStepperInput
      />
    </>
  );
}

export const LargeImage: Partial<Story> = {
  name: "大图模式",
  render: () => <LargeImageComponent />,
  parameters: {
    docs: {
      description: {
        story: "在商品规格选择中展示更大的规格图片。",
      },
      source: {
        code: `
const ref = useRef<SkuInstance>(null)
const demoDataLarge = getSkuData(true)

return (
  <>
    <Button
      block
      type="primary"
      color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
      onClick={() => ref.current?.show()}
    >
      大图模式
    </Button>
    <Sku
      ref={ref}
      sku={demoDataLarge.sku}
      goods={demoDataLarge.goods_info}
      goodsId={demoDataLarge.goods_id}
      properties={demoDataLarge.properties}
      disableStepperInput
    />
  </>
)
        `,
      },
    },
  },
};

// 自定义
function CustomComponent() {
  const ref1 = useRef<SkuInstance>(null);
  const ref2 = useRef<SkuInstance>(null);

  return (
    <>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        style={{ marginBottom: 10 }}
        onClick={() => ref1.current?.show()}
      >
        自定义视图
      </Button>
      <Button
        block
        type="primary"
        color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
        onClick={() => ref2.current?.show()}
      >
        自定义SKU校验规则
      </Button>
      <Sku
        ref={ref1}
        sku={skuData.sku}
        goods={skuData.goods_info}
        goodsId={skuData.goods_id}
        properties={skuData.properties}
        skuHeaderPriceRender={price => (
          <div style={{ color: "red" }}>
            自定义价格：¥
            {price}
          </div>
        )}
      />
      <Sku
        ref={ref2}
        sku={skuData.sku}
        goods={skuData.goods_info}
        goodsId={skuData.goods_id}
        properties={skuData.properties}
        customSkuValidator={() => {
          Toast("自定义校验");
          return true;
        }}
      />
    </>
  );
}

export const Custom: Partial<Story> = {
  name: "自定义",
  render: () => <CustomComponent />,
  parameters: {
    docs: {
      description: {
        story: "Sku 组件提供了丰富的自定义能力，可以自定义视图和 SKU 校验规则。",
      },
      source: {
        code: `
const ref1 = useRef<SkuInstance>(null)
const ref2 = useRef<SkuInstance>(null)

return (
  <>
    <Button
      block
      type="primary"
      color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
      style={{ marginBottom: 10 }}
      onClick={() => ref1.current?.show()}
    >
      自定义视图
    </Button>
    <Button
      block
      type="primary"
      color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
      onClick={() => ref2.current?.show()}
    >
      自定义SKU校验规则
    </Button>
    <Sku
      ref={ref1}
      sku={skuData.sku}
      goods={skuData.goods_info}
      goodsId={skuData.goods_id}
      properties={skuData.properties}
      skuHeaderPriceRender={price => (
        <div style={{ color: 'red' }}>自定义价格：¥{price}</div>
      )}
    />
    <Sku
      ref={ref2}
      sku={skuData.sku}
      goods={skuData.goods_info}
      goodsId={skuData.goods_id}
      properties={skuData.properties}
      customSkuValidator={() => {
        Toast('自定义校验')
        return true
      }}
    />
  </>
)
        `,
      },
    },
  },
};
