'use client';

import { store } from './store';
import { Provider } from 'react-redux';
import { ComponentProps } from '@/types/ComponentProps';

const ReduxProvider = ({ children }: ComponentProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
