import React from "react";
import Navigation from "../Navigation";
import WeatherCards from "../WeatherCards";
import BarChart from "../BarChart";

export default function Forecast() {
  return (
    <>
      <Navigation />
      <WeatherCards />
      <BarChart />
    </>
  );
}
