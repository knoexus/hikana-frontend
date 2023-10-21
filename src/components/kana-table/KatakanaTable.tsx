'use client';

import { katakanaTableCharactersArray } from '@/constants/characters/katakanaCharacters';
import { katakanaTableSectionNames } from '@/constants/kanaTable';
import { KanaTypeProvider } from './context/KanaTypeContext';
import KanaTable from './KanaTable';

const KatakanaTable = () => (
  <KanaTypeProvider initialValue="katakana">
    <KanaTable
      kanaTableCharactersArray={katakanaTableCharactersArray}
      kanaTableSectionNames={katakanaTableSectionNames}
    />
  </KanaTypeProvider>
);

export default KatakanaTable;
