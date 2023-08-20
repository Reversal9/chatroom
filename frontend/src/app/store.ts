import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatroomReducer from '../features/chatroom/chatroomSlice';

export const store = configureStore({
  reducer: {
    chatroom: chatroomReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
