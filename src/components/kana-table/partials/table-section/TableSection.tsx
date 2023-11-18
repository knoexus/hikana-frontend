'use client';

import { TableSectionProps } from '@/components/kana-table/types/KanaTableProps';
import { useMemo } from 'react';
import { useTableSection } from '../../context/TableSectionContext';
import TableSectionColumnSelector from './TableSectionColumnSelector';
import TableSectionCharacters from './TableSectionCharacters';
import { filterBySection } from '@/utilities/kanaTableCharacters';
import { TableSection } from '@/types/KanaCharacter';

const TableSection = ({ kanaTableCharactersArray }: TableSectionProps) => {
  const tableSection = useTableSection();

  const tableSectionCharacters = useMemo(
    () =>
      filterBySection(kanaTableCharactersArray, tableSection as TableSection),
    [tableSection, kanaTableCharactersArray],
  );

  return (
    <div className="overflow-x-scroll mt-4 pb-1.5">
      <table className="w-full">
        <tbody>
          <TableSectionCharacters characters={tableSectionCharacters} />
          <TableSectionColumnSelector characters={tableSectionCharacters} />
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
