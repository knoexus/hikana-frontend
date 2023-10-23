import BooleanToggleField from './BooleanToggleField';
import NumericSliderField from './NumericSliderField';

interface NameValue<T> {
  name: string;
  value: T;
}

interface BooleanComponentProps extends NameValue<boolean> {
  onChangeCallback: () => void;
}

interface NumericComponentProps extends NameValue<number> {
  minValue: number;
  maxValue: number;
  onChangeCallback: (e: number) => void;
}

interface OptionalNumericSliderFieldProps {
  booleanComponentProps: BooleanComponentProps;
  numericComponentProps: NumericComponentProps;
}

const OptionalNumericSliderField = ({
  booleanComponentProps,
  numericComponentProps,
}: OptionalNumericSliderFieldProps) => {
  const {
    name: booleanComponentName,
    value: booleanComponentValue,
    onChangeCallback: booleanComponentOnChangeCallback,
  } = booleanComponentProps;
  const {
    name: numericComponentName,
    value: numericComponentValue,
    minValue: numericComponentMinValue,
    maxValue: numericComponentMaxValue,
    onChangeCallback: numericComponentOnChangeCallback,
  } = numericComponentProps;

  return (
    <>
      <BooleanToggleField
        name={booleanComponentName}
        value={booleanComponentValue}
        onChangeCallback={booleanComponentOnChangeCallback}
      />
      {booleanComponentValue && (
        <NumericSliderField
          name={numericComponentName}
          value={numericComponentValue}
          minValue={numericComponentMinValue}
          maxValue={numericComponentMaxValue}
          onChangeCallback={numericComponentOnChangeCallback}
        />
      )}
    </>
  );
};

export default OptionalNumericSliderField;
