import { useContext, Dispatch, SetStateAction, Context } from 'react';

export default class UseContextFactory {
  static createUseValueContext<T extends unknown>(context: Context<T>) {
    return () => useContext(context);
  }

  private static createUseValueUpdateContext<T extends unknown>(
    context: Context<Dispatch<SetStateAction<T>>>,
  ) {
    return () => useContext(context);
  }

  static createUseCompleteContext<T extends unknown>(
    valueContext: Context<T>,
    valueUpdateContext: Context<Dispatch<SetStateAction<T>>>,
  ) {
    return [
      UseContextFactory.createUseValueContext<T>(valueContext),
      UseContextFactory.createUseValueUpdateContext<T>(valueUpdateContext),
    ] as const;
  }
}
