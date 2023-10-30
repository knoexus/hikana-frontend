import BooleanToggleField from './generic-fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleDoWordGuessRetries } from '@/state/redux/features/gameSettingsSlice';

const RetryGuessToggleField = () => {
  const { doWordGuessRetries } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = () => dispatch(toggleDoWordGuessRetries());
  return (
    <BooleanToggleField
      value={doWordGuessRetries}
      name="Retry Guess"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default RetryGuessToggleField;
