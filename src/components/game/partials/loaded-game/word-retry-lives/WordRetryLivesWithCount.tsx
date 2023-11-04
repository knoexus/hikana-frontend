import useAppSelector from '@/state/redux/hooks/useAppSelector';

const WordRetryLivesWithCount = () => {
  const { retriesForCurrentWord } = useAppSelector(
    (state) => state.gameReducer,
  );
  return (
    retriesForCurrentWord > 0 && (
      <div className="absolute right-3 top-3 border rounded-xl py-1 px-2 flex flex-row">
        {Array(retriesForCurrentWord)
          .fill(<span className="px-0.5">❤️</span>)
          .map((e) => e)}
      </div>
    )
  );
};

export default WordRetryLivesWithCount;
