// 'use client';

// import { useKanaFetch } from '@/hooks/data/useKanaFetch';
// import { Word } from '@/abstractions/Word';
import HiraganaTable from '@/components/hiragana/HiraganaTable';

const Hiragana = () => {
  //   const kanaFetch = useKanaFetch();
  //   const data = kanaFetch.data;
  //   return <>{data == null ? <div>Hiragana</div> : <div>{data[0].kana}</div>}</>;
  return <HiraganaTable />;
};

export default Hiragana;
