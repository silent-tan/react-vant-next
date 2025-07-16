import type { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import "@react-vant-next/ui/index.css";

import "@vant/touch-emulator";

import "./base.less";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    viewport: {
      options: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: "Light",
          value: "#f6f8fc",
        },
        dark: {
          name: "Dark",
          value: "#1c1c1e",
        },
        white: {
          name: "White",
          value: "#ffffff",
        },
      },
      default: "light",
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    options: {
      storySort: {
        // method: "alphabetical",
        // order: [
        //   "Layout",
        //   ["Grid", "Flex", "Space", "Sticky", "Cell"],
        //   "Basic",
        //   [
        //     "ConfigProvider",
        //     "Button",
        //     "Typography",
        //     [
        //       "TypographyText",
        //       "TypographyTitle",
        //       "TypographyParagraph",
        //       "TypographyLink",
        //     ],
        //     "Image",
        //     "Popup",
        //     "Toast",
        //   ],
        //   "Components",
        //   "Form",
        //   "Icons",
        //   "Utils",
        // ],
      },
    },
    docs: {
      toc: true,
    },
  },
  initialGlobals: {
    viewport: { value: "iphone6", isRotated: false },
    backgrounds: { value: "light" },
  },
};

export default preview;
