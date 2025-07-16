import type { Meta, StoryObj } from "@storybook/react-vite";
import { Like } from "@react-vant-next/icons";
import { Button, Space } from "@react-vant-next/ui";
import { useEffect, useState } from "react";

import Toast from "../index";
import ToastComponent from "../Toast";

const meta = {
  id: "basic-toast",
  title: "Basic/Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。",
      },
    },
  },
  argTypes: {
    type: {
      description: "提示类型",
      table: {
        type: { summary: "'loading' | 'success' | 'fail' | 'info'" },
        defaultValue: { summary: "info" },
        required: false,
      },
    },
    message: {
      description: "文本内容，支持通过\\n换行",
      table: {
        type: { summary: "number | string" },
        required: false,
      },
    },
    duration: {
      description: "展示时长(ms)，值为 0 时，toast 不会消失",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "2000" },
        required: false,
      },
    },
    icon: {
      description: "自定义图标",
      table: {
        type: { summary: "React.ReactNode" },
        required: false,
      },
    },
    iconSize: {
      description: "图标大小，如 20px 2em，默认单位为 px",
      table: {
        type: { summary: "number | string" },
        defaultValue: { summary: "36px" },
        required: false,
      },
    },
    loadingType: {
      description: "加载图标类型, 可选值为 spinner",
      table: {
        type: { summary: "'circular' | 'spinner'" },
        defaultValue: { summary: "circular" },
        required: false,
      },
    },
    overlay: {
      description: "是否显示背景遮罩层",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    forbidClick: {
      description: "是否禁止背景点击",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    closeOnClickOverlay: {
      description: "是否在点击遮罩层后关闭",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    closeOnClick: {
      description: "是否在点击后关闭",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        required: false,
      },
    },
    position: {
      description: "位置，可选值为 top bottom",
      table: {
        type: { summary: "'top' | 'middle' | 'bottom'" },
        defaultValue: { summary: "middle" },
        required: false,
      },
    },
    transition: {
      description: "动画类名",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "rv-fade" },
        required: false,
      },
    },
    onClose: {
      description: "关闭时的回调函数",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
    onOpened: {
      description: "完全展示后的回调函数",
      table: {
        type: { summary: "() => void" },
        required: false,
      },
    },
  },
} satisfies Meta<typeof ToastComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// 基础用法示例
export const Basic: Story = {
  render: () => {
    return (
      <Space direction="vertical" gap={16}>
        <Button
          type="primary"
          onClick={() => Toast.info("提示内容")}
        >
          文字提示
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast.loading({
              message: "加载中...",
              forbidClick: true,
            });
          }}
        >
          加载提示
        </Button>
        <Button
          type="primary"
          onClick={() => Toast.success("成功文案")}
        >
          成功提示
        </Button>
        <Button
          type="primary"
          onClick={() => Toast.fail("失败文案")}
        >
          失败提示
        </Button>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Toast 支持 `info`、`loading`、`success`、`fail` 四种类型，由 `type` 属性指定。",
      },
      source: {
        code: `
<Space direction="vertical" gap={16}>
  <Button
    type="primary"
    onClick={() => Toast.info("提示内容")}
  >
    文字提示
  </Button>
  <Button
    type="primary"
    onClick={() => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      })
    }}
  >
    加载提示
  </Button>
  <Button
    type="primary"
    onClick={() => Toast.success("成功文案")}
  >
    成功提示
  </Button>
  <Button
    type="primary"
    onClick={() => Toast.fail("失败文案")}
  >
    失败提示
  </Button>
</Space>
        `,
      },
    },
  },
};

