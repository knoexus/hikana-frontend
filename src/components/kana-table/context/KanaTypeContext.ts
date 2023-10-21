'use client';

import { KanaType } from '@/abstractions/Word';
import useCompleteProvider, {
  ProviderPropsWithChildren,
} from '@/hooks/context/useCompleteProvider';
import ContextFactory from '@/utilities/context/contextFactory';
import UseContextFactory from '@/utilities/context/useContextFactory';

type ValueType = KanaType;

const KanaTypeContext = ContextFactory.createValueContext<ValueType>();

export const useKanaType =
  UseContextFactory.createUseValueContext<ValueType>(KanaTypeContext);

export const KanaTypeProvider = (props: ProviderPropsWithChildren<ValueType>) =>
  useCompleteProvider({
    props,
    valueContext: KanaTypeContext,
  });
