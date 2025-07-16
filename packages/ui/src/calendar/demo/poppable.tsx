import { Calendar, Toast } from "@react-vant-next/ui";

const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}`;

export default () => {
  return (
    <Calendar
      style={{ height: 500 }}
      showConfirm={false}
      poppable={false}
      onConfirm={(v) => {
        Toast.info(formatDate(v));
      }}
    />
  );
};
