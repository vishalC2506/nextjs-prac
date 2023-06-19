import { configureStore } from "@reduxjs/toolkit";
import navActionReducer from "./navAction";
export const store = configureStore({
    reducer: {
        navActionReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;    