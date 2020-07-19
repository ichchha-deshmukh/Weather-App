import React, { useMemo, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { selectActiveCount } from "../Navigation/slice";
import { showData } from "../Weather/slice";
import { selectTemperatureUnit } from "../TemperatureConverter/slice";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BarChart from "../BarChart";

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
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const activeCount = useSelector(selectActiveCount);
  const data = useSelector(showData);
  const currentUnit = useSelector(selectTemperatureUnit);

  const getTemperature = useCallback(
    ({ tempInFahrenheit, withUnit = false }) => {
      const temp =
        currentUnit === "Fahrenheit"
          ? Math.round(tempInFahrenheit)
          : Math.round(((Math.round(tempInFahrenheit) - 32) * 5) / 9);
      return withUnit
        ? `${temp} ${currentUnit === "Fahrenheit" ? `°F` : "°C"}`
        : temp;
    },
    [currentUnit]
  );

  const chartData = useMemo(() => {
    return data[activeCount].map((w) => {
      return [
        getHourwithAMPM(w.dt_txt),
        getTemperature({ tempInFahrenheit: w.main.temp }),
      ];
    });
  }, [data, activeCount, getTemperature]);

  return (
    <>
      <Grid container className={classes.root}>
        <Grid
          container
          wrap="nowrap"
          className={classes.innerWrapper}
          style={{
            transform: `translateX(${
              activeCount * -CARD_WIDTH +
              CARD_WIDTH -
              (isMobileScreen ? CARD_WIDTH / 2 + theme.spacing(2) : 0)
            }px)`,
          }}
        >
          {data.slice(0, 5).map((value, index) => (
            <Grid key={index} item>
              <Paper
                className={classes.paper}
                elevation={index === activeCount ? 7 : 0}
                style={{
                  transform: `scale(${index === activeCount ? 1.1 : 1})`,
                }}
              >
                <Typography component="h1" variant="h6" gutterBottom>
                  Temp:
                </Typography>
                <div>
                  {getTemperature({
                    tempInFahrenheit: value[0].main.temp,
                    withUnit: true,
                  })}
                </div>
                <br />
                <Typography component="h1" variant="h6" gutterBottom>
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
      <BarChart chartData={chartData} />
    </>
  );
}

function getHourwithAMPM(dateInput) {
  var d = new Date(dateInput);
  return new Intl.DateTimeFormat("default", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  }).format(d);
}
