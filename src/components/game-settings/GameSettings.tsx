import './GameSettings.css';
import CharacterTipsToggleField from './fields/CharacterTipsToggleField';
import HighlightCorrectSequenceToggleField from './fields/HighlightCorrectSequenceToggleField';
import RetryGuessToggleField from './fields/RetryGuessToggleField';
import WordDifficultyMixedField from './fields/WordDifficultyMixedField';
import RoundedContainer from '../common/RoundedContainer';
import Title from '../common/Title';

const GameSettings = () => {
  return (
    <RoundedContainer extraClasses="mt-8 bg-gray-100 bg-opacity-75">
      <Title>Game Settings</Title>
      <CharacterTipsToggleField />
      <HighlightCorrectSequenceToggleField />
      <RetryGuessToggleField />
      <WordDifficultyMixedField />
    </RoundedContainer>
  );
};

export default GameSettings;
