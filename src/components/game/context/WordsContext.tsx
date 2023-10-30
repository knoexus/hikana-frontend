'use client';

import useCompleteProvider, {
  ProviderPropsWithChildren,
} from '@/state/context/hooks/useCompleteProvider';
import ContextFactory from '@/state/context/factories/contextFactory';
import UseContextFactory from '@/state/context/factories/useContextFactory';
import { Word } from '@/types/Word';

type ValueType = Word[];

const WordContext = ContextFactory.createValueContext<ValueType>();

export const useWords =
  UseContextFactory.createUseValueContext<ValueType>(WordContext);

export const WordsProvider = (props: ProviderPropsWithChildren<ValueType>) =>
  useCompleteProvider({
    props,
    valueContext: WordContext,
  });
