import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { KanaRomaji } from '@/utilities/kana';
import KanaCharacter from './KanaCharacter';

const KanaWordBase = ({
  kanaToRomajiArr,
  endHighlightingAtIndex = -1,
}: {
  kanaToRomajiArr: KanaRomaji[];
  endHighlightingAtIndex?: number;
}) => {
  const { doCharacterTips } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  return (
    <div className="mt-6">
      {kanaToRomajiArr.map(({ kana }, idx) => {
        const enableHighlighting = idx <= endHighlightingAtIndex;
        const enableTooltip = doCharacterTips && !enableHighlighting;

        return (
          <KanaCharacter
            key={idx}
            enableHighlighting={enableHighlighting}
            enableTooltip={enableTooltip}
            kana={kana}
          />
        );
      })}
    </div>
  );
};

export default KanaWordBase;
