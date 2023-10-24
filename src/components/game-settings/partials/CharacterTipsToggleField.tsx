import BooleanToggleField from './fields/BooleanToggleField';
import useAppSelector from '@/hooks/redux/useAppSelector';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { toggleDoCharacterTips } from '@/redux/features/gameSettingsSlice';

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
