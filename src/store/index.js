import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userSlice from "../features/user/userSlice";
import shiftsSlice from "../features/shifts/shiftsSlice";
import generalSlice from "../features/general/generalSlice";
import { clubsApi } from "../services/clubsApi";
import { authApi } from "../services/authApi";

const store = configureStore({
  reducer: {
    general: generalSlice,
    user: userSlice,
    shifts: shiftsSlice,
    [clubsApi.reducerPath]: clubsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clubsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
