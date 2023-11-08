import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clubs: [],
};

export const generalSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    setClubs: (state, action) => {
      state.clubs = action.payload;
    },
  },
});

export const { setClubs } = generalSlice.actions;

export default generalSlice.reducer;
