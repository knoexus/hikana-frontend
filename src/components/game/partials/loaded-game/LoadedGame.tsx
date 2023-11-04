import WordCounter from './word-counter/WordCounter';
import NextWordButton from './next-word-button/NextWordButton';
import KanaWord from './kana-word/KanaWord';
import RomajiInput from './romaji-input/RomajiInput';
import PlayedWords from './played-words/PlayedWords';
import WordRetryLives from './word-retry-lives/WordRetryLives';

const LoadedGame = () => (
  <div className="w-full flex flex-col justify-center items-center">
    <div className="container mt-5 p-4 border rounded-2xl flex flex-col w-96 justify-center items-center relative">
      <WordCounter />
      <WordRetryLives />
      <KanaWord />
      <RomajiInput />
      <NextWordButton />
    </div>
    <PlayedWords />
  </div>
);

export default LoadedGame;
