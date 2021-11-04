import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import boardsSlice from '../features/boards/boardsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    boards: boardsSlice,
  },
});
