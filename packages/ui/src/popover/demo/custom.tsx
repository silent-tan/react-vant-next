import type { PopoverInstance } from "@react-vant-next/ui";
import { PhotoO } from "@react-vant-next/icons";
import { Button, Grid, Popover } from "@react-vant-next/ui";
import React, { useRef } from "react";

export default function CustomContentExample() {
  const popover = useRef<PopoverInstance>(null);
  return (
    <>
      <Popover
        ref={popover}
        placement="top-start"
        reference={<Button type="primary">自定义内容</Button>}
      >
        <Grid square border={false} columnNum={3} style={{ width: 240 }}>
          {Array.from({ length: 6 }, (_, i) => (
            <Grid.Item
              onClick={() => popover.current?.hide()}
              key={i}
              icon={<PhotoO />}
              text="文字"
            />
          ))}
        </Grid>
      </Popover>
    </>
  );
};
