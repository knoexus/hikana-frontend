'use client';

import HiraganaTable from '@/components/kana-table/HiraganaTable';
import KatakanaTable from '../kana-table/KatakanaTable';
import GameSettings from '@/components/game-settings/GameSettings';
import GamePlayButton from '@/components/game-play-button/GamePlayButton';
import Game from '../game/Game';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import { useKanaTypeFromPath } from '@/utilities/hooks/useKanaTypeFromPath';

const PreGameSetup = () => {
  const { isOn: isGameOn } = useAppSelector((state) => state.gameReducer);
  const KanaTable =
    useKanaTypeFromPath() === 'hiragana' ? HiraganaTable : KatakanaTable;
  return (
    <>
      {!isGameOn ? (
        <>
          <KanaTable />
          <GameSettings />
          <GamePlayButton />
        </>
      ) : (
        <>
          <Game />
        </>
      )}
    </>
  );
};

export default PreGameSetup;
