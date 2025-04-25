import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // Replace with your actual reducer file path

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Adjust this if needed
    }),
});

export default store;
