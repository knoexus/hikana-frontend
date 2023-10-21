import { TableSectionCharactersProps } from '../../abstractions/KanaTableProps';
import TableCell from './TableCell';
import { getCharacterPropsByTableProps } from '@/utilities/kanaTableCharacters';

const TableSectionCharacters = ({
  rowInitializer,
  columnInitializer,
  characters,
}: TableSectionCharactersProps) => (
  <>
    {rowInitializer.map((_, mrIdx) => (
      <tr key={mrIdx}>
        {columnInitializer.map((_, mcIdx) => (
          <TableCell
            key={mcIdx}
            column={mcIdx}
            character={getCharacterPropsByTableProps(characters, mrIdx, mcIdx)}
          />
        ))}
      </tr>
    ))}
  </>
);

export default TableSectionCharacters;
