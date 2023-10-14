'use client';

import {
  useTableSection,
  useTableSectionUpdate,
} from '../context/TableSectionContext';
import { TableSection } from '@/abstractions/KanaCharacterDescription';
import { MouseEvent } from 'react';
import { TableSectionTogglerProps } from '../abstractions/KanaTableProps';

const TableSectionToggler = ({
  kanaTableSectionNames,
}: TableSectionTogglerProps) => {
  const tableSection = useTableSection();
  const tableSectionUpdate = useTableSectionUpdate();

  const onTableSectionClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    _tableSection: TableSection,
  ) => {
    e.preventDefault();
    tableSectionUpdate && tableSectionUpdate(_tableSection);
  };

  return (
    <div className="inline-flex">
      {kanaTableSectionNames.map((_tableSection: string, idx: number) => (
        <button
          onClick={(e) => onTableSectionClick(e, _tableSection as TableSection)}
          className={`ml-2 ${
            tableSection !== _tableSection && 'bg-gray-100'
          } border`}
          key={idx}
        >
          {_tableSection}
        </button>
      ))}
    </div>
  );
};

export default TableSectionToggler;
