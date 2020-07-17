import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { selectActiveCount } from "../Navigation/slice";
import { showData } from "../Weather/slice";
import { selectTemperatureUnit } from "../TemperatureConverter/slice";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();
  const activeCount = useSelector(selectActiveCount);
  const data = useSelector(showData);
  const currentUnit = useSelector(selectTemperatureUnit);

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
        {data.slice(0, 5).map((value, index) => (
          <Grid key={value} item>
            <Paper
              className={classes.paper}
              elevation={index === activeCount ? 7 : 0}
              style={{
                transform: `scale(${index === activeCount ? 1.1 : 1})`,
              }}
            >
              <Typography variant="title" gutterBottom>
                Temp:
              </Typography>
              <div>
                {currentUnit === "Fahrenheit"
                  ? Math.round(value[0].main.temp) + "°F"
                  : Math.round(
                      ((Math.round(value[0].main.temp) - 32) * 5) / 9
                    ) + "°C"}
              </div>
              <br />
              <Typography variant="title" gutterBottom>
                Date:
              </Typography>
              <div>
                {new Date(value[0].dt_txt).toLocaleString("en", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
