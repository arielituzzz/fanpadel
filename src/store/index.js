import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userSlice from "../features/user/userSlice";
import shiftsSlice from "../features/shifts/shiftsSlice";
import generalSlice from "../features/general/generalSlice";
import { clubsApi } from "../services/clubsApi";
// import { shopApi } from "../services/shopApi";
// import { authApi } from "../services/authApi";
// import shopSlice from "../features/shop/shopSlice";
// import cartSlice from "../features/cart/cartSlice";
const store = configureStore({
  reducer: {
    general: generalSlice,
    user: userSlice,
    shifts: shiftsSlice,
    [clubsApi.reducerPath]: clubsApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
    // shop: shopSlice,
    // cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
    getDefaultMiddleware().concat(clubsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
