import type { CSSProperties } from "react";
import type { ConfigProviderProps } from "./PropsType";
import { kebabCase } from "@react-vant-next/utils";
import React, { useMemo } from "react";
import ConfigProviderContext, { INITIAL_STATE } from "./ConfigProviderContext";

function mapThemeVarsToCSSVars(
  themeVars: Record<string, string | number>,
  prefix: string,
) {
  const cssVars: Record<string, string | number> = {};
  Object.keys(themeVars).forEach((key) => {
    if (key.toString().startsWith(`--${prefix}-`)) {
      cssVars[key] = themeVars[key];
    }
    else {
      cssVars[`--${prefix}-${kebabCase(key)}`] = themeVars[key];
    }
  });
  return cssVars;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({
  className,
  style,
  themeVars = {},
  tag = "div",
  children,
  ...props
}) => {
  const TagElement = tag as React.ElementType;

  const varStyle = useMemo<CSSProperties | undefined>(() => {
    if (themeVars) {
      return { ...style, ...mapThemeVarsToCSSVars(themeVars, "rv") };
    }
    return style;
  }, [style, themeVars]);
  return (
    <ConfigProviderContext value={{ ...INITIAL_STATE, ...props }}>
      <TagElement className={className} style={varStyle}>
        {children}
      </TagElement>
    </ConfigProviderContext>
  );
};

export default ConfigProvider;
