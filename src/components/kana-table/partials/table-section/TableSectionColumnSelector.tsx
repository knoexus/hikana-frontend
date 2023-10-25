import { useTableSection } from '../../context/TableSectionContext';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { toggleColumnSelection } from '@/state/redux/features/kanaTableSelectedColumnsSlice';
import { TableSection } from '@/types/KanaCharacter';

const TableSectionColumnSelector = ({
  columnInitializer,
}: {
  columnInitializer: null[];
}) => {
  const kanaType = useKanaTypeFromPath();
  const tableSection = useTableSection();

  const dispatch = useAppDispatch();
  const columnSelection = useAppSelector(
    (state) => state.kanaTableSelectedColumnsReducer[kanaType][tableSection],
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
    <tr>
      {columnInitializer.map((_, idx) => (
        <td key={idx}>
          <input
            checked={columnSelection[idx]}
            type="checkbox"
            onChange={() => handleCheckboxOnChange(idx)}
          ></input>
        </td>
      ))}
    </tr>
  );
};

export default TableSectionColumnSelector;
