'use client';

import { ComponentProps } from '@/abstractions/ComponentProps';
import useCompleteProvider from '@/hooks/context/useCompleteProvider';
import CompleteContextFactory from '@/utilities/context/contextFactory';
import UseContextFactory from '@/utilities/context/useContextFactory';

const initialValue: string[] = [];

const [SelectedKanaCharactersContext, SelectedKanaCharactersUpdateContext] =
  CompleteContextFactory.createCompleteContext(initialValue);

export const [useSelectedKanaCharacters, useSelectedKanaCharactersUpdate] =
  UseContextFactory.createUseCompleteContext(
    SelectedKanaCharactersContext,
    SelectedKanaCharactersUpdateContext,
  );

export const SelectedKanaCharactersProvider = ({ children }: ComponentProps) =>
  useCompleteProvider({
    initialValue,
    valueContext: SelectedKanaCharactersContext,
    valueUpdateContext: SelectedKanaCharactersUpdateContext,
    children,
  });
