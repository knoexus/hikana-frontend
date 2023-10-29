import BooleanToggleField from './BooleanToggleField';
import SelectorField from './SelectorField';

interface NameValue<T> {
  name: string;
  value: T;
}

interface BooleanComponentProps extends NameValue<boolean> {
  onChangeCallback: () => void;
}

interface SelectorComponentProps extends NameValue<string> {
  options: { name: string; value: string }[];
  onChangeCallback: (v: string) => void;
}

interface OptionalSelectorFieldProps {
  booleanComponentProps: BooleanComponentProps;
  selectorComponentProps: SelectorComponentProps;
}

const OptionalNumericRangeSliderField = ({
  booleanComponentProps,
  selectorComponentProps,
}: OptionalSelectorFieldProps) => {
  const {
    name: booleanComponentName,
    value: booleanComponentValue,
    onChangeCallback: booleanComponentOnChangeCallback,
  } = booleanComponentProps;
  const {
    name: selectorComponentName,
    value: selectorComponentValue,
    options: selectorComponentOptions,
    onChangeCallback: selectorComponentOnChangeCallback,
  } = selectorComponentProps;

  return (
    <>
      <BooleanToggleField
        name={booleanComponentName}
        value={booleanComponentValue}
        onChangeCallback={booleanComponentOnChangeCallback}
      />
      {booleanComponentValue && (
        <SelectorField
          name={selectorComponentName}
          value={selectorComponentValue}
          options={selectorComponentOptions}
          onChangeCallback={selectorComponentOnChangeCallback}
        />
      )}
    </>
  );
};

export default OptionalNumericRangeSliderField;
