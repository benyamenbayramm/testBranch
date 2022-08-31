import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      const cartItems = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItems.amount = cartItems.amount + 1;
      state.amount = state.amount + 1;
    },
    decrease: (state, action) => {
      const cartItems = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItems.amount = cartItems.amount - 1;
      state.amount = state.amount - 1;
    },
    calculateAmount: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((el) => {
        total += el.amount * el.price;
        amount += el.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const { clearCart, removeItem, decrease, increase, calculateAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
