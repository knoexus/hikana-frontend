import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import OptionalSelectorField from './generic-fields/OptionalSelectorField';
import {
  toggleDoCustomWordDifficultyLevel,
  setWordDifficultyLevel,
  DifficultyLevel,
} from '@/state/redux/features/gameSettingsSlice';

const WordDifficultyMixedField = () => {
  const { doCustomLevel, level, levelSelectOptions } = useAppSelector(
    (state) => state.gameSettingsReducer.wordDifficulty,
  );
  const dispatch = useAppDispatch();

  const handleBooleanFieldOnChange = () => {
    dispatch(toggleDoCustomWordDifficultyLevel());
  };

  const handleNumericFieldOnChange = (newDifficultyLevel: string) => {
    dispatch(setWordDifficultyLevel(newDifficultyLevel as DifficultyLevel));
  };

  return (
    <OptionalSelectorField
      booleanComponentProps={{
        name: 'Custom Word Difficulty',
        value: doCustomLevel,
        onChangeCallback: handleBooleanFieldOnChange,
      }}
      selectorComponentProps={{
        name: 'Word Difficulty',
        value: level,
        options: levelSelectOptions,
        onChangeCallback: handleNumericFieldOnChange,
      }}
    />
  );
};

export default WordDifficultyMixedField;
