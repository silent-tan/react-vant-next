[English](https://github.com/silentlee/react-vant-next/blob/main/packages/ui/README.md) | 简体中文

<p align="center">
    <img alt="logo" src="https://cdn.jsdelivr.net/gh/3lang3/react-vant@main/public/logo.svg" width="200" style="margin-bottom: 10px;">
</p>

<h1 align="center">React Vant Next</h1>

<p align="center">📱 一个参照<a href="https://github.com/youzan/vant">Vant</a>打造的 React 框架移动端组件库。下一代分支版本。</p>

<p align="center">
  <a href="https://npmjs.org/package/@react-vant-next/ui" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/v/@react-vant-next/ui/latest?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/@react-vant-next/ui" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/dm/@react-vant-next/ui.svg?style=flat-square" alt="npm download" />
  </a>
  <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square" alt="renovate" />
  <a href="https://github.com/silentlee/react-vant-next/discussions" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square" alt="discussions" />
  </a>
  <a href="https://github.com/silentlee/react-vant-next/discussions" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/l/@react-vant-next/ui?style=flat-square" alt="license" />
  </a>
</p>

<p align="center">
  🌈 <a href="https://github.com/silentlee/react-vant-next">GitHub</a>
</p>

## 🧑‍💻 项目状态

这是原始 react-vant 项目的一个分支，原项目已进入维护模式。这个分支施在继续开发并添加新功能，同时保持与原项目的兼容性。

## ✨ 特性

- 🚀 组件平均体积小于 1KB（min+gzip）.
- 💎 70+ 个高质量组件，覆盖移动端主流场景.
- 💪 使用 TypeScript 编写，提供完整的类型定义.
- 📝 提供完善的文档和组件示例.
- 🎨 支持主题定制，内置 700+ 个主题变量.
- 😎 支持按需引入和 Tree Shaking.
- ⚡️ 支持 [Vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite)和 Parcel@2.
- 🌵 现代浏览器
- 🌝 支持 SSR([nextjs](https://github.com/3lang3/react-vant-template/tree/main/next/nextjs), [remix](https://github.com/3lang3/react-vant-template/tree/main/next/remix)).

## 🖥 环境支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/a94987f29719142668cdf960b3f624ce1a3c6aa8/src/safari-ios/safari-ios.svg" alt="Safari for iOS" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |

支持现代浏览器和 Chrome >= 51，iOS >= 10.0。

## 📱 预览

手机扫描上的二维码访问演示：

<img src="https://github.com/3lang3/react-vant/blob/main/public/preview_qrcode.png?raw=true" width="200" />

<details>
  <summary>查看部分截图</summary>
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/c6034f01-b534-4e01-9b43-d28259ea77ea.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/b8c56952-943b-4e8e-b4cb-274d5ac62f7b.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/20a5ea40-6470-4156-b244-a4cbd8cef9d2.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/9cd23768-e2d5-45c7-b80b-be6367c157b9.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/87f8d07c-bdeb-46de-b64a-eaf78f062c6a.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/e8cf6bdd-96b3-4d89-84af-606ab443a6fd.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/02abb81a-4c80-4468-815f-b11076b16524.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/ecf39bd8-f933-4f62-89b2-574845696bc0.png" width="200" />
  <img src="https://pic.stackoverflow.wiki/uploadImages/222/66/151/135/2021/11/17/17/17/6e2800b6-1675-467d-be48-f5e876c19e0f.png" width="200" />
</details>

## 📦 安装

推荐 **锁定** 版本:

```bash
# npm
npm i @react-vant-next/ui -S -E

# pnpm
pnpm i @react-vant-next/ui -S -E
```

## 🚀 快速开始

以下是 react-vant 的一些代码示例：

#### 代码片段:

```jsx
import { Button } from "@react-vant-next/ui";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

function App() {
  return <Button>Default Button</Button>;
}

createRoot(mountNode).render(<App />);
```

更多信息请参考仓库中的文档。

## 注意

### 触摸事件模拟

这是一个面向移动端的组件库，因此默认只适配了移动端设备，这意味着组件只监听了移动端的 touch 事件，没有监听桌面端的 mouse 事件。

如果你需要在桌面端使用，可以引入我们提供的 @vant/touch-emulator，这个库会在桌面端自动将 mouse 事件转换成对应的 touch 事件，使得组件能够在桌面端使用。



```bash
# 安装模块
npm i @vant/touch-emulator -S
```

```tsx
// 引入模块后自动生效
import '@vant/touch-emulator';
```

### 底部安全区适配

iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行安全区适配。部分组件提供了 safeAreaInsetTop 或 safeAreaInsetBottom 属性，设置该属性后，即可在对应的机型上开启适配，如下示例：

```tsx
// 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>

// 开启顶部安全区适配
<Navbar safeAreaInsetTop />

// 开启底部安全区适配
<NumberKeyboard safeAreaInsetBottom />
```

## 🤝 贡献

阅读我们的贡献指南，让我们一起构建更好的 `react-vant`。

我们欢迎所有贡献。 请先阅读我们的 CONTRIBUTING.md 文件。 您可以将任何想法作为拉取请求或作为 GitHub 问题提交 😃。

## 🙏 鸣谢

[Vant](https://github.com/youzan/vant) - Thanks to the Vant team for years of continuous maintenance, allowing me to stand on the shoulders of giants.

[Zan Design](https://design.youzan.com/) - Thanks for the careful production of YouZan Design Experience Center.

## 📜 许可证

[MIT](./LICENSE) ⓒ silentlee
