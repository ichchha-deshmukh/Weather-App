import React from "react";
import Radio from "@material-ui/core/Radio";
import { useSelector, useDispatch } from "react-redux";
import { changeTemperatureUnit, selectTemperatureUnit } from "./slice";
import { RadioGroup, FormControlLabel } from "@material-ui/core";
import "./style.css";

export default function TemperatureConverter() {
  const currentUnit = useSelector(selectTemperatureUnit);
  const dispatch = useDispatch();

  return (
    <RadioGroup
      name="temperatureUnit"
      value={currentUnit}
      onChange={(event) => dispatch(changeTemperatureUnit(event.target.value))}
      className="temperature-unit-wrapper"
    >
      <FormControlLabel value="Celcius" control={<Radio />} label="Celcius" />
      <FormControlLabel
        value="Fahrenheit"
        control={<Radio />}
        label="Fahrenheit"
      />
    </RadioGroup>
  );
}
