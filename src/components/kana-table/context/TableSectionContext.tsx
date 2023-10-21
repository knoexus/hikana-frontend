'use client';

import useCompleteProvider, {
  ProviderPropsWithChildren,
} from '@/hooks/context/useCompleteProvider';
import ContextFactory from '@/utilities/context/contextFactory';
import UseContextFactory from '@/utilities/context/useContextFactory';

type ValueType = string;

const [TableSectionContext, TableSectionUpdateContext] =
  ContextFactory.createCompleteContext<ValueType>();

export const [useTableSection, useTableSectionUpdate] =
  UseContextFactory.createUseCompleteContext<ValueType>(
    TableSectionContext,
    TableSectionUpdateContext,
  );

export const TableSectionProvider = (
  props: ProviderPropsWithChildren<ValueType>,
) =>
  useCompleteProvider({
    props,
    valueContext: TableSectionContext,
    valueUpdateContext: TableSectionUpdateContext,
  });
