import { useWords } from '@/components/game/context/WordsContext';
import useAppSelector from '@/state/redux/hooks/useAppSelector';

const WordCounter = () => {
  const totalCount = useWords().length;
  const { currentWordIndex, correctGuessesCount, incorrectGuessesCount } =
    useAppSelector((state) => state.gameReducer);
  return (
    <div className="text-lg">
      <span>{currentWordIndex + 1}</span> of
      <span> {totalCount}</span> (
      <span className="text-green-500">{correctGuessesCount}</span>|
      <span className="text-red-500">{incorrectGuessesCount}</span>)
    </div>
  );
};

export default WordCounter;
