import { useWords } from '@/components/game/context/WordsContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import KanaWordWithHighlighting from './KanaWordWithHighlighting';
import KanaWordBase from './KanaWordBase';

const KanaWord = () => {
  const words = useWords();
  const { currentWordIndex } = useAppSelector((state) => state.gameReducer);
  const currentWord = words[currentWordIndex];
  const kanaArr = currentWord.kana.split('');

  const { shouldHighlightSequences } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );

  return shouldHighlightSequences ? (
    <KanaWordWithHighlighting currentWord={currentWord} kanaArr={kanaArr} />
  ) : (
    <KanaWordBase kanaArr={kanaArr} />
  );
};

export default KanaWord;
