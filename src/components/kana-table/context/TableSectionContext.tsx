'use client';

import { useContext } from 'react';
import { ComponentProps } from '@/abstractions/ComponentProps';
import useCompleteProvider from '@/hooks/context/useCompleteProvider';
import CompleteContextFactory from '@/utilities/context/completeContextFactory';

const initialValue = 'Base';

const [TableSectionContext, TableSectionUpdateContext] =
  CompleteContextFactory.create(initialValue);

export const useTableSection = () => useContext(TableSectionContext);
export const useTableSectionUpdate = () =>
  useContext(TableSectionUpdateContext);

export const TableSectionProvider = ({ children }: ComponentProps) =>
  useCompleteProvider({
    initialValue,
    valueContext: TableSectionContext,
    valueUpdateContext: TableSectionUpdateContext,
    children,
  });