// 动态更新提示示例
export const DynamicUpdate: Story = {
  render: () => {
    const showDynamicToast = () => {
      let remain = 4;
      let timer: NodeJS.Timeout;

      const toast = Toast.info({
        message: `还剩 ${remain + 1} 秒`,
        duration: 5000,
        onClose: () => clearInterval(timer),
      });

      timer = setInterval(() => {
        toast.config({ message: `还剩 ${remain--} 秒` });
        if (remain < 0)
          clearInterval(timer);
      }, 1000);
    };

    return (
      <Button type="primary" onClick={showDynamicToast}>
        动态更新提示
      </Button>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 message 属性可以实现动态更新提示的效果。",
      },
      source: {
        code: `
const showDynamicToast = () => {
  let remain = 4
  let timer

  const toast = Toast.info({
    message: \`还剩 \${remain + 1} 秒\`,
    duration: 5000,
    onClose: () => clearInterval(timer),
  })

  timer = setInterval(() => {
    toast.config({ message: \`还剩 \${remain--} 秒\` })
    if (remain < 0) clearInterval(timer)
  }, 1000)
}

return (
  <Button type="primary" onClick={showDynamicToast}>
    动态更新提示
  </Button>
)
        `,
      },
    },
  },
};

// 自定义图标示例
export const CustomIcon: Story = {
  render: () => {
    return (
      <Space direction="vertical" gap={16}>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "自定义图标",
              icon: <Like />,
            });
          }}
        >
          自定义图标
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "自定义图标大小",
              icon: <Like />,
              iconSize: 80,
            });
          }}
        >
          自定义图标大小
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast.loading({
              message: "自定义加载图标",
              loadingType: "spinner",
            });
          }}
        >
          自定义加载图标
        </Button>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `icon` 选项可以自定义图标，通过 `iconSize` 属性可以自定义图标大小，通过 `loadingType` 属性可以自定义加载图标类型。",
      },
      source: {
        code: `
// 自定义图标
Toast({
  message: "自定义图标",
  icon: <Like />,
})

// 自定义图标大小
Toast({
  message: "自定义图标大小",
  icon: <Like />,
  iconSize: 80,
})

// 自定义加载图标
Toast.loading({
  message: "自定义加载图标",
  loadingType: "spinner",
})
        `,
      },
    },
  },
};

// 自定义位置示例
export const CustomPosition: Story = {
  render: () => {
    return (
      <Space direction="vertical" gap={16}>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "顶部展示",
              position: "top",
            });
          }}
        >
          顶部展示
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "底部展示",
              position: "bottom",
            });
          }}
        >
          底部展示
        </Button>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。",
      },
      source: {
        code: `
// 顶部展示
Toast({
  message: "顶部展示",
  position: "top",
})

// 底部展示
Toast({
  message: "底部展示",
  position: "bottom",
})
        `,
      },
    },
  },
};

// 多例模式示例
export const MultipleToasts: Story = {
  render: () => {
    return MultipleToastsExample();
  },
  parameters: {
    docs: {
      description: {
        story: "Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以通过 `Toast.allowMultiple()` 开启多例模式。",
      },
      source: {
        code: `
const [allowMultiple, setAllowMultiple] = useState(false)

useEffect(() => {
  // 组件卸载时重置为单例模式
  return () => {
    Toast.allowMultiple(false)
  }
}, [])

const toggleAllowMultiple = () => {
  const newValue = !allowMultiple
  setAllowMultiple(newValue)
  Toast.allowMultiple(newValue)
  Toast.info(\`\${newValue ? "已开启" : "已关闭"}多例模式\`)
}

const showToasts = () => {
  Toast.info({ message: "第一个 Toast" })

  setTimeout(() => {
    Toast.success({ message: "第二个 Toast" })
  }, 1000)
}

return (
  <Space direction="vertical" gap={16}>
    <Button type="primary" onClick={toggleAllowMultiple}>
      {allowMultiple ? "关闭" : "开启"}多例模式
    </Button>
    <Button type="primary" onClick={showToasts}>
      依次展示 Toast
    </Button>
  </Space>
)
        `,
      },
    },
  },
};

