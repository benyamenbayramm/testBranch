import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartSlice";
import modelSlice from "../reducers/modelSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    model: modelSlice,
  },
});
export default store;
