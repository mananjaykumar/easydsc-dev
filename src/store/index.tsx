import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/AuthSlice';
import ProgressSlice from './slices/ProgressSlice';

const store = configureStore({
  // root reducer
  reducer: {
    auth: authSlice,
    progres: ProgressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
