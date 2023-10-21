import { configureStore } from '@reduxjs/toolkit';
import kanaTableSelectedColumnsReducer from './features/kanaTableSelectedColumnsSlice';

export const store = configureStore({
  reducer: {
    kanaTableSelectedColumnsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
