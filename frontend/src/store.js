import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./reducersAndActions.js/courseSlice";
import userSlice from "./reducersAndActions.js/userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    courseSlice: courseSlice,
  },
});
