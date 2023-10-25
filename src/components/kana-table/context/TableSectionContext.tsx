'use client';

import useCompleteProvider, {
  ProviderPropsWithChildren,
} from '@/state/context/hooks/useCompleteProvider';
import ContextFactory from '@/state/context/factories/contextFactory';
import UseContextFactory from '@/state/context/factories/useContextFactory';

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
