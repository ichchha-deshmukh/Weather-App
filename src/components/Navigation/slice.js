import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "navigation",
  initialState: {
    activeCount: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.activeCount = Math.min(state.activeCount + 1, 4);
    },
    decrementCount: (state) => {
      state.activeCount = Math.max(state.activeCount - 1, 0);
    },
  },
});

export const { incrementCount, decrementCount } = slice.actions;

export const selectActiveCount = (state) => state.navigation.activeCount;

export default slice.reducer;
