interface NumericSliderFieldProps {
  name: string;
  value: number;
  minValue: number;
  maxValue: number;
  onChangeCallback?: (e: number) => void;
}

const NumericSliderField = ({
  name,
  value,
  minValue,
  maxValue,
  onChangeCallback,
}: NumericSliderFieldProps) => {
  return (
    <div className="mb-4">
      <span>{name}</span>
      <div className="slider-container relative">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={value}
          onChange={(e) => onChangeCallback?.(parseInt(e.target.value))}
          className="slider"
        />
      </div>
      <div className="flex justify-between mt-2">
        <span>{minValue}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default NumericSliderField;
