import { configureStore } from "@reduxjs/toolkit";
import tempConverterSlice from "../components/TemperatureConverter/slice";
import navigationSlice from "../components/Navigation/slice";

export default configureStore({
  reducer: {
    tempConverter: tempConverterSlice,
    navigation: navigationSlice,
  },
});
