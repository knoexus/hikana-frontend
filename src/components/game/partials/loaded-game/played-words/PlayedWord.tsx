import { Guess } from '@/state/redux/features/gameSlice';
import { Word } from '@/types/Word';

const PlayedWord = ({ word, guess }: { word: Word; guess: Guess }) => {
  return (
    <div
      className={`${
        guess.wasCorrect ? 'bg-green-500' : 'bg-red-500'
      } border rounded-xl p-2`}
    >
      <div>{word.kana}</div>
      <div>
        {word.romaji}
        {!guess.wasCorrect && ` <- ${guess.input}`}
      </div>
    </div>
  );
};

export default PlayedWord;
