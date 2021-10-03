import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import boardsSlice from '../features/boards/boardsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    boards: boardsSlice,
  },
});
