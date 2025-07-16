import { ShopO } from "@react-vant-next/icons";
import { Grid } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <Grid gutter={10}>
      {Array.from({ length: 8 }, (_, i) => (
        <Grid.Item key={i} icon={<ShopO />} text="文字" />
      ))}
    </Grid>
  );
};
