import { Word } from '@/types/Word';
import WordCounter from './word-counter/WordCounter';
import NextWordButton from './next-word-button/NextWordButton';
import KanaWord from './kana-word/KanaWord';
import RomajiInput from './romaji-input/RomajiInput';

const LoadedGame = () => {
  return (
    <div className="container mt-5 p-4 border rounded-2xl flex flex-col w-48 justify-center">
      <WordCounter />
      <KanaWord />
      <RomajiInput />
      <NextWordButton />
    </div>
  );
};

export default LoadedGame;
