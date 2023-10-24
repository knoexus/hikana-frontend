import { useTableSection } from '../../context/TableSectionContext';
import { useKanaType } from '../../context/KanaTypeContext';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { toggleColumnSelection } from '@/redux/features/kanaTableSelectedColumnsSlice';
import { TableSection } from '@/abstractions/KanaCharacter';

const TableSectionColumnSelector = ({
  columnInitializer,
}: {
  columnInitializer: null[];
}) => {
  const kanaType = useKanaType();
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
