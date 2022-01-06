import React, { useState } from "react";
import {
  BaseLayout,
  SearchBox,
  RecoveredCasesCard,
  TotalCasesCard,
  DeathCasesCard,
} from "../../components";
import { Grid, Hidden } from "@material-ui/core";
import "./homeStyles.css";

export default function Home() {
  const [value, setValue] = useState<string | null>(null);

  console.log(value);

  return (
    <BaseLayout>
      <div className="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <SearchBox value={value} setValue={setValue} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TotalCasesCard data={value} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DeathCasesCard data={value} />
          </Grid>
          <Hidden only="xs">
            <Grid item sm={3} xs={false} />
          </Hidden>
          <Grid item xs={12} sm={6}>
            <RecoveredCasesCard data={value} />
          </Grid>
          <Grid item sm={3} xs={false} />
        </Grid>
      </div>
    </BaseLayout>
  );
}
