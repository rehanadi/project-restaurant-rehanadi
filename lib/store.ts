import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/stores';
import locationReducer from '@/features/location/stores';
import restaurantsReducer from '@/features/restaurants/stores';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    restaurants: restaurantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;