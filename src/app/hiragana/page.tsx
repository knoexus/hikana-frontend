// 'use client';

// import { useKanaFetch } from '@/hooks/data/useKanaFetch';
// import { Word } from '@/abstractions/Word';
import HiraganaTable from '@/components/kana-table/HiraganaTable';
import GameSettings from '@/components/game-settings/GameSettings';
import GamePlayButton from '@/components/game-play-button/GamePlayButton';

const Hiragana = () => {
  //   const kanaFetch = useKanaFetch();
  //   const data = kanaFetch.data;
  //   return <>{data == null ? <div>Hiragana</div> : <div>{data[0].kana}</div>}</>;
  return (
    <>
      <HiraganaTable />
      <GameSettings oppositeKana="katakana" />
      <GamePlayButton />
    </>
  );
};

export default Hiragana;
