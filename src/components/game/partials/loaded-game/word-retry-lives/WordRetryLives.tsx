import useAppSelector from '@/state/redux/hooks/useAppSelector';
import WordRetryLivesWithCount from './WordRetryLivesWithCount';

const WordRetryLives = () => {
  const { doWordGuessRetries } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  return doWordGuessRetries && <WordRetryLivesWithCount />;
};

export default WordRetryLives;
