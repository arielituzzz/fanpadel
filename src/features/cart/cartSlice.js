import { createSlice } from "@reduxjs/toolkit";

const name = "cart";
const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
        existingProduct.price += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
        });
      }
      state.totalAmount += action.payload.price;
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.items.splice(index, 1);
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
