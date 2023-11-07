import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shiftsAvailable: [],
  shiftSelected: null,
  shiftSelection: null,
  shifts: [],
};

export const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    setShiftsAvailable: (state, action) => {
      state.shiftsAvailable = action.payload;
    },
    setShiftSelected: (state, action) => {
      state.shiftSelected = action.payload;
    },
    setShiftSelection: (state, action) => {
      state.shiftSelection = action.payload;
    },
  },
});

export const { setShiftSelected, setShiftSelection, setShiftsAvailable } =
  shiftsSlice.actions;

export default shiftsSlice.reducer;
