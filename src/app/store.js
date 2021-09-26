import { configureStore } from '@reduxjs/toolkit';
// import authenticationReducer from '../features/authentication/authenticationSlice';
import boardsSlice from '../features/boards/boardsSlice';

export const store = configureStore({
  reducer: {
    // authUser: authenticationReducer,
    boards: boardsSlice,
  },
});
