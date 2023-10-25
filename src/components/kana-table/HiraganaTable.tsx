'use client';

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
