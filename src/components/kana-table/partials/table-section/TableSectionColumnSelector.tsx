import { useTableSection } from '../../context/TableSectionContext';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { toggleColumnSelection } from '@/state/redux/features/kanaTableSelectedColumnsSlice';
import { KanaTableCharacter, TableSection } from '@/types/KanaCharacter';
import { useMaxRowColumnInitializer } from '../../context/MaxRowColumnInitializerProvider';
import { useMemo } from 'react';

const TableSectionColumnSelector = ({
  characters,
}: {
  characters: KanaTableCharacter[];
}) => {
  const kanaType = useKanaTypeFromPath();
  const tableSection = useTableSection();
  const [_, columnInitializer] = useMaxRowColumnInitializer();

  const dispatch = useAppDispatch();
  const columnSelection = useAppSelector(
    (state) => state.kanaTableSelectedColumnsReducer[kanaType][tableSection],
  );

  const occupiedColumns = useMemo(
    () =>
      new Set(
        characters.map(
          ({
            tableProps: {
              position: { column },
            },
          }) => column,
        ),
      ),
    [characters],
  );

  const handleCheckboxOnChange = (column: number) => {
    dispatch(
      toggleColumnSelection({
        kanaType,
        tableSection: tableSection as TableSection,
        column,
      }),
    );
  };

  return (
    <tr className="text-center">
      {columnInitializer.map((_, idx) => (
        <td key={idx}>
          {occupiedColumns.has(idx) && (
            <input
              className="mt-4 cursor-pointer"
              checked={columnSelection[idx]}
              type="checkbox"
              onChange={() => handleCheckboxOnChange(idx)}
            ></input>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableSectionColumnSelector;
