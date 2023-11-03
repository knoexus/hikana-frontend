'use client';

import { RefObject, useEffect, useRef } from 'react';

export const useOutsideClickResolver = <T extends HTMLElement>(
  onClick: () => void,
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);

  return ref;
};
