import { KanaTableCharacter } from '@/abstractions/KanaCharacter';
import { useKanaType } from '../../context/KanaTypeContext';
import { useTableSection } from '../../context/TableSectionContext';
import useAppSelector from '@/hooks/redux/useAppSelector';

const TableCell = ({
  column,
  character,
}: {
  column: number;
  character: KanaTableCharacter | undefined;
}) => {
  const kanaType = useKanaType();
  const tableSection = useTableSection();

  const columnSelection = useAppSelector(
    (state) =>
      state.kanaTableSelectedColumnsReducer.value[kanaType!][tableSection!],
  );

  const isSelectedCharacter = (key: number) => columnSelection[key];

  return (
    <td className="p-1 max-w-min">
      {character && (
        <div
          className={`flex flex-col p-2 ${
            isSelectedCharacter(column) ? 'bg-violet-300' : 'bg-white'
          } bg-opacity-50 border rounded-xl`}
        >
          <div className="flex-1 text-center line-height-20">
            {character.kana}
          </div>
          <div className="flex-1 text-center line-height-20 bg-teal-100">
            {character.romaji}
          </div>
        </div>
      )}
    </td>
  );
};

export default TableCell;
