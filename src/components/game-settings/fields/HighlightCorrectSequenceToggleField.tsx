import BooleanToggleField from './generic-fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleShouldHighlightCorrectSequence } from '@/state/redux/features/gameSettingsSlice';

const HighlightCorrectSequenceToggleField = () => {
  const { shouldHighlightCorrectSequence } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = () =>
    dispatch(toggleShouldHighlightCorrectSequence());
  return (
    <BooleanToggleField
      value={shouldHighlightCorrectSequence}
      name="Highlight Correct Sequence"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default HighlightCorrectSequenceToggleField;
