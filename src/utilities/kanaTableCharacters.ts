import { KanaTableCharacter, TableSection } from '@/abstractions/KanaCharacter';
import { SectionColumnSelection } from '@/redux/features/kanaTableSelectedColumnsSlice';

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
  characters: KanaTableCharacter[],
  sectionColumnSelection: SectionColumnSelection,
): string[] =>
  characters.reduce(
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
