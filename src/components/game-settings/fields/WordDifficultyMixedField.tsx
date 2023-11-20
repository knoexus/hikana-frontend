import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import OptionalSelectorField from './generic-fields/OptionalSelectorField';
import {
  toggleDoCustomWordDifficultyLevel,
  setWordDifficultyLevel,
  DifficultyLevel,
} from '@/state/redux/features/gameSettingsSlice';
import { useCallback } from 'react';

const WordDifficultyMixedField = () => {
  const { doCustomLevel, level, levelSelectOptions } = useAppSelector(
    (state) => state.gameSettingsReducer.wordDifficulty,
  );
  const dispatch = useAppDispatch();

  const handleBooleanFieldOnChange = useCallback(() => {
    dispatch(toggleDoCustomWordDifficultyLevel());
  }, [dispatch]);

  const handleNumericFieldOnChange = useCallback(
    (newDifficultyLevel: string) => {
      dispatch(setWordDifficultyLevel(newDifficultyLevel as DifficultyLevel));
    },
    [dispatch],
  );

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
