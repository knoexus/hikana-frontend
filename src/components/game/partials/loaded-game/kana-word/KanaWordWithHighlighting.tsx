import { Word } from '@/types/Word';
import useEndHighlightingAtIndex from './useEndHighlightingAtIndex';
import KanaWordBase from './KanaWordBase';

const KanaWordWithHighlighting = ({
  currentWord,
  kanaSymbolArr,
}: {
  currentWord: Word;
  kanaSymbolArr: string[];
}) => {
  const endHighlightingAtIndex = useEndHighlightingAtIndex({ currentWord });
  return (
    <KanaWordBase
      kanaSymbolArr={kanaSymbolArr}
      endHighlightingAtIndex={endHighlightingAtIndex}
    />
  );
};

export default KanaWordWithHighlighting;
