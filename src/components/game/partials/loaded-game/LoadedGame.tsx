import WordCounter from './word-counter/WordCounter';
import NextWordButton from './next-word-button/NextWordButton';
import KanaWord from './kana-word/KanaWord';
import RomajiInput from './romaji-input/RomajiInput';
import PlayedWords from './played-words/PlayedWords';
import WordRetryLives from './word-retry-lives/WordRetryLives';

const LoadedGame = () => (
  <>
    <div className="container mt-5 p-4 border rounded-2xl flex flex-col w-48 justify-center">
      <WordCounter />
      <WordRetryLives />
      <KanaWord />
      <RomajiInput />
      <NextWordButton />
    </div>
    <PlayedWords />
  </>
);

export default LoadedGame;
