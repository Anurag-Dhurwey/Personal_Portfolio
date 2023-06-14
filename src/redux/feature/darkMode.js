import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const Dark_Mode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.value = !state.value;
    },
  },
});

export const { darkMode } = Dark_Mode.actions;

export default Dark_Mode.reducer;
