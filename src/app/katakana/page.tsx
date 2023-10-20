import KatakanaTable from '@/components/kana-table/KatakanaTable';
import GameSettings from '@/components/game-settings/GameSettings';
import GamePlayButton from '@/components/game-play-button/GamePlayButton';

const Katakana = () => (
  <>
    <KatakanaTable />
    <GameSettings oppositeKana="hiragana" />
    <GamePlayButton />
  </>
);

export default Katakana;
