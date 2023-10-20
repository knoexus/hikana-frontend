'use client';
// Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.

import { hiraganaTableCharactersArray } from '@/constants/characters/hiraganaCharacters';
import { hiraganaTableSectionNames } from '@/constants/kanaTable';
import KanaTable from './KanaTable';

const HiraganaTable = () => (
  <KanaTable
    kanaTableCharactersArray={hiraganaTableCharactersArray}
    kanaTableSectionNames={hiraganaTableSectionNames}
  />
);

export default HiraganaTable;
