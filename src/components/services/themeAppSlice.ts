import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  themeColor: string;
}

const themeState: ThemeState = { themeColor: "light" };

const themeAppSlice = createSlice({
  name: "themeApp",
  initialState: themeState,
  reducers: {
    setColorTheme(state, action: PayloadAction<string>) {
      state.themeColor = action.payload;
    },
  },
});

export const { setColorTheme } = themeAppSlice.actions;
export default themeAppSlice.reducer;
