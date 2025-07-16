import { Cell, List } from "@react-vant-next/ui";
import { useState } from "react";
import { getData } from "./utils";
import "./style.less";

// 基础用法
export default function BaseDemo() {
  const [list, setList] = useState<Array<number>>([]);
  const [finished, setFinished] = useState<boolean>(false);

  const onLoad = async () => {
    const data = await getData();
    setList(v => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };
  return (
    <List finished={finished} onLoad={onLoad}>
      {list.map((_, i) => (
        <Cell key={i} title={i + 1} />
      ))}
    </List>
  );
}
