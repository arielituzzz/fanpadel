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
    // setShiftSelected: (state, action) => {
    //   state.shiftSelected = action.payload;
    // },
    // setShiftSelection: (state, action) => {
    //   state.shiftSelection = action.payload;
    // },
  },
});

export const { setClubs } = generalSlice.actions;

export default generalSlice.reducer;