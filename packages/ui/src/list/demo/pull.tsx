import { Cell, List, PullRefresh } from "@react-vant-next/ui";
import { useState } from "react";
import { getData } from "./utils";

import "./style.less";

// 下拉刷新
export default function PullRefreshDemo() {
  const [list, setList] = useState<Array<number>>([]);
  const [finished, setFinished] = useState<boolean>(false);

  const onLoadRefresh = async (isRefresh?) => {
    const data = await getData();
    setList((v) => {
      const newList = isRefresh ? data : [...v, ...data];
      if (newList.length >= 30) {
        setFinished(true);
      }
      return newList;
    });
  };

  const onRefresh = async () => {
    setFinished(false);
    await onLoadRefresh(1);
  };

  return (
    <PullRefresh onRefresh={onRefresh}>
      {/* List 组件可以与 PullRefresh 组件结合使用，实现下拉刷新的效果 */}
      <List finished={finished} onLoad={onLoadRefresh}>
        {list.map((_, i) => (
          <Cell key={i} title={i + 1} />
        ))}
      </List>
    </PullRefresh>
  );
}
