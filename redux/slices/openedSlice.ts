import { createSlice } from "@reduxjs/toolkit";
import { studentType } from "../../utils/studentType";

interface IGuessedCharacter extends studentType {
  attempts: number;
  guessed?: true;
}

interface IinitialState {
  guessedCharacters: IGuessedCharacter[];
}

const initialState: IinitialState = {
  guessedCharacters: [],
};

export const openedSlice = createSlice({
  name: "openedSlice",
  initialState,
  reducers: {
    successAttempt: (state, { payload }: { payload: studentType }) => {
      const existingCharacterIndex = state.guessedCharacters!.findIndex(
        (character) => character.id === payload.id
      );
      if (existingCharacterIndex === -1) {
        state.guessedCharacters!.push({
          ...payload,
          attempts: 1,
          guessed: true,
        });
      } else {
        state.guessedCharacters[existingCharacterIndex].attempts += 1;
        state.guessedCharacters[existingCharacterIndex].guessed = true;
      }
    },
    failAttempt: (state, { payload }: { payload: studentType }) => {
      const existingCharacterIndex = state.guessedCharacters!.findIndex(
        (character) => character.id === payload.id
      );

      if (existingCharacterIndex === -1) {
        state.guessedCharacters!.push({ ...payload, attempts: 1 });
      } else {
        state.guessedCharacters![existingCharacterIndex].attempts += 1;
      }
    },
    resetCharacters: (state) => {
      state.guessedCharacters = [];
    },
  },
});

export const { reducer, actions } = openedSlice;
