import { configureStore } from "@reduxjs/toolkit";
import tempConverterSlice from "../components/TemperatureConverter/slice";

export default configureStore({
  reducer: {
    tempConverter: tempConverterSlice,
  },
});
