import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/Userslices';
import chatReducer from '../slices/ChatSlices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chats: chatReducer,
  }
});
