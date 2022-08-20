import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  infoUser: {},
};

const GoogleAuth = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignedIn = true;
      state.infoUser = action.payload;
    },
    signOut: (state, action) => {
      state.isSignedIn = false;
      state.infoUser = {};
    },
  },
});

const { reducer: GoogleAuthReducer, actions } = GoogleAuth;
export const { signIn, signOut } = actions;
export default GoogleAuthReducer;
