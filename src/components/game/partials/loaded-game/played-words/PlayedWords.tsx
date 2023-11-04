import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useWords } from '@/components/game/context/WordsContext';
import PlayedWord from './PlayedWord';

const PlayedWords = () => {
  const words = useWords();
  const { guesses, currentWordIndex } = useAppSelector(
    (state) => state.gameReducer,
  );
  return (
    words.length > 0 && (
      <div className="container mt-5 p-4 flex flex-row justify-center w-full overflow-x-scroll">
        {words.slice(0, currentWordIndex).map((word, idx) => (
          <PlayedWord key={idx} word={word} guess={guesses[idx]} />
        ))}
      </div>
    )
  );
};

export default PlayedWords;
