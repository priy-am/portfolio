import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

export const appSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setDarkMode } = appSlice.actions;

export default appSlice.reducer;
