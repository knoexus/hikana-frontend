import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import hikanaApi, { getAllWordsCacheSelector } from '../apis/hikanaApi';

export interface Guess {
  input: string;
  wasCorrect: boolean;
}

interface State {
  isOn: boolean;
  isOver: boolean;
  currentWordIndex: number;
  currentWordInput: string;
  isCurrentWordInputCorrect: boolean;
  retriesForCurrentWord: number;
  correctGuessesCount: number;
  incorrectGuessesCount: number;
  guesses: Guess[];
}

const initialState: State = {
  isOn: false,
  isOver: false,
  currentWordIndex: 0,
  currentWordInput: '',
  isCurrentWordInputCorrect: false,
  retriesForCurrentWord: 1,
  correctGuessesCount: 0,
  incorrectGuessesCount: 0,
  guesses: [],
};

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameIsOn: (state, action: PayloadAction<boolean>) => {
      state.isOn = action.payload;
    },
    setGameIsOver: (state, action: PayloadAction<boolean>) => {
      state.isOver = action.payload;
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
    incrementCorrectGuessesCount: (state) => {
      state.correctGuessesCount = state.correctGuessesCount + 1;
    },
    incrementIncorrectGuessesCount: (state) => {
      state.incorrectGuessesCount = state.incorrectGuessesCount + 1;
    },
    addGuess: (state, action: PayloadAction<Guess>) => {
      state.guesses.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const preProceedToNextWord =
  (): ThunkAction<boolean, RootState, unknown, Action<unknown>> =>
  (dispatch, getState): boolean => {
    const state = getState();
    const words = getAllWordsCacheSelector(state);
    const { currentWordIndex, currentWordInput, retriesForCurrentWord } =
      state.gameReducer;
    const { doWordGuessRetries } = state.gameSettingsReducer;

    const isCurrentWordInputCorrect =
      words[currentWordIndex].romaji === currentWordInput;

    if (!isCurrentWordInputCorrect) {
      if (doWordGuessRetries && retriesForCurrentWord > 0) {
        dispatch(game.actions.decrementRetriesForCurrentWord());
        return true;
      }
      dispatch(game.actions.incrementIncorrectGuessesCount());
    } else {
      dispatch(game.actions.incrementCorrectGuessesCount());
    }
    dispatch(
      game.actions.addGuess({
        input: currentWordInput,
        wasCorrect: isCurrentWordInputCorrect,
      }),
    );
    dispatch(game.actions.resetCurrentWordInput());
    dispatch(game.actions.resetRetriesForCurrentWord());
    return false;
  };

export const proceedToNextWord =
  (): ThunkAction<void, RootState, unknown, Action<unknown>> => (dispatch) => {
    const wasWordRetryUsed = dispatch(preProceedToNextWord());
    if (!wasWordRetryUsed) {
      dispatch(game.actions.incrementCurrentWordIndex());
    }
  };

export const finishGame =
  (): ThunkAction<void, RootState, unknown, Action<unknown>> => (dispatch) => {
    const wasWordRetryUsed = dispatch(preProceedToNextWord());
    if (!wasWordRetryUsed) {
      dispatch(game.actions.setGameIsOver(true));
    }
  };

export const resetGameState =
  (): ThunkAction<void, RootState, unknown, Action<unknown>> => (dispatch) => {
    dispatch(game.actions.reset());
    dispatch(hikanaApi.util.resetApiState());
  };

export const restartGame =
  (): ThunkAction<void, RootState, unknown, Action<unknown>> => (dispatch) => {
    dispatch(resetGameState());
    dispatch(setGameIsOn(true));
  };

export const {
  setGameIsOn,
  setCurrentWordInput,
  setIsCurrentWordInputCorrect,
} = game.actions;
export default game.reducer;
