'use client';

import { useState, Dispatch, SetStateAction, Context } from 'react';
import { ComponentProps } from '@/abstractions/ComponentProps';

interface UseCompleteProviderProps<T> extends ComponentProps {
  initialValue: T;
  valueContext: Context<T>;
  valueUpdateContext?: Context<Dispatch<SetStateAction<T>> | null>;
}

/**
 * Use a React Context Provider which provides the value alongside its update function.
 */
const useCompleteProvider = <T extends unknown>({
  initialValue,
  children,
  valueContext: ValueContext,
  valueUpdateContext: ValueUpdateContext,
}: UseCompleteProviderProps<T>) => {
  const [value, setValue] = useState<T>(initialValue);

  return (
    <ValueContext.Provider value={value}>
      {ValueUpdateContext ? (
        <ValueUpdateContext.Provider value={setValue}>
          {children}
        </ValueUpdateContext.Provider>
      ) : (
        children
      )}
    </ValueContext.Provider>
  );
};

export default useCompleteProvider;
