import { useWords } from '@/components/game/context/WordsContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import KanaWordWithHighlighting from './KanaWordWithHighlighting';
import KanaWordBase from './KanaWordBase';
import useKanaToRomajiArr from './hooks/useKanaToRomajiArr';

const KanaWord = () => {
  const words = useWords();
  const { currentWordIndex } = useAppSelector((state) => state.gameReducer);
  const currentWord = words[currentWordIndex];

  const { shouldHighlightCorrectSequence } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );

  const kanaToRomajiArr = useKanaToRomajiArr(currentWord);

  return shouldHighlightCorrectSequence ? (
    <KanaWordWithHighlighting kanaToRomajiArr={kanaToRomajiArr} />
  ) : (
    <KanaWordBase kanaToRomajiArr={kanaToRomajiArr} />
  );
};

export default KanaWord;
