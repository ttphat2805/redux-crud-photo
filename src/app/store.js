import { configureStore } from "@reduxjs/toolkit";
import GoogleAuthReducer from "features/GoogleSlice";
import PhotoReducer from "features/Photo/photoSlice";

const rootReducer = {
  photos: PhotoReducer,
  auth: GoogleAuthReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
