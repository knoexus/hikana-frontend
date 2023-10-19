'use client';

import { useContext } from 'react';
import { ComponentProps } from '@/abstractions/ComponentProps';
import useCompleteProvider from '@/hooks/context/useCompleteProvider';
import CompleteContextFactory from '@/utilities/context/completeContextFactory';

const initialValue: string[] = [];

const [SelectedKanaCharactersContext, SelectedKanaCharactersUpdateContext] =
  CompleteContextFactory.create(initialValue);

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
