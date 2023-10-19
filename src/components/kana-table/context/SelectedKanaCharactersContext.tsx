'use client';

import { useContext } from 'react';
import { ComponentProps } from '@/abstractions/ComponentProps';
import useCompleteProvider from '@/hooks/context/useCompleteProvider';
import CompleteContextFactory from '@/utilities/context/factory';

const initialValue: string[] = [];

const [SelectedKanaCharactersContext, SelectedKanaCharactersUpdateContext] =
  CompleteContextFactory.createCompleteContext(initialValue);

export const useSelectedKanaCharacters = () =>
  useContext(SelectedKanaCharactersContext);
export const useSelectedKanaCharactersUpdate = () =>
  useContext(SelectedKanaCharactersUpdateContext);

export const SelectedKanaCharactersProvider = ({ children }: ComponentProps) =>
  useCompleteProvider({
    initialValue,
    valueContext: SelectedKanaCharactersContext,
    valueUpdateContext: SelectedKanaCharactersUpdateContext,
    children,
  });
