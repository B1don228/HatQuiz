import { combineReducers } from "@reduxjs/toolkit";
import { studentsApi } from "../api/studentsApi";
import { reducer as triesReducer } from "../slices/triesSlice";
import { reducer as charachersReducer } from "../slices/openedSlice";
import { reducer as indexReducer } from "../slices/indexSlice";

export const reducers = combineReducers({
  triesReducer: triesReducer,
  charachersReducer: charachersReducer,
  indexReducer: indexReducer,
  [studentsApi.reducerPath]: studentsApi.reducer,
});

export type SelectorType = ReturnType<typeof reducers>;
