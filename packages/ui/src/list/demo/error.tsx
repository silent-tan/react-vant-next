import { Cell, List } from "@react-vant-next/ui";
import { useState } from "react";
import { getData } from "./utils";

import "./style.less";

// 错误提示
export default function ErrorDemo() {
  const [list, setList] = useState<Array<number>>([]);
  const [finished, setFinished] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const onLoad = async () => {
    setCount(v => v + 1);
    const data = await getData(count === 1);
    setList(v => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  return (
    <List
      finished={finished}
      errorText="请求失败，点击重新加载"
      onLoad={onLoad}
    >
      {/* 若 onLoad 抛出错误，将显示错误提示，用户点击错误提示后会重新触发 onLoad 事件 */}
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  );
}
