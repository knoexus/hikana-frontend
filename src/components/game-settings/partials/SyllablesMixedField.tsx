import useAppSelector from '@/state/redux/hooks/useAppSelector';
import useAppDispatch from '@/state/redux/hooks/useAppDispatch';
import OptionalNumericSliderField from './fields/OptionalNumericSliderField';
import {
  toggleDoArbitraryAmountOfSyllables,
  setAmountOfSyllables,
} from '@/state/redux/features/gameSettingsSlice';

const SyllablesMixedField = () => {
  const {
    doArbitraryAmount: doArbitrarySyllableAmount,
    amount: syllableAmount,
  } = useAppSelector((state) => state.gameSettingsReducer.syllables);
  const dispatch = useAppDispatch();

  const handleBooleanFieldOnChange = () => {
    dispatch(toggleDoArbitraryAmountOfSyllables());
  };

  const handleNumericFieldOnChange = (newAmountOfSyllables: number) => {
    dispatch(setAmountOfSyllables(newAmountOfSyllables));
  };

  return (
    <OptionalNumericSliderField
      booleanComponentProps={{
        name: 'Arbitrary amount of syllables',
        value: doArbitrarySyllableAmount,
        onChangeCallback: handleBooleanFieldOnChange,
      }}
      numericComponentProps={{
        name: 'Syllables',
        value: syllableAmount,
        minValue: 0,
        maxValue: 10,
        onChangeCallback: handleNumericFieldOnChange,
      }}
    />
  );
};

export default SyllablesMixedField;
