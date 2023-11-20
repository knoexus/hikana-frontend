import BooleanToggleField from './generic-fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleDoCharacterTips } from '@/state/redux/features/gameSettingsSlice';
import { useCallback } from 'react';

const CharacterTipsToggleField = () => {
  const { doCharacterTips } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = useCallback(
    () => dispatch(toggleDoCharacterTips()),
    [dispatch],
  );
  return (
    <BooleanToggleField
      value={doCharacterTips}
      name="Character Tips"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default CharacterTipsToggleField;
