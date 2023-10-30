import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getAllWordsCacheSelector } from '../apis/hikanaApi';

const initialState = {
  isOn: false,
  currentWordIndex: 0,
  currentWordInput: '',
  isCurrentWordInputCorrect: false,
  retriesForCurrentWord: 1,
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameIsOn: (state, action: PayloadAction<boolean>) => {
      state.isOn = action.payload;
    },
    incrementCurrentWordIndex: (state) => {
      state.currentWordIndex = state.currentWordIndex + 1;
    },
    setCurrentWordInput: (state, action: PayloadAction<string>) => {
      state.currentWordInput = action.payload;
    },
    resetCurrentWordInput: (state) => {
      state.currentWordInput = '';
    },
    setIsCurrentWordInputCorrect: (state, action: PayloadAction<boolean>) => {
      state.isCurrentWordInputCorrect = action.payload;
    },
    decrementRetriesForCurrentWord: (state) => {
      state.retriesForCurrentWord = state.retriesForCurrentWord - 1;
    },
    resetRetriesForCurrentWord: (state) => {
      state.retriesForCurrentWord = initialState.retriesForCurrentWord;
    },
  },
});

export const proceedToNextWord =
  (): ThunkAction<void, RootState, unknown, Action<unknown>> =>
  (dispatch, getState) => {
    const state = getState();
    const words = getAllWordsCacheSelector(state);
    const { currentWordIndex, currentWordInput, retriesForCurrentWord } =
      state.gameReducer;
    const { doWordGuessRetries } = state.gameSettingsReducer;
    if (!(words[currentWordIndex].kana === currentWordInput)) {
      if (doWordGuessRetries && retriesForCurrentWord > 0) {
        dispatch(game.actions.decrementRetriesForCurrentWord());
        return;
      }
      // incrementWrongGuesses()
      // addWordToTableOfWords(fullWord!!!, 'incorrect')
    } else {
      // incrementWrongGuesses()
      // addWordToTableOfWords(fullWord!!!, 'incorrect')
    }
    dispatch(game.actions.incrementCurrentWordIndex());
    dispatch(game.actions.resetCurrentWordInput());
    dispatch(game.actions.resetRetriesForCurrentWord());
  };

export const {
  setGameIsOn,
  setCurrentWordInput,
  setIsCurrentWordInputCorrect,
} = game.actions;
export default game.reducer;
