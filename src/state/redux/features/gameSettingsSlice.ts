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
  shouldHighlightSequences: boolean;
  doSkips: boolean;
  wordDifficulty: WordDifficulty;
}

const initialState: State = {
  doCharacterTips: false,
  shouldHighlightSequences: false,
  doSkips: false,
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
    toggleShouldHighlightSequences: (state: State) => {
      state.shouldHighlightSequences = !state.shouldHighlightSequences;
    },
    toggleDoSkips: (state: State) => {
      state.doSkips = !state.doSkips;
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
  toggleShouldHighlightSequences,
  toggleDoSkips,
  toggleDoCustomWordDifficultyLevel,
  setWordDifficultyLevel,
} = gameSettings.actions;
export default gameSettings.reducer;
