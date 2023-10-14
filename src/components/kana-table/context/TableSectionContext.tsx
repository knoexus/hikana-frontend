'use client';

import { TableSection } from '@/abstractions/KanaCharacterDescription';
import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { ComponentProps } from '@/abstractions/ComponentProps';

export const TableSectionContext = createContext<TableSection | null>(null);
export const TableSectionUpdateContext = createContext<Dispatch<
  SetStateAction<TableSection>
> | null>(null);

export const useTableSection = () => useContext(TableSectionContext);
export const useTableSectionUpdate = () =>
  useContext(TableSectionUpdateContext);

export const TableSectionProvider = ({ children }: ComponentProps) => {
  const [tableSection, setTableSection] = useState<TableSection>('Base');

  return (
    <TableSectionContext.Provider value={tableSection}>
      <TableSectionUpdateContext.Provider value={setTableSection}>
        {children}
      </TableSectionUpdateContext.Provider>
    </TableSectionContext.Provider>
  );
};
