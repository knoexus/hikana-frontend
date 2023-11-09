'use client';

import {
  useTableSection,
  useTableSectionUpdate,
} from '../context/TableSectionContext';
import { TableSection } from '@/types/KanaCharacter';
import { MouseEvent } from 'react';
import { TableSectionTogglerProps } from '../types/KanaTableProps';

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
    <div className="inline-flex [&>*:not(:first-child)]:ml-2 max-w-full overflow-x-scroll">
      {kanaTableSectionNames.map((_tableSection: string, idx: number) => (
        <button
          onClick={(e) => onTableSectionClick(e, _tableSection as TableSection)}
          className={`${
            tableSection === _tableSection && 'bg-gray-300'
          } border rounded-xl px-2 py-1 min-w-[120px] overflow-hidden`}
          key={idx}
        >
          {_tableSection}
        </button>
      ))}
    </div>
  );
};

export default TableSectionToggler;
