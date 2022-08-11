import { createSlice } from "@reduxjs/toolkit";
// import { increment } from "../action/actions";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 5,
  },
  reducers: {
    increment: (state) => {
        console.log(state,'s');
      state.count += 1;
    },
  },
});
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
