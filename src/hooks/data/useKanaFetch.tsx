import useBaseUrlFetch from './useBaseUrlFetch';
import { Word } from '@/types/Word';
import { Fetch } from '@/types/Fetch';

interface KanaFetch extends Omit<Fetch, 'data'> {
  data: Word[] | null;
}

export const useKanaFetch = (): KanaFetch => useBaseUrlFetch('words');
