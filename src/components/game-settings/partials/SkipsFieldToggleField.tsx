import BooleanToggleField from './fields/BooleanToggleField';
import useAppSelector from '@/hooks/redux/useAppSelector';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { toggleDoSkips } from '@/redux/features/gameSettingsSlice';

const SkipsFieldToggleField = () => {
  const { doSkips } = useAppSelector(
    (state) => state.gameSettingsReducer.value,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = () => dispatch(toggleDoSkips());
  return (
    <BooleanToggleField
      value={doSkips}
      name="Skips"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default SkipsFieldToggleField;
