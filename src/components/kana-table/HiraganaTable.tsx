'use client';

import { hiraganaTableCharactersArray } from '@/constants/characters/hiraganaCharacters';
import { hiraganaTableSectionNames } from '@/constants/kanaTable';
import { KanaTypeProvider } from './context/KanaTypeContext';
import KanaTable from './KanaTable';

const HiraganaTable = () => (
  <KanaTypeProvider initialValue="hiragana">
    <KanaTable
      kanaTableCharactersArray={hiraganaTableCharactersArray}
      kanaTableSectionNames={hiraganaTableSectionNames}
    />
  </KanaTypeProvider>
);

export default HiraganaTable;
