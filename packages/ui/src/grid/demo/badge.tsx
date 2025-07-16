import { HomeO, Search } from "@react-vant-next/icons";
import { Grid } from "@react-vant-next/ui";
import React from "react";

export default () => {
  return (
    <Grid columnNum={2}>
      <Grid.Item icon={<HomeO />} text="文字" badge={{ dot: true }} />
      <Grid.Item icon={<Search />} text="文字" badge={{ content: "99+" }} />
    </Grid>
  );
};
