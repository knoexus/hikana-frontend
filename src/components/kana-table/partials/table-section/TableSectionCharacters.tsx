import { KanaTableCharacter } from '@/types/KanaCharacter';
import { useMaxRowColumnInitializer } from '../../context/MaxRowColumnInitializerProvider';
import TableCell from './TableCell';
import { getCharacterPropsByTableProps } from '@/utilities/kanaTableCharacters';

const TableSectionCharacters = ({
  characters,
}: {
  characters: KanaTableCharacter[];
}) => {
  const [rowInitializer, columnInitializer] = useMaxRowColumnInitializer();
  return (
    <>
      {rowInitializer.map((_, mrIdx) => (
        <tr key={mrIdx}>
          {columnInitializer.map((_, mcIdx) => (
            <TableCell
              key={mcIdx}
              column={mcIdx}
              character={getCharacterPropsByTableProps(
                characters,
                mrIdx,
                mcIdx,
              )}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableSectionCharacters;
