import React, { useEffect } from "react";
import TemperatureConverter from "../TemperatureConverter";
import Forecast from "../Forecast";
import Loading from "../Loading";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherData, isDataLoaded } from "./slice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "lightblue",
  },
}));

export default function Weather() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isWeatherDataLoaded = useSelector(isDataLoaded);
  useEffect(() => {
    getWeatherForecast().then((weatherData) => {
      dispatch(setWeatherData(weatherData));
    });
  }, [dispatch]);

  return (
    <Container maxWidth="sm" className={classes.root}>
      {isWeatherDataLoaded ? (
        <>
          <TemperatureConverter />
          <Forecast />
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

function getWeatherForecast() {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=imperial&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`
  ).then((response) => response.json());
}
