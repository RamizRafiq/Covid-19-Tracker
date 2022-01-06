import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { GiGraveyard } from "react-icons/gi";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    color: "#0A067B",
  },
  icon: {
    color: "#0A067B",
  },
  value: {
    fontSize: 19,
    color: "#0A067B",
  },
  smallHeading: {
    fontSize: 16,
    color: "#0A067B",
    fontWeight: 500,
  },
});

function DeathCasesCard({ data }: any) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <GiGraveyard size={50} className={classes.icon} />
        <Typography
          className={classes.title}
          variant="h5"
          component="h2"
          gutterBottom
        >
          Total Deaths
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h5" component="h2" className={classes.value}>
              {data?.deaths || 0}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.smallHeading}>Today</Typography>
            <Typography className={classes.value}>
              {data?.todayDeaths || 0}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DeathCasesCard;
