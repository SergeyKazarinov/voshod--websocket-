import { combineReducers, configureStore } from '@reduxjs/toolkit';
import buttonsSlice from './slices/buttonsSlice';
import webSocketSlice from './slices/webSocketSlice';

const rootReducer = combineReducers({
  buttons: buttonsSlice,
  webSocket: webSocketSlice,
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;