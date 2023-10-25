'use client';

import { katakanaTableCharactersArray } from '@/constants/characters/katakanaCharacters';
import { katakanaTableSectionNames } from '@/constants/kanaTable';
import KanaTable from './KanaTable';

const KatakanaTable = () => (
  <KanaTable
    kanaTableCharactersArray={katakanaTableCharactersArray}
    kanaTableSectionNames={katakanaTableSectionNames}
  />
);

export default KatakanaTable;
