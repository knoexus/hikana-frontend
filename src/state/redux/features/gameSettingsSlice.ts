import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { upperCaseFirstLetter } from '@/utilities/string';

const difficultyLevels = ['low', 'medium', 'high'] as const;

export type DifficultyLevel = (typeof difficultyLevels)[number];

type DifficultyLevelSelectOptions = {
  name: string;
  value: DifficultyLevel;
};

const difficultyLevelsNameValue: DifficultyLevelSelectOptions[] =
  difficultyLevels.map((difficultyLevel) => ({
    name: upperCaseFirstLetter(difficultyLevel),
    value: difficultyLevel,
  }));

interface WordDifficulty {
  doCustomLevel: boolean;
  level: DifficultyLevel;
  levelSelectOptions: DifficultyLevelSelectOptions[];
}

interface State {
  doCharacterTips: boolean;
  shouldHighlightCorrectSequence: boolean;
  doWordGuessRetries: boolean;
  wordDifficulty: WordDifficulty;
}

const initialState: State = {
  doCharacterTips: false,
  shouldHighlightCorrectSequence: false,
  doWordGuessRetries: false,
  wordDifficulty: {
    doCustomLevel: false,
    level: 'high',
    levelSelectOptions: difficultyLevelsNameValue,
  },
};

export const gameSettings = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    toggleDoCharacterTips: (state: State) => {
      state.doCharacterTips = !state.doCharacterTips;
    },
    toggleShouldHighlightCorrectSequence: (state: State) => {
      state.shouldHighlightCorrectSequence =
        !state.shouldHighlightCorrectSequence;
    },
    toggleDoWordGuessRetries: (state: State) => {
      state.doWordGuessRetries = !state.doWordGuessRetries;
    },
    toggleDoCustomWordDifficultyLevel: (state: State) => {
      const { wordDifficulty } = state;
      wordDifficulty.doCustomLevel = !wordDifficulty.doCustomLevel;
    },
    setWordDifficultyLevel: (
      state: State,
      action: PayloadAction<DifficultyLevel>,
    ) => {
      state.wordDifficulty.level = action.payload;
    },
  },
});

export const {
  toggleDoCharacterTips,
  toggleShouldHighlightCorrectSequence,
  toggleDoWordGuessRetries,
  toggleDoCustomWordDifficultyLevel,
  setWordDifficultyLevel,
} = gameSettings.actions;
export default gameSettings.reducer;
