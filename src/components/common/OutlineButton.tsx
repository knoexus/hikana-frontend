import { MouseEvent } from 'react';

interface OutlineButtonProps {
  text: string;
  bgColor: string;
  outlineColor: string;
  extraClasses?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const OutlineButton = ({
  text,
  bgColor,
  outlineColor,
  extraClasses,
  onClick,
}: OutlineButtonProps) => {
  return (
    <button
      className={`bg-${bgColor} text-${outlineColor} border-${outlineColor} hover:bg-${outlineColor} hover:text-${bgColor} hover: hover:border-${bgColor} border font-bold py-2 px-4 rounded-xl ${
        extraClasses || ''
      }`}
      onClick={onClick || (() => {})}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
