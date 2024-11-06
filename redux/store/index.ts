import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../reducers";
import { studentsApi } from "../api/studentsApi";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      studentsApi.middleware
    ),
});
