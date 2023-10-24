'use client';

import HiraganaTable from '@/components/kana-table/HiraganaTable';
import KatakanaTable from '../kana-table/KatakanaTable';
import GameSettings from '@/components/game-settings/GameSettings';
import GamePlayButton from '@/components/game-play-button/GamePlayButton';
import Game from '../game/Game';
import { KanaType } from '@/abstractions/Word';
import useAppSelector from '@/hooks/redux/useAppSelector';

const PreGameSetup = ({ kanaType }: { kanaType: KanaType }) => {
  const { isOn: isGameOn } = useAppSelector((state) => state.gameReducer);
  const KanaTable = kanaType === 'hiragana' ? HiraganaTable : KatakanaTable;
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