// 修改默认配置示例
export const DefaultOptions: Story = {
  render: () => {
    const setDefaultOptions = () => {
      Toast.setDefaultOptions({ duration: 3000 });
      Toast.info("全局设置 duration 为 3000 ms");
    };

    const setDefaultOptionsForType = () => {
      Toast.setDefaultOptions("loading", { forbidClick: true });
      Toast.loading("设置 loading 类型的 forbidClick 为 true");
    };

    const resetDefaultOptions = () => {
      Toast.resetDefaultOptions();
      Toast.info("重置所有 Toast 的默认配置");
    };

    const resetDefaultOptionsForType = () => {
      Toast.resetDefaultOptions("loading");
      Toast.loading("重置 loading 类型的默认配置");
    };

    return (
      <Space direction="vertical" gap={16}>
        <Button type="primary" onClick={setDefaultOptions}>
          全局设置默认配置
        </Button>
        <Button type="primary" onClick={setDefaultOptionsForType}>
          设置指定类型的默认配置
        </Button>
        <Button type="primary" onClick={resetDefaultOptions}>
          重置所有默认配置
        </Button>
        <Button type="primary" onClick={resetDefaultOptionsForType}>
          重置指定类型的默认配置
        </Button>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "通过 `Toast.setDefaultOptions` 函数可以全局修改 Toast 的默认配置，通过 `Toast.resetDefaultOptions` 函数可以重置默认配置。",
      },
      source: {
        code: `
// 全局设置默认配置
Toast.setDefaultOptions({ duration: 3000 })

// 设置指定类型的默认配置
Toast.setDefaultOptions("loading", { forbidClick: true })

// 重置所有默认配置
Toast.resetDefaultOptions()

// 重置指定类型的默认配置
Toast.resetDefaultOptions("loading")
        `,
      },
    },
  },
};

// 交互选项示例
export const InteractionOptions: Story = {
  render: () => {
    return (
      <Space direction="vertical" gap={16}>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "背景不可点击",
              forbidClick: true,
              duration: 3000,
            });
          }}
        >
          背景不可点击
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "点击后关闭",
              closeOnClick: true,
              duration: 5000,
            });
          }}
        >
          点击后关闭
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "显示遮罩层",
              overlay: true,
              duration: 3000,
            });
          }}
        >
          显示遮罩层
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Toast({
              message: "点击遮罩层后关闭",
              overlay: true,
              closeOnClickOverlay: true,
              duration: 5000,
            });
          }}
        >
          点击遮罩层后关闭
        </Button>
      </Space>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Toast 组件提供了多种交互选项，可以通过 `forbidClick`、`closeOnClick`、`overlay`、`closeOnClickOverlay` 等属性控制交互行为。",
      },
      source: {
        code: `
// 背景不可点击
Toast({
  message: "背景不可点击",
  forbidClick: true,
  duration: 3000,
})

// 点击后关闭
Toast({
  message: "点击后关闭",
  closeOnClick: true,
  duration: 5000,
})

// 显示遮罩层
Toast({
  message: "显示遮罩层",
  overlay: true,
  duration: 3000,
})

// 点击遮罩层后关闭
Toast({
  message: "点击遮罩层后关闭",
  overlay: true,
  closeOnClickOverlay: true,
  duration: 5000,
})
        `,
      },
    },
  },
};
function MultipleToastsExample() {
  const [allowMultiple, setAllowMultiple] = useState(false);

  useEffect(() => {
    // 组件卸载时重置为单例模式
    return () => {
      Toast.allowMultiple(false);
    };
  }, []);

  const toggleAllowMultiple = () => {
    const newValue = !allowMultiple;
    setAllowMultiple(newValue);
    Toast.allowMultiple(newValue);
    Toast.info(`${newValue ? "已开启" : "已关闭"}多例模式`);
  };

  const showToasts = () => {
    Toast.info({ message: "第一个 Toast" });

    setTimeout(() => {
      Toast.success({ message: "第二个 Toast" });
    }, 1000);
  };

  return (
    <Space direction="vertical" gap={16}>
      <Button type="primary" onClick={toggleAllowMultiple}>
        {allowMultiple ? "关闭" : "开启"}
        多例模式
      </Button>
      <Button type="primary" onClick={showToasts}>
        依次展示 Toast
      </Button>
    </Space>
  );
}
