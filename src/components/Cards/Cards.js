import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.scss";

const Info = ({ data: { date, confirmed, deaths, recovered } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Zainfekowani
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Liczba Przypadków Covi-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
              Wyzdrowiałych
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Liczba wyzdrowiałych z Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Śmierci
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(date).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Liczba przypadków śmnierternych Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Info;
