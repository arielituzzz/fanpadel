import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories";
import dataProducts from "../../data/dataProducts";

const initialState = {
  categories: dataCategories,
  products: dataProducts,
  productsFilteredbyeCategory: [],
  categorySelected: null,
  productIdSelected: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
