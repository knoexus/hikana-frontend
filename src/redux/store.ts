import { configureStore } from '@reduxjs/toolkit';
import kanaTableSelectedColumnsReducer from './features/kanaTableSelectedColumnsSlice';
import gameReducer from './features/gameSlice';
import gameSettingsReducer from './features/gameSettingsSlice';

export const store = configureStore({
  reducer: {
    kanaTableSelectedColumnsReducer,
    gameReducer,
    gameSettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
