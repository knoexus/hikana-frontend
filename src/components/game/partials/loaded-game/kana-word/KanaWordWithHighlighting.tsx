import useEndHighlightingAtIndex from './hooks/useEndHighlightingAtIndex';
import KanaWordBase from './KanaWordBase';
import { KanaRomaji } from '@/utilities/kana';

const KanaWordWithHighlighting = ({
  kanaToRomajiArr,
}: {
  kanaToRomajiArr: KanaRomaji[];
}) => {
  const endHighlightingAtIndex = useEndHighlightingAtIndex(kanaToRomajiArr);
  return (
    <KanaWordBase
      kanaToRomajiArr={kanaToRomajiArr}
      endHighlightingAtIndex={endHighlightingAtIndex}
    />
  );
};

export default KanaWordWithHighlighting;
