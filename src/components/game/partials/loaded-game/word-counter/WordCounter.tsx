import { useWords } from '@/components/game/context/WordsContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';

const WordCounter = () => {
  const words = useWords();
  const totalCount = words.length;
  const currentWordIndex = useAppSelector(
    (state) => state.gameReducer.currentWordIndex,
  );
  return <div>{`${currentWordIndex + 1}/${totalCount}`}</div>;
};

export default WordCounter;