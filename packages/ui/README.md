English | [简体中文](https://github.com/silentlee/react-vant-next/blob/main/packages/ui/README.zh-CN.md)

<p align="center">
    <img alt="logo" src="https://cdn.jsdelivr.net/gh/3lang3/react-vant@main/public/logo.svg" width="200" style="margin-bottom: 10px;">
</p>

<h1 align="center">React Vant Next</h1>

<p align="center">📱 A mobile component library based on the <strong>React</strong> framework according to <a href="https://github.com/youzan/vant">Vant</a>. Next generation fork.</p>

<p align="center">
  <a href="https://npmjs.org/package/react-vant-next" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/v/react-vant-next/latest?style=flat-square" alt="npm version" />
  </a>
  <a href="https://npmjs.org/package/react-vant-next" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/dm/react-vant-next.svg?style=flat-square" alt="npm download" />
  </a>
  <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square" alt="renovate" />
  <a href="https://github.com/silentlee/react-vant-next/discussions" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square" alt="discussions" />
  </a>
  <a href="https://github.com/silentlee/react-vant-next/discussions" target="_blank" referrerpolicy="no-referrer">
    <img src="https://img.shields.io/npm/l/react-vant-next?style=flat-square" alt="license" />
  </a>
</p>

<p align="center">
  🌈 <a href="https://github.com/silentlee/react-vant-next">GitHub</a>
</p>

## 🧑‍💻 Project Status

This is a fork of the original react-vant project, which has entered maintenance mode. This fork aims to continue development and add new features while maintaining compatibility with the original project.

## ✨ Feature

- 🚀 The average component size is less than 1KB（min+gzip）.
- 💎 70+ high-quality components, covering mainstream mobile scenes.
- 💪 Written in TypeScript, providing a complete type definition.
- 📝 Provide complete documentation and component examples.
- 🎨 Support theme customization, built-in 700+ theme designers.
- 😎 Support on-demand import and Tree Shaking.
- ⚡️ Support [Vite](https://github.com/3lang3/react-vant-template/tree/main/template/vite) and Parcel@2.
- 🌵 Modern browsers
- 🌝 Support SSR([nextjs](https://github.com/3lang3/react-vant-template/tree/main/next/nextjs), [remix](https://github.com/3lang3/react-vant-template/tree/main/next/remix)).

## 🖥 Environment Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/a94987f29719142668cdf960b3f624ce1a3c6aa8/src/safari-ios/safari-ios.svg" alt="Safari for iOS" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- | --- | --- | --- |

Support modern browsers and Chrome >= 51, iOS >= 10.0.

## 📱 Preview

Scan the QR code on your mobile phone to access the demo:

<img src="https://github.com/3lang3/react-vant/blob/main/public/preview_qrcode.png?raw=true" width="200" />

## 📦 Install

Recommended **pin** version:

```bash
# npm
npm i @react-vant-next/ui --save

# pnpm
pnpm add @react-vant-next/ui
```

## 🚀 Quick start

The following are some code examples of react-vant:

#### Code Snippet:

```jsx
import { Button } from "@react-vant-next/ui";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

function App() {
  return <Button>Default Button</Button>;
}

createRoot(mountNode).render(<App />);
```

For more information, please refer to the documentation in the repository.

## 🙏 Thanks

[Vant](https://github.com/youzan/vant) - Thanks to the Vant team for years of continuous maintenance, allowing me to stand on the shoulders of giants.

[Zan Design](https://design.youzan.com/) - Thanks for the careful production of YouZan Design Experience Center.

## 📜 License

[MIT](./LICENSE) ⓒ silentlee
