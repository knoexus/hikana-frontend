import WordCounter from './word-counter/WordCounter';
import KanaWord from './kana-word/KanaWord';
import RomajiInput from './romaji-input/RomajiInput';
import PlayedWords from './played-words/PlayedWords';
import WordRetryLives from './word-retry-lives/WordRetryLives';
import ProceedButton from './proceed-button/ProceedButton';
import FullDimContainer from '@/components/common/FullDimContainer';

const LoadedGame = () => (
  <FullDimContainer extraClasses="flex flex-col justify-center items-center">
    <div className="container p-4 border rounded-2xl flex flex-col w-96 justify-center items-center relative">
      <WordCounter />
      <WordRetryLives />
      <KanaWord />
      <RomajiInput />
      <ProceedButton />
    </div>
    <PlayedWords />
  </FullDimContainer>
);

export default LoadedGame;
