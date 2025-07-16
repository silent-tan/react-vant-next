import { Arrow, ArrowLeft } from "@react-vant-next/icons";
import { Pagination } from "@react-vant-next/ui";
import { useState } from "react";

export default function CustomDemo() {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      value={page}
      onChange={setPage}
      totalItems={125}
      showPageSize={5}
      prevText={<ArrowLeft />}
      nextText={<Arrow />}
      pageRender={({ text }) => `${text} 😀`}
    />
  );
};
