'use client';
// Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.

import { hiraganaCharacters } from '@/constants/characters/hiraganaCharacters';
import { hiraganaTableSectionNames } from '@/constants/kanaTable';
import KanaTable from '../kana-table/KanaTable';

const HiraganaTable = () => (
  <KanaTable
    kanaCharacters={hiraganaCharacters}
    kanaTableSectionNames={hiraganaTableSectionNames}
  />
);

export default HiraganaTable;
