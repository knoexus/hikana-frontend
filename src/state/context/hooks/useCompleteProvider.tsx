'use client';

import {
  useState,
  Dispatch,
  SetStateAction,
  Context,
  PropsWithChildren,
} from 'react';

interface ProviderProps<T> {
  initialValue: T;
}

export type ProviderPropsWithChildren<T> = PropsWithChildren<ProviderProps<T>>;

interface UseCompleteProviderProps<T> {
  props: ProviderPropsWithChildren<T>;
  valueContext: Context<T>;
  valueUpdateContext?: Context<Dispatch<SetStateAction<T>>>;
}

/**
 * Use a React Context Provider which provides the value alongside its update function.
 */
const useCompleteProvider = <T extends unknown>({
  props,
  valueContext: ValueContext,
  valueUpdateContext: ValueUpdateContext,
}: UseCompleteProviderProps<T>) => {
  const [value, setValue] = useState<T>(props.initialValue);

  return (
    <ValueContext.Provider value={value}>
      {ValueUpdateContext ? (
        <ValueUpdateContext.Provider value={setValue}>
          {props.children}
        </ValueUpdateContext.Provider>
      ) : (
        props.children
      )}
    </ValueContext.Provider>
  );
};

export default useCompleteProvider;
