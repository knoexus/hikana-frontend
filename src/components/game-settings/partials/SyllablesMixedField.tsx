import useAppSelector from '@/hooks/redux/useAppSelector';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import OptionalNumericSliderField from './fields/OptionalNumericSliderField';
import {
  toggleDoArbitraryAmountOfSyllables,
  setAmountOfSyllables,
} from '@/redux/features/gameSettingsSlice';

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
