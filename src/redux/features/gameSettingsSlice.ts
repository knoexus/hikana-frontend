import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Syllables {
  doArbitraryAmount: boolean;
  amount: number;
  readonly minAmount: number;
  readonly maxAmount: number;
}

interface StateValue {
  doCharacterTips: boolean;
  doSkips: boolean;
  syllables: Syllables;
}

interface State {
  value: StateValue;
}

const initialState: State = {
  value: {
    doCharacterTips: false,
    doSkips: false,
    syllables: {
      doArbitraryAmount: false,
      amount: 10,
      minAmount: 0,
      maxAmount: 10,
    },
  },
};

export const gameSettings = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    toggleDoCharacterTips: (state: State) => ({
      ...state,
      value: {
        ...state.value,
        doCharacterTips: !state.value.doCharacterTips,
      },
    }),
    toggleDoSkips: (state: State) => ({
      ...state,
      value: {
        ...state.value,
        doSkips: !state.value.doSkips,
      },
    }),
    toggleDoArbitraryAmountOfSyllables: (state: State) => ({
      ...state,
      value: {
        ...state.value,
        syllables: {
          ...state.value.syllables,
          doArbitraryAmount: !state.value.syllables.doArbitraryAmount,
        },
      },
    }),
    setAmountOfSyllables: (state: State, action: PayloadAction<number>) => ({
      ...state,
      value: {
        ...state.value,
        syllables: {
          ...state.value.syllables,
          amount: action.payload,
        },
      },
    }),
  },
});

export const {
  toggleDoCharacterTips,
  toggleDoSkips,
  toggleDoArbitraryAmountOfSyllables,
  setAmountOfSyllables,
} = gameSettings.actions;
export default gameSettings.reducer;
