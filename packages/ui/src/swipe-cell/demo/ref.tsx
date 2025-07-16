import type { SwipeCellInstance } from "@react-vant-next/ui";
import { Arrow, ArrowLeft, Cross } from "@react-vant-next/icons";
import { Button, Cell, Flex, SwipeCell } from "@react-vant-next/ui";
import { useRef } from "react";

export default function RefDemo() {
  const ref = useRef<SwipeCellInstance>(null);
  return (
    <div className="demo-swipe-cell">
      <SwipeCell
        ref={ref}
        leftAction={(
          <Button square type="primary">
            选择
          </Button>
        )}
        rightAction={(
          <Button square type="danger">
            删除
          </Button>
        )}
      >
        <Cell title="单元格" value="内容" />
      </SwipeCell>
      <br />
      <Flex justify="around">
        <Button icon={<ArrowLeft />} onClick={() => ref.current.open("left")}>
          左滑打开
        </Button>
        <Button icon={<Arrow />} onClick={() => ref.current.open("right")}>
          右滑打开
        </Button>
        <Button icon={<Cross />} onClick={() => ref.current.close()}>
          关闭
        </Button>
      </Flex>
    </div>
  );
};
