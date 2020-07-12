import React from "react";
import Radio from "@material-ui/core/Radio";
import { useSelector, useDispatch } from "react-redux";
import { changeTemperatureUnit, selectTemperatureUnit } from "./slice";

export default function TemperatureConverter() {
  const currentUnit = useSelector(selectTemperatureUnit);
  const dispatch = useDispatch();

  return (
    <div>
      <Radio
        checked={currentUnit === "Celcius"}
        onClick={() => dispatch(changeTemperatureUnit("Celcius"))}
        value="Celcius"
        name="radio-button-demo"
      />
      Celcius
      <Radio
        checked={currentUnit === "Fahrenheit"}
        onClick={() => dispatch(changeTemperatureUnit("Fahrenheit"))}
        value="Fahrenheit"
        name="radio-button-demo"
      />
      Fahrenheit
    </div>
  );
}
