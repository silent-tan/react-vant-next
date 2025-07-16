import { useSetState } from "@react-vant-next/hooks";
import { Field, NumberKeyboard } from "@react-vant-next/ui";

function BindValueExample() {
  const [state, set] = useSetState({
    visible: false,
    value: "",
  });
  return (
    <>
      <Field
        label="双向绑定"
        value={state.value}
        readOnly
        onClick={() => set({ visible: true })}
      />
      <NumberKeyboard
        value={state.value}
        visible={state.visible}
        maxlength={6}
        onChange={v => set({ value: v })}
        onBlur={() => set({ visible: false })}
      />
    </>
  );
}

export default BindValueExample;
