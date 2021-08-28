import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'redux/store';
import { NotificationPayload } from 'redux/types';

interface InitialNotificationState {
  message: string | null;
  type: 'success' | 'error' | null;
}

const initialState: InitialNotificationState = {
  message: null,
  type: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationPayload>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearNotification: state => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

const notificationTimeoutMs = 6000;
let timeoutID = 0;
export const showNotification =
  (message: string, type: 'success' | 'error'): AppThunk =>
  dispatch => {
    window.clearTimeout(timeoutID);
    dispatch(setNotification({ message, type }));

    timeoutID = window.setTimeout(() => {
      dispatch(clearNotification());
    }, notificationTimeoutMs);
  };

export const selectNotifState = (state: RootState) => state.notification;
export default notificationSlice.reducer;
