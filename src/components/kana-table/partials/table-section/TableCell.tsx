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
      <div className="min-w-[56px]">
        {character && (
          <div
            className={`p-2 flex flex-col overflow-hidden bg-opacity-50 border rounded-xl ${
              isSelectedCharacter(column) ? 'bg-violet-300' : 'bg-white'
            }`}
          >
            <div className="text-center">{character.kana}</div>
            <div className="text-center bg-teal-100">{character.romaji}</div>
          </div>
        )}
      </div>
    </td>
  );
};

export default TableCell;
