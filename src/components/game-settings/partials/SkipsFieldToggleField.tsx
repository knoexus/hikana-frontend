import BooleanToggleField from './fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleDoSkips } from '@/state/redux/features/gameSettingsSlice';

const SkipsFieldToggleField = () => {
  const { doSkips } = useAppSelector((state) => state.gameSettingsReducer);
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
