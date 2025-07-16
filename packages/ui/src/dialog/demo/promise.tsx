import { Cell, Dialog } from "@react-vant-next/ui";

function PromiseDemo() {
  return (
    <>
      <Cell
        title="Dialog.alert"
        isLink
        onClick={async () => {
          await Dialog.alert({
            title: "标题",
            message: "代码是写出来给人看的，附带能在机器上运行",
          });
          console.log("confirm");
        }}
      />
      <Cell
        title="Dialog.confirm"
        isLink
        onClick={async () => {
          try {
            await Dialog.confirm({
              title: "标题",
              message: "代码是写出来给人看的，附带能在机器上运行",
            });
            console.log("confirm");
          }
          catch {
            console.log("cancel");
          }
        }}
      />
    </>
  );
}

export default PromiseDemo;
