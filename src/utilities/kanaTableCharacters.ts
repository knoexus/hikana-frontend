import { hiraganaTableCharactersArray } from '@/constants/characters/hiraganaCharacters';
import { katakanaTableCharactersArray } from '@/constants/characters/katakanaCharacters';
import { KanaType } from '@/types/Word';
import { KanaTableCharacter, TableSection } from '@/types/KanaCharacter';
import { SectionColumnSelection } from '@/state/redux/features/kanaTableSelectedColumnsSlice';

export const filterBySection = (
  tableSectionCharacters: KanaTableCharacter[],
  tableSection: TableSection,
) =>
  tableSectionCharacters.filter(
    ({ tableProps: { section } }) => section === tableSection,
  );

export const getMaxRowAndColumn = (
  tableSectionCharacters: KanaTableCharacter[],
): [number, number] => {
  let maxRow = 0;
  let maxColumn = 0;

  tableSectionCharacters.forEach(
    ({
      tableProps: {
        position: { row, column },
      },
    }) => {
      if (row > maxRow) {
        maxRow = row;
      }
      if (column > maxColumn) {
        maxColumn = column;
      }
    },
  );
  return [maxRow, maxColumn];
};

export const getCharacterPropsByTableProps = (
  characters: KanaTableCharacter[],
  tableRow: number,
  tableColumn: number,
): KanaTableCharacter | undefined =>
  characters.find(
    ({
      tableProps: {
        position: { row, column },
      },
    }) => row === tableRow && column === tableColumn,
  );

export const getKanaCharacterStringsBySectionColumnSelection = (
  type: KanaType,
  sectionColumnSelection: SectionColumnSelection,
): string[] => {
  const characters =
    type === 'hiragana'
      ? hiraganaTableCharactersArray
      : katakanaTableCharactersArray;
  return characters.reduce(
    (acc: string[], { kana, tableProps }: KanaTableCharacter) => {
      const {
        section,
        position: { column },
      } = tableProps;
      if (sectionColumnSelection[section][column]) {
        return [...acc, kana];
      }
      return acc;
    },
    [],
  );
};
