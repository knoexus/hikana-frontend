'use client';

import { KanaType } from '@/types/Word';
import useCompleteProvider, {
  ProviderPropsWithChildren,
} from '@/state/context/hooks/useCompleteProvider';
import ContextFactory from '@/state/context/factories/contextFactory';
import UseContextFactory from '@/state/context/factories/useContextFactory';

type ValueType = KanaType;

const KanaTypeContext = ContextFactory.createValueContext<ValueType>();

export const useKanaType =
  UseContextFactory.createUseValueContext<ValueType>(KanaTypeContext);

export const KanaTypeProvider = (props: ProviderPropsWithChildren<ValueType>) =>
  useCompleteProvider({
    props,
    valueContext: KanaTypeContext,
  });
