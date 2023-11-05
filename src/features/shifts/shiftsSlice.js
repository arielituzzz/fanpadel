import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: { latitude: null, longitude: null },
  shiftSelected: null,
  shiftSelection: null,
};

export const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    setShiftSelected: (state, action) => {
      state.shiftSelected = action.payload;
    },
    setShiftSelection: (state, action) => {
      state.shiftSelection = action.payload;
    },
    // setLocation: (state, action) => {
    //   if (!state.location.latitude || !state.location.longitude) {
    //     state.location.latitude = action.payload.latitude;
    //     state.location.longitude = action.payload.longitude;
    //   }
    // },
  },
});

export const { setShiftSelected, setShiftSelection } = shiftsSlice.actions;

export default shiftsSlice.reducer;
