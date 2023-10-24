import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Syllables {
  doArbitraryAmount: boolean;
  amount: number;
  readonly minAmount: number;
  readonly maxAmount: number;
}

interface State {
  doCharacterTips: boolean;
  doSkips: boolean;
  syllables: Syllables;
}

const initialState: State = {
  doCharacterTips: false,
  doSkips: false,
  syllables: {
    doArbitraryAmount: false,
    amount: 10,
    minAmount: 0,
    maxAmount: 10,
  },
};

export const gameSettings = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    toggleDoCharacterTips: (state: State) => {
      state.doCharacterTips = !state.doCharacterTips;
    },
    toggleDoSkips: (state: State) => {
      state.doSkips = !state.doSkips;
    },
    toggleDoArbitraryAmountOfSyllables: (state: State) => {
      const { syllables } = state;
      syllables.doArbitraryAmount = !syllables.doArbitraryAmount;
    },
    setAmountOfSyllables: (state: State, action: PayloadAction<number>) => {
      state.syllables.amount = action.payload;
    },
  },
});

export const {
  toggleDoCharacterTips,
  toggleDoSkips,
  toggleDoArbitraryAmountOfSyllables,
  setAmountOfSyllables,
} = gameSettings.actions;
export default gameSettings.reducer;
