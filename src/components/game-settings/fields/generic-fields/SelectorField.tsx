interface SelectorFieldProps {
  name: string;
  value: string;
  options: { name: string; value: string }[];
  onChangeCallback?: (e: string) => void;
}

const SelectorField = ({
  name,
  value,
  options,
  onChangeCallback,
}: SelectorFieldProps) => {
  return (
    <div className="mb-4">
      <label>{name}</label>
      <select
        className="ml-3"
        value={value}
        onChange={(e) => onChangeCallback?.(e.target.value)}
      >
        {options.map(({ name, value }, idx) => (
          <option key={idx} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorField;
