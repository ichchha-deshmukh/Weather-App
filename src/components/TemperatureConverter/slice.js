import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "tempConverter",
  initialState: {
    currentUnit: "Fahrenheit",
  },
  reducers: {
    changeTemperatureUnit: (state, action) => {
      state.currentUnit = action.payload;
    },
  },
});

export const { changeTemperatureUnit } = slice.actions;

export const selectTemperatureUnit = (state) => state.tempConverter.currentUnit;

export default slice.reducer;
