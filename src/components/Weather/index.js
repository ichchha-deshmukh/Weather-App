import React, { useEffect, useState } from "react";
import TemperatureConverter from "../TemperatureConverter";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Forecast from "../Forecast";
import Loading from "../Loading";

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
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    getWeatherForecast().then((weatherData) => {
      console.log("data", weatherData);
      setWeatherData(weatherData);
    });
  }, []);

  return (
    <Container maxWidth="sm" className={classes.root}>
      {weatherData ? (
        <>
          <TemperatureConverter />
          <Forecast data={weatherData} />
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

function getWeatherForecast() {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`
  ).then((response) => response.json());
}
