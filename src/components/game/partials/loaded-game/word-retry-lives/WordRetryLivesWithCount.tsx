import useAppSelector from '@/state/redux/hooks/useAppSelector';
import WordRetryLivesNoCount from './WordRetryLivesNoCount';

const WordRetryLivesWithCount = () => {
  const { retriesForCurrentWord } = useAppSelector(
    (state) => state.gameReducer,
  );
  return retriesForCurrentWord > 0 ? (
    <div>
      {Array(retriesForCurrentWord)
        .fill(<div>❤️</div>)
        .map((e) => e)}
    </div>
  ) : (
    <WordRetryLivesNoCount />
  );
};

export default WordRetryLivesWithCount;
