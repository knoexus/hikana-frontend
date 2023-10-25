import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: false,
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameIsOn: (
      state: typeof initialState,
      action: PayloadAction<boolean>,
    ) => {
      state.isOn = action.payload;
    },
  },
});

export const { setGameIsOn } = game.actions;
export default game.reducer;
