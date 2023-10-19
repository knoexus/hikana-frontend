'use client';

import { ComponentProps } from '@/abstractions/ComponentProps';
import useCompleteProvider from '@/hooks/context/useCompleteProvider';
import ContextFactory from '@/utilities/context/contextFactory';
import UseContextFactory from '@/utilities/context/useContextFactory';

const initialValue = 'Base';

const [TableSectionContext, TableSectionUpdateContext] =
  ContextFactory.createCompleteContext(initialValue);

export const [useTableSection, useTableSectionUpdate] =
  UseContextFactory.createUseCompleteContext(
    TableSectionContext,
    TableSectionUpdateContext,
  );

export const TableSectionProvider = ({ children }: ComponentProps) =>
  useCompleteProvider({
    initialValue,
    valueContext: TableSectionContext,
    valueUpdateContext: TableSectionUpdateContext,
    children,
  });
