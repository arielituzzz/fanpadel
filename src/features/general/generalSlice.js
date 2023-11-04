import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: { latitude: null, longitude: null },
  selectionFind: null,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setSelectionFind: (state, action) => {
      state.selectionFind = action.payload;
    },
    // setLocation: (state, action) => {
    //   if (!state.location.latitude || !state.location.longitude) {
    //     state.location.latitude = action.payload.latitude;
    //     state.location.longitude = action.payload.longitude;
    //   }
    // },
  },
});

export const { setSelectionFind } = generalSlice.actions;

export default generalSlice.reducer;
