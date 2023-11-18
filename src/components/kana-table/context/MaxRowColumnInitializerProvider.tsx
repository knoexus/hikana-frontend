'use client';

import useCompleteProvider, {
  ProviderPropsWithChildren,
} from '@/state/context/hooks/useCompleteProvider';
import ContextFactory from '@/state/context/factories/contextFactory';
import UseContextFactory from '@/state/context/factories/useContextFactory';

type ValueType = [null[], null[]];

const MaxRowColumnInitializerContext =
  ContextFactory.createValueContext<ValueType>();

export const useMaxRowColumnInitializer =
  UseContextFactory.createUseValueContext<ValueType>(
    MaxRowColumnInitializerContext,
  );

export const MaxRowColumnInitializerProvider = (
  props: ProviderPropsWithChildren<ValueType>,
) =>
  useCompleteProvider({
    props,
    valueContext: MaxRowColumnInitializerContext,
  });
