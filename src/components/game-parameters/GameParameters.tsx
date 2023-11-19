'use client';

import HiraganaTable from '@/components/kana-table/HiraganaTable';
import KatakanaTable from '@/components/kana-table/KatakanaTable';
import GameSettings from '@/components/game-settings/GameSettings';
import GamePlayButton from '@/components/game-play-button/GamePlayButton';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';

const GameParameters = () => {
  const KanaTable =
    useKanaTypeFromPath() === 'hiragana' ? HiraganaTable : KatakanaTable;

  return (
    <>
      <KanaTable />
      <GameSettings />
      <GamePlayButton />
    </>
  );
};

export default GameParameters;
