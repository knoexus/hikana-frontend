import { KanaTableCharacter } from '@/abstractions/KanaCharacter';
import { TableSectionCharactersProps } from '../../abstractions/KanaTableProps';
import TableCell from './TableCell';

const TableSectionCharacters = ({
  rowInitializer,
  columnInitializer,
  characters,
}: TableSectionCharactersProps) => {
  const getCharacterPropsByTableProps = (
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

  return (
    <>
      {rowInitializer.map((_, mrIdx) => (
        <tr key={mrIdx}>
          {columnInitializer.map((_, mcIdx) => (
            <TableCell
              key={mcIdx}
              character={getCharacterPropsByTableProps(mrIdx, mcIdx)}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableSectionCharacters;
