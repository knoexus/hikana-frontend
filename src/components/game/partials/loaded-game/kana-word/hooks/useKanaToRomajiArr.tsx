import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import { useMemo } from 'react';
import { mapKanaToRomaji, KanaRomaji } from '@/utilities/kana';
import { Word } from '@/types/Word';

const useKanaToRomajiArr = (currentWord: Word): KanaRomaji[] => {
  const kanaType = useKanaTypeFromPath();

  return useMemo(
    () => mapKanaToRomaji(currentWord.kana, kanaType),
    [currentWord, kanaType],
  );
};

export default useKanaToRomajiArr;
