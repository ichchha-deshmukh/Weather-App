import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "weatherData",
  initialState: { data: null },
  reducers: {
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWeatherData } = slice.actions;

export const isDataLoaded = (state) => !!state.weatherData.data;

export const showData = (state) =>
  state.weatherData?.data?.list?.reduce?.((accumulator, current) => {
    if (accumulator.length > 0) {
      const lastDayWeathers = accumulator[accumulator.length - 1];
      const lastDay = new Date(lastDayWeathers[0].dt_txt).toDateString();
      if (lastDay === new Date(current.dt_txt).toDateString()) {
        lastDayWeathers.push(current);
      } else {
        accumulator.push([current]);
      }
    } else {
      accumulator.push([current]);
    }
    return accumulator;
  }, []);

export default slice.reducer;
