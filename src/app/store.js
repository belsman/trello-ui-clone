import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import boardsSlice from '../features/boards/boardsSlice';

const combinedReducer = combineReducers({
  auth: authReducer,
  boards: boardsSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/clearOnLogout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer
});
