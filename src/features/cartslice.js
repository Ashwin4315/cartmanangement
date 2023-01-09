import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:[],
  amount: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount=0
      state.total=0
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    removelast: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId.id);
      state.amount -=1
      state.total -=itemId.price
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount + 1;
      state.amount +=cartItem.amount
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount - 1;
      state.amount -=cartItem.amount

    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { add,removeItem,increase, decrease,calculateTotals,clearCart,removelast} = cartSlice.actions;
export default cartSlice.reducer;
 