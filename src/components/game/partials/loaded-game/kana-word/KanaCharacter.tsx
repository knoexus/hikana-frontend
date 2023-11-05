import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';
import { hiraganaCharacterTipsObject } from '@/constants/characters/hiraganaCharacters';
import { katakanaCharacterTipsObject } from '@/constants/characters/katakanaCharacters';
import Tooltip from '@/components/common/Tooltip';
import { useMemo } from 'react';

interface KanaCharacterProps {
  kana: string;
  enableHighlighting: boolean;
  enableTooltip: boolean;
}

const KanaCharacter = ({
  kana,
  enableHighlighting,
  enableTooltip,
}: KanaCharacterProps) => {
  const kanaType = useKanaTypeFromPath();

  const character = (
    <span
      className={`${
        enableHighlighting && 'text-green-500'
      } text-2xl font-medium`}
    >
      {kana}
    </span>
  );

  const tip: string | undefined = useMemo(() => {
    const kanaLookup =
      kanaType === 'hiragana'
        ? hiraganaCharacterTipsObject
        : katakanaCharacterTipsObject;
    const tips = kanaLookup[kana];
    if (tips) {
      return tips[Math.floor(Math.random() * tips.length)];
    }
    return tips;
  }, [kana, kanaType]);

  return enableTooltip && tip ? (
    <Tooltip text={tip}>{character}</Tooltip>
  ) : (
    character
  );
};

export default KanaCharacter;
