'use client';

import {
  useTableSection,
  useTableSectionUpdate,
} from '../context/TableSectionContext';
import { TableSection } from '@/abstractions/KanaCharacter';
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
    <div className="inline-flex [&>*:not(:first-child)]:ml-2">
      {kanaTableSectionNames.map((_tableSection: string, idx: number) => (
        <button
          onClick={(e) => onTableSectionClick(e, _tableSection as TableSection)}
          className={`${
            tableSection === _tableSection && 'bg-gray-300'
          } border rounded-xl px-2 py-1`}
          key={idx}
        >
          {_tableSection}
        </button>
      ))}
    </div>
  );
};

export default TableSectionToggler;
