import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userSlice from "../features/user/userSlice";
import shiftsSlice from "../features/shifts/shiftsSlice";
// import { shopApi } from "../services/shopApi";
// import { authApi } from "../services/authApi";
// import shopSlice from "../features/shop/shopSlice";
// import cartSlice from "../features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    shifts: shiftsSlice,
    // shop: shopSlice,
    // cart: cartSlice,
    // [shopApi.reducerPath]: shopApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
