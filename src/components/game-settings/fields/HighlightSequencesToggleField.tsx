import BooleanToggleField from './generic-fields/BooleanToggleField';
import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import { toggleShouldHighlightSequences } from '@/state/redux/features/gameSettingsSlice';

const HighlightSequencesToggleField = () => {
  const { shouldHighlightSequences } = useAppSelector(
    (state) => state.gameSettingsReducer,
  );
  const dispatch = useAppDispatch();
  const onChangeCallback = () => dispatch(toggleShouldHighlightSequences());
  return (
    <BooleanToggleField
      value={shouldHighlightSequences}
      name="Highlight Correct Sequences"
      onChangeCallback={onChangeCallback}
    />
  );
};

export default HighlightSequencesToggleField;
