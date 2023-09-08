import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./api";
import { myReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [myReducer.name]: myReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
