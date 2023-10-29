import { Word } from '@/types/Word';
import useAppSelector from '@/state/redux/hooks/useAppSelector';

const KanaWord = ({ words }: { words: Word[] }) => {
  const currentWordIndex = useAppSelector(
    (state) => state.gameReducer.currentWordIndex,
  );
  return <div>{words[currentWordIndex].kana}</div>;
};

export default KanaWord;
