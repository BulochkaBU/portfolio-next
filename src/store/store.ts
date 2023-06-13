"use client";
import { configureStore } from "@reduxjs/toolkit";

import themeAppSlice from "@/components/services/themeAppSlice";

const store = configureStore({
  reducer: {
    themeAppSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
