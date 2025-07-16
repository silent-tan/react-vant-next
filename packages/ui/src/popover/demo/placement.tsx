import type { PopoverInstance, PopoverPlacement } from "@react-vant-next/ui";
import { Cell, Picker, Popover, Popup, Toast } from "@react-vant-next/ui";
import { useRef, useState } from "react";

const popupActions = [{ text: "选项一" }, { text: "选项二" }];

const placements = [
  "top",
  "top-start",
  "top-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
] as PopoverPlacement[];

export default function PlacementExample() {
  const popover = useRef<PopoverInstance>(null);
  const [visible, setVisible] = useState(false);
  const [placement, updatePlacement] = useState(placements[0]);

  const select = option => Toast.info(option.text);

  const onPickerChange = (plc) => {
    updatePlacement(plc);
    setTimeout(() => popover.current.show(), 0);
  };
  return (
    <>
      <Cell title="选择弹出位置" onClick={() => setVisible(true)} isLink />
      <Popup round position="bottom" visible={visible} onClose={() => setVisible(false)}>
        <div style={{ display: "flex", justifyContent: "center", margin: "110px 0" }}>
          <Popover
            ref={popover}
            theme="dark"
            actions={popupActions}
            onSelect={select}
            placement={placement}
            reference={
              <div style={{ width: 60, height: 60, backgroundColor: "#3f45ff", borderRadius: 8 }} />
            }
          />
        </div>
        <Picker showToolbar={false} columns={placements} onChange={onPickerChange} />
      </Popup>
    </>
  );
};
