'use client';

import { TableSectionProps } from '@/components/kana-table/abstractions/KanaTableProps';
import { useMemo } from 'react';
import { useTableSection } from '../../context/TableSectionContext';
import TableSectionColumnSelector from './TableSectionColumnSelector';
import TableSectionCharacters from './TableSectionCharacters';
import {
  filterBySection,
  getMaxRowAndColumn,
} from '@/utilities/kanaTableCharacters';
import { TableSection } from '@/abstractions/KanaCharacter';

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
    <table className="w-full table-fixed">
      <tbody>
        <TableSectionCharacters
          characters={tableSectionCharacters}
          rowInitializer={maxRowArray}
          columnInitializer={maxColumnArray}
        />
        <TableSectionColumnSelector columnInitializer={maxColumnArray} />
      </tbody>
    </table>
  );
};

export default TableSection;
