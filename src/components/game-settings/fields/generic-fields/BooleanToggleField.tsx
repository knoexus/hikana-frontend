import { memo } from 'react';

interface BooleanToggleFieldProps {
  name: string;
  value: boolean;
  onChangeCallback?: () => void;
}

const BooleanToggleField = ({
  name,
  value,
  onChangeCallback,
}: BooleanToggleFieldProps) => {
  return (
    <div className="mb-2 flex items-center justify-between">
      <span>{name}</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={value}
          onChange={() => {
            onChangeCallback?.();
          }}
        />
        <span className="toggle"></span>
      </label>
    </div>
  );
};

export default memo(BooleanToggleField);
