'use client';

import { useState } from 'react';
import { ComponentProps } from '@/types/ComponentProps';

const Tooltip = ({ text, children }: { text: string } & ComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="absolute top-full right-1/2 translate-x-1/2 px-2 py-1 z-10 min-w-[135px] inline-block text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">
          {text}
          <div className="after:absolute after:bottom-full after:left-1/2 after:w-0 after:h-0 after:border-x-4 after:border-b-4 after:border-spacing-2 after:border-solid after:border-l-transparent after:border-r-transparent after:border-b-gray-900 after:dark:border-b-gray-700 after:-translate-x-1/2 after:content-['']"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
