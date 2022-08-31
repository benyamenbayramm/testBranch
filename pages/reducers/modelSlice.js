import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
    },
    closed: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { open, closed } = modelSlice.actions;
export default modelSlice.reducer;
