import { useWords } from '@/components/game/context/WordsContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';

const KanaWord = () => {
  const words = useWords();
  const currentWordIndex = useAppSelector(
    (state) => state.gameReducer.currentWordIndex,
  );
  return <div>{words[currentWordIndex].kana}</div>;
};

export default KanaWord;
