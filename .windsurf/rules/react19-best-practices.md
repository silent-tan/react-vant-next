---
trigger: model_decision
description: React 19 最佳实践迁移规则
---

# React 19 最佳实践迁移规则

## cloneElement API 替代方案

### 问题描述

在 React 19 中，`React.cloneElement` API 不再推荐使用。这个 API 通常用于克隆和修改 React 元素，但在新版本中应该使用更直接的方式来处理组件属性。

### 迁移前（旧代码模式）

```jsx
// 使用 React.cloneElement 克隆和修改元素
React.cloneElement(iconElement, {
  className: clsx(iconElement.props?.className, bem('icon', { disabled, full: isFull })),
  style: {
    ...iconElement.props?.style,
    color: disabled ? disabledColor : isFull ? color : voidColor,
    fontSize: size,
  },
})
```

### 迁移后（新代码模式）

```jsx
// 直接使用元素的 type 并传递修改后的 props
<iconElement.type
  {...iconElement.props as any}
  className={clsx((iconElement.props as any)?.className, bem("icon", { disabled, full: isFull }))}
  style={{
    ...(iconElement.props as any)?.style,
    color: disabled ? disabledColor : isFull ? color : voidColor,
    fontSize: size,
  }}
/>
```

## 其他 React 19 最佳实践

### 使用 useId 替代手动生成的 ID

#### 迁移前

```jsx
const id = `input-${Math.random().toString(36).substr(2, 9)}`
```

#### 迁移后

```jsx
import { useId } from 'react'

// 在组件内部
const id = useId()
```

### 使用 Fragment 的简写语法

#### 迁移前

```jsx
import React from 'react';

return (
  <React.Fragment>
    <Child1 />
    <Child2 />
  </React.Fragment>
);
```

#### 迁移后

```jsx
return (
  <>
    <Child1 />
    <Child2 />
  </>
);
```

### 使用函数组件和 Hooks 替代类组件

#### 迁移前

```jsx
class MyComponent extends React.Component {
  state = { count: 0 }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Clicked
        {' '}
        {this.state.count}
        {' '}
        times
      </button>
    )
  }
}
```

#### 迁移后

```jsx
import { useState } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked
      {' '}
      {count}
      {' '}
      times
    </button>
  )
}
```

### 使用 useEffect 清理函数

#### 迁移前

```jsx
useEffect(() => {
  const subscription = someAPI.subscribe()
  // 没有清理函数
}, [someAPI])
```

#### 迁移后

```jsx
useEffect(() => {
  const subscription = someAPI.subscribe()

  // 返回清理函数
  return () => {
    subscription.unsubscribe()
  }
}, [someAPI])
```
