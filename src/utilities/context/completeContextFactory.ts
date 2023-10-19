import { createContext, Dispatch, SetStateAction } from 'react';

export default class CompleteContextFactory {
  static create<T extends unknown>(initialValue: T) {
    return [
      createContext<T>(initialValue),
      createContext<Dispatch<SetStateAction<T>> | null>(null),
    ] as const;
  }
}
