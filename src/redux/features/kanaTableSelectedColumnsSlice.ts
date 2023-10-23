import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { hiraganaTableCharactersArray } from '@/constants/characters/hiraganaCharacters';
import { katakanaTableCharactersArray } from '@/constants/characters/katakanaCharacters';
import { KanaTableCharacter, TableSection } from '@/abstractions/KanaCharacter';

import {
  hiraganaTableSectionNames,
  katakanaTableSectionNames,
} from '@/constants/kanaTable';
import {
  filterBySection,
  getMaxRowAndColumn,
} from '@/utilities/kanaTableCharacters';
import { KanaType } from '@/abstractions/Word';

interface ColumnSelectionTogglePayload {
  kanaType: KanaType;
  tableSection: TableSection;
  column: number;
}

type ColumnSelection = { [key: number]: boolean };

export type SectionColumnSelection = { [key: string]: ColumnSelection };

const getInitialKanaSubState = (
  kanaTableSectionNames: string[],
  kanaTableCharactersArray: KanaTableCharacter[],
): SectionColumnSelection => {
  return kanaTableSectionNames.reduce(
    (acc: SectionColumnSelection, kanaTableSectionName: string) => {
      const sectionCharacters = filterBySection(
        kanaTableCharactersArray,
        kanaTableSectionName as TableSection,
      );
      const [_, maxColumn] = getMaxRowAndColumn(sectionCharacters);
      const columnSelection = Array(maxColumn + 1)
        .fill(null)
        .reduce(
          (acc: ColumnSelection, _, idx: number) => ({
            ...acc,
            [idx]: true,
          }),
          {},
        );
      return {
        ...acc,
        [kanaTableSectionName]: columnSelection,
      };
    },
    {},
  );
};

const initialState = {
  value: {
    hiragana: getInitialKanaSubState(
      hiraganaTableSectionNames,
      hiraganaTableCharactersArray,
    ),
    katakana: getInitialKanaSubState(
      katakanaTableSectionNames,
      katakanaTableCharactersArray,
    ),
  },
};

export const kanaCharacters = createSlice({
  name: 'kanaCharacters',
  initialState,
  reducers: {
    toggleColumnSelection: (
      state,
      action: PayloadAction<ColumnSelectionTogglePayload>,
    ) => {
      const { kanaType, tableSection, column } = action.payload;
      return {
        ...state,
        value: {
          ...state.value,
          [kanaType]: {
            ...state.value[kanaType],
            [tableSection]: {
              ...state.value[kanaType][tableSection],
              [column]: !state.value[kanaType][tableSection][column],
            },
          },
        },
      };
    },
  },
});

export const { toggleColumnSelection } = kanaCharacters.actions;
export default kanaCharacters.reducer;
