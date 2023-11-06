import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: true,
  token: null,
  localId: null,
  imageCamera: null,
  name: null,
  lastName: null,
  category: null,
  email: null,
  gender: null,
  update: null,
  location: { latitude: null, longitude: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        login: true,
        token: action.payload.idToken,
        localId: action.payload.localId,
      };
    },
    setDataUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        gender: action.payload.gender,
        email: action.payload.email,
        update: action.payload.update,
      };
    },

    clearUser: () => {
      return {
        login: null,
        token: null,
        localId: null,
        imageCamera: null,
        name: null,
        lastName: null,
        category: null,
        email: null,
        gender: null,
        update: null,
      };
    },
    setCameraImage: (state, action) => {
      return { ...state, imageCamera: action.payload };
    },
    setLocation: (state, action) => {
      return { ...state, location: action.payload };
    },
  },
});

export const { setUser, clearUser, setCameraImage, setDataUser, setLocation } =
  userSlice.actions;

export default userSlice.reducer;
