import BooleanToggleField from './fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleDoCharacterTips } from '@/state/redux/features/gameSettingsSlice';

const CharacterTipsToggleField = () => {
  const { doCharacterTips } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = () => dispatch(toggleDoCharacterTips());
  return (
    <BooleanToggleField
      value={doCharacterTips}
      name="Character Tips"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default CharacterTipsToggleField;
