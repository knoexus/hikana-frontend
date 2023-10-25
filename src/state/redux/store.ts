import { configureStore } from '@reduxjs/toolkit';

import kanaTableSelectedColumnsReducer from './features/kanaTableSelectedColumnsSlice';
import gameReducer from './features/gameSlice';
import gameSettingsReducer from './features/gameSettingsSlice';

import hikanaApi from './apis/hikanaApi';

export const store = configureStore({
  reducer: {
    [hikanaApi.reducerPath]: hikanaApi.reducer,
    kanaTableSelectedColumnsReducer,
    gameReducer,
    gameSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hikanaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
