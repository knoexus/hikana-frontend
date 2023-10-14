'use client';
// Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.

import { katakanaCharacters } from '@/constants/characters/katakanaCharacters';
import { katakanaTableSectionNames } from '@/constants/kanaTable';
import KanaTable from '../kana-table/KanaTable';

const KatakanaTable = () => (
  <KanaTable
    kanaCharacters={katakanaCharacters}
    kanaTableSectionNames={katakanaTableSectionNames}
  />
);

export default KatakanaTable;
