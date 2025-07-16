import { ShopO } from "@react-vant-next/icons";
import { Grid } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <Grid direction="horizontal" columnNum={3}>
      <Grid.Item icon={<ShopO />} text="文字" />
      <Grid.Item icon={<ShopO />} text="文字" />
      <Grid.Item icon={<ShopO />} text="文字" />
    </Grid>
  );
};
