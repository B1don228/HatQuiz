import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  total: number;
  success: number;
  failed: number;
}

const initialState: IinitialState = {
  failed: 0,
  success: 0,
  total: 0,
};

const triesSlice = createSlice({
  name: "tries",
  initialState,
  reducers: {
    successAnswer: (state) => {
      state.total += 1;
      state.success += 1;
    },
    failedAnswer: (state) => {
      state.total += 1;
      state.failed += 1;
    },
    resetAnswers: (state) => {
      state.failed = 0;
      state.success = 0;
      state.total = 0;
    },
  },
});

export const { reducer, actions } = triesSlice;
