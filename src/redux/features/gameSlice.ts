import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    isOn: false,
  },
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameIsOn: (
      state: typeof initialState,
      action: PayloadAction<boolean>,
    ) => ({
      ...state,
      value: {
        ...state.value,
        isOn: action.payload,
      },
    }),
  },
});

export const { setGameIsOn } = game.actions;
export default game.reducer;
