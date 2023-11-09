'use client';

import { TableSectionProps } from '@/components/kana-table/types/KanaTableProps';
import { useMemo } from 'react';
import { useTableSection } from '../../context/TableSectionContext';
import TableSectionColumnSelector from './TableSectionColumnSelector';
import TableSectionCharacters from './TableSectionCharacters';
import {
  filterBySection,
  getMaxRowAndColumn,
} from '@/utilities/kanaTableCharacters';
import { TableSection } from '@/types/KanaCharacter';

const TableSection = ({ kanaTableCharactersArray }: TableSectionProps) => {
  const tableSection = useTableSection();

  const tableSectionCharacters = useMemo(
    () =>
      filterBySection(kanaTableCharactersArray, tableSection as TableSection),
    [tableSection, kanaTableCharactersArray],
  );

  const [maxRowArray, maxColumnArray] = useMemo((): [null[], null[]] => {
    const [maxRow, maxColumn] = getMaxRowAndColumn(tableSectionCharacters);

    return [Array(maxRow + 1).fill(null), Array(maxColumn + 1).fill(null)];
  }, [tableSectionCharacters]);

  return (
    <div className="overflow-x-scroll mt-4">
      <table className="w-full">
        <tbody>
          <TableSectionCharacters
            characters={tableSectionCharacters}
            rowInitializer={maxRowArray}
            columnInitializer={maxColumnArray}
          />
          <TableSectionColumnSelector columnInitializer={maxColumnArray} />
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
