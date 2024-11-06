import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  index: number;
}

const initialState: IinitialState = {
  index: 0,
};

const indexSlice = createSlice({
  name: "indexSlice",
  initialState,
  reducers: {
    changeIndex: (state) => {
      state.index += 1;
    },
    resetIndex: (state) => {
      state.index = 0;
    },
  },
});

export const { actions, reducer } = indexSlice;
