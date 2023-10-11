import useBaseUrlFetch from './useBaseUrlFetch';
import { Word } from '@/abstractions/Word';
import { Fetch } from '@/abstractions/Fetch';

interface KanaFetch extends Omit<Fetch, 'data'> {
  data: Word[] | null;
}

export const useKanaFetch = (): KanaFetch => useBaseUrlFetch('words');
