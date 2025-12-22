import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/stores';
import locationReducer from '@/features/location/stores';
import restaurantsReducer from '@/features/restaurants/stores';
import cartReducer from '@/features/cart/stores';
import ordersReducer from '@/features/orders/stores';
import checkoutReducer from '@/features/checkout/stores';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    restaurants: restaurantsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    checkout: checkoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;