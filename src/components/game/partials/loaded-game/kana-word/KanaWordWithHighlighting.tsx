import { Word } from '@/types/Word';
import useEndHighlightingAtIndex from './useEndHighlightingAtIndex';
import KanaWordBase from './KanaWordBase';

const KanaWordWithHighlighting = ({
  currentWord,
  kanaArr,
}: {
  currentWord: Word;
  kanaArr: string[];
}) => {
  const endHighlightingAtIndex = useEndHighlightingAtIndex({ currentWord });
  return (
    <KanaWordBase
      kanaArr={kanaArr}
      endHighlightingAtIndex={endHighlightingAtIndex}
    />
  );
};

export default KanaWordWithHighlighting;
