import { useWords } from '@/components/game/context/WordsContext';
import NextWordButton from './NextWordButton';
import FinishGameButton from './FinishGameButton';
import useAppSelector from '@/state/redux/hooks/useAppSelector';

const ProceedButton = () => {
  const { currentWordIndex } = useAppSelector((state) => state.gameReducer);
  const totalWordsCount = useWords().length;
  return currentWordIndex !== totalWordsCount - 1 ? (
    <NextWordButton />
  ) : (
    <FinishGameButton />
  );
};

export default ProceedButton;
