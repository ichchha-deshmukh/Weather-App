import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { selectActiveCount } from "../Navigation/slice";
import { useSelector } from "react-redux";

const CARD_WIDTH = 184;
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    overflow: "hidden",
  },
  innerWrapper: {
    transition: "transform 1s",
  },
  paper: {
    height: 200,
    width: CARD_WIDTH - theme.spacing(2),
    fontSize: 20,
    textAlign: "left",
    padding: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    transition: "transform 1s",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function WeatherCards() {
  const cards = [0, 1, 2, 3, 4];
  const classes = useStyles();

  const activeCount = useSelector(selectActiveCount);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        wrap="nowrap"
        className={classes.innerWrapper}
        style={{
          transform: `translateX(${activeCount * -CARD_WIDTH + CARD_WIDTH}px)`,
        }}
      >
        {cards.map((value, index) => (
          <Grid key={value} item>
            <Paper
              className={classes.paper}
              elevation={index === activeCount ? 7 : 0}
              style={{
                transform: `scale(${index === activeCount ? 1.1 : 1})`,
              }}
            >
              Temp: <br />
              <br /> Date: <br /> <br />
              {value}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
