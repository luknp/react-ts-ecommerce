import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import notificationReducer from './slices/notificationSlice';
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
