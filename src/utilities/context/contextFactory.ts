import { createContext, Dispatch, SetStateAction } from 'react';

export default class ContextFactory {
  static createValueContext<T extends unknown>(initialValue?: T) {
    return createContext<T>(initialValue || ({} as T));
  }

  private static createValueUpdateContext<T extends unknown>() {
    return createContext<Dispatch<SetStateAction<T>>>(
      {} as Dispatch<SetStateAction<T>>,
    );
  }

  static createCompleteContext<T extends unknown>(initialValue?: T) {
    return [
      ContextFactory.createValueContext<T>(initialValue || ({} as T)),
      ContextFactory.createValueUpdateContext<T>(),
    ] as const;
  }
}
