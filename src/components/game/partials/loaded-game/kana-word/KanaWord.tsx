import { useWords } from '@/components/game/context/WordsContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import KanaWordWithHighlighting from './KanaWordWithHighlighting';
import KanaWordBase from './KanaWordBase';

const KanaWord = () => {
  const words = useWords();
  const { currentWordIndex } = useAppSelector((state) => state.gameReducer);
  const currentWord = words[currentWordIndex];
  const kanaSymbolArr = currentWord.kana.split('');

  const { shouldHighlightCorrectSequence } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );

  return shouldHighlightCorrectSequence ? (
    <KanaWordWithHighlighting
      currentWord={currentWord}
      kanaSymbolArr={kanaSymbolArr}
    />
  ) : (
    <KanaWordBase kanaSymbolArr={kanaSymbolArr} />
  );
};

export default KanaWord;
