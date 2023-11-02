import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import { useMemo } from 'react';
import { mapKanaToRomaji, getMatchingKanaSubstring } from '@/utilities/kana';
import { findLastCharIndexOfMatchingSubstrings } from '@/utilities/string';
import { Word } from '@/types/Word';

const useEndHighlightingAtIndex = ({
  currentWord,
}: {
  currentWord: Word;
}): number => {
  const kanaType = useKanaTypeFromPath();
  const { currentWordInput } = useAppSelector((state) => state.gameReducer);

  const currentWordKanaToRomajiArr = useMemo(
    () => mapKanaToRomaji(currentWord.kana, kanaType),
    [currentWord, kanaType],
  );

  const { matchingKanaString } = getMatchingKanaSubstring(
    currentWordInput,
    currentWordKanaToRomajiArr,
  );

  return findLastCharIndexOfMatchingSubstrings(
    currentWord.kana,
    matchingKanaString,
  );
};

export default useEndHighlightingAtIndex;
