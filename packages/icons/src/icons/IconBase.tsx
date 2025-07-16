import React from "react"

function kebabCase(str: string): string {
  return str
    .substring(3)
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "")
}

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  /** 是否开启旋转动画 */
  spin?: boolean
  /** 图标旋转角度 */
  rotate?: number
  /** 自定义图标名 */
  name?: string
  style?: React.CSSProperties
  className?: string
  ref?: React.RefObject<SVGSVGElement>
}

function IconBase({ ref, ...props }: IconBaseProps) {
  const {
    name = "",
    className,
    style,
    spin,
    rotate,
    tabIndex,
    onClick,
    children,
    ...restProps
  } = props
  const svgStyle = {} as any
  if (rotate) {
    svgStyle.msTransform = `rotate(${rotate}deg)`
    svgStyle.transform = `rotate(${rotate}deg)`
  }

  const kebabCaseName = name ? kebabCase(name) : undefined

  let iconTabIndex = tabIndex
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1
  }

  const attrs = {
    "role": "img",
    "aria-label": kebabCaseName,
    "focusable": "false",
    "data-icon": kebabCaseName,
    "aria-hidden": "true",
    "preserveAspectRatio": "xMidYMid meet",
    ref,
    "tabIndex": iconTabIndex,
    onClick,
    "className": [
      "rv-icon",
      kebabCaseName ? `rv-icon-${kebabCaseName}` : "",
      spin ? "rv-icon--spin" : "",
      className,
    ]
      .join(" ")
      .trim(),
    "style": { ...style, ...svgStyle },
    ...restProps,
  }

  // 在 React 19 中使用 JSX 语法创建元素，避免使用 cloneElement
  if (!React.isValidElement(children)) {
    return null
  }

  const childElement = children as React.ReactElement
  // 使用 JSX 语法直接创建新元素，确保类型安全
  return (
    <childElement.type {...(childElement.props as object)} {...attrs} />
  )
}

export default IconBase
