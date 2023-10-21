import { createContext, Dispatch, SetStateAction } from 'react';

export default class ContextFactory {
  static createValueContext<T extends unknown>(initialValue?: T) {
    return createContext<T | undefined>(initialValue);
  }

  private static createValueUpdateContext<T extends unknown>() {
    return createContext<Dispatch<SetStateAction<T>> | undefined>(undefined);
  }

  static createCompleteContext<T extends unknown>(initialValue?: T) {
    return [
      ContextFactory.createValueContext<T>(initialValue),
      ContextFactory.createValueUpdateContext<T>(),
    ] as const;
  }
}
