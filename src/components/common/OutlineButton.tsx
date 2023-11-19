import { TailwindComponentProps } from '@/types/TailwindComponentProps';
import { MouseEvent } from 'react';

type OutlineButtonType = 'success' | 'info' | 'danger';

// Tailwind must be able to scan the classes, so string literals cannot be used.
const colorMapping: Record<OutlineButtonType, string> = {
  success:
    'bg-white text-green-500 border-green-500 hover:bg-green-500 hover:text-white hover:border-white',
  info: 'bg-white text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white hover:border-white',
  danger:
    'bg-white text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:border-white',
};

interface OutlineButtonProps extends TailwindComponentProps {
  text: string;
  type: OutlineButtonType;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const OutlineButton = ({
  text,
  type,
  extraClasses,
  onClick,
}: OutlineButtonProps) => (
  <button
    className={`${colorMapping[type]} border font-bold py-2 px-4 rounded-xl ${
      extraClasses || ''
    }`}
    onClick={onClick || (() => {})}
  >
    {text}
  </button>
);

export default OutlineButton;
