import BooleanToggleField from './generic-fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleDoWordGuessRetries } from '@/state/redux/features/gameSettingsSlice';
import { useCallback } from 'react';

const RetryGuessToggleField = () => {
  const { doWordGuessRetries } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = useCallback(
    () => dispatch(toggleDoWordGuessRetries()),
    [dispatch],
  );
  return (
    <BooleanToggleField
      value={doWordGuessRetries}
      name="Retry Guess"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default RetryGuessToggleField;
