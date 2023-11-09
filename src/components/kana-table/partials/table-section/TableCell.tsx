import { KanaTableCharacter } from '@/types/KanaCharacter';
import { useTableSection } from '../../context/TableSectionContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';

const TableCell = ({
  column,
  character,
}: {
  column: number;
  character: KanaTableCharacter | undefined;
}) => {
  const kanaType = useKanaTypeFromPath();
  const tableSection = useTableSection();

  const columnSelection = useAppSelector(
    (state) => state.kanaTableSelectedColumnsReducer[kanaType][tableSection],
  );

  const isSelectedCharacter = (key: number) => columnSelection[key];

  return (
    <td className="p-1">
      {character && (
        <div
          className={`flex flex-col p-2 overflow-hidden min-w-[56px] ${
            isSelectedCharacter(column) ? 'bg-violet-300' : 'bg-white'
          } bg-opacity-50 border rounded-xl`}
        >
          <div className="text-center">{character.kana}</div>
          <div className="text-center bg-teal-100">{character.romaji}</div>
        </div>
      )}
    </td>
  );
};

export default TableCell;
