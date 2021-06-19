import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../features/store/modalSlice';
import userSlice from '../features/store/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    modal: modalSlice.reducer
  },
});
