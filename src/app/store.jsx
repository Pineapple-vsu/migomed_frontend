// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });
// src/app/store.js
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import accessibilityReducer from "../features/accessibility/accessibilitySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accessibility: accessibilityReducer,
  },
});
