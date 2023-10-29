import useAppSelector from '@/state/redux/hooks/useAppSelector';

const WordCounter = ({ totalCount }: { totalCount: number }) => {
  const currentWordIndex = useAppSelector(
    (state) => state.gameReducer.currentWordIndex,
  );
  return <div>{`${currentWordIndex + 1}/${totalCount}`}</div>;
};

export default WordCounter;
