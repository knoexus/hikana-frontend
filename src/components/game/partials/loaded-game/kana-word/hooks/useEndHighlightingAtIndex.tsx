import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { getMatchingKanaSubstring, KanaRomaji } from '@/utilities/kana';

const useEndHighlightingAtIndex = (
  currentWordKanaToRomajiArr: KanaRomaji[],
): number => {
  const { currentWordInput } = useAppSelector((state) => state.gameReducer);

  return getMatchingKanaSubstring(currentWordInput, currentWordKanaToRomajiArr)
    .breakIndex;
};

export default useEndHighlightingAtIndex;
