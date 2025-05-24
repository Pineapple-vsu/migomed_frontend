// features/accessibility/accessibilitySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSpecialMode: false,
  scriptsLoaded: false,
};

const accessibilitySlice = createSlice({
  name: "accessibility",
  initialState,
  reducers: {
    toggleSpecialMode: (state) => {
      state.isSpecialMode = !state.isSpecialMode;
    },
    setScriptsLoaded: (state, action) => {
      state.scriptsLoaded = action.payload;
    },
  },
});

export const { toggleSpecialMode, setScriptsLoaded } =
  accessibilitySlice.actions;
export default accessibilitySlice.reducer;
