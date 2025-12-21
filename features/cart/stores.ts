import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartData } from './types';

const loadCartFromStorage = (): CartState => {
  if (typeof window === 'undefined') {
    return {
      cart: [],
      summary: {
        totalItems: 0,
        totalPrice: 0,
        restaurantCount: 0,
      },
    };
  }

  try {
    const cartStr = localStorage.getItem('cart');

    if (cartStr) {
      return JSON.parse(cartStr);
    }
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
  }

  return {
    cart: [],
    summary: {
      totalItems: 0,
      totalPrice: 0,
      restaurantCount: 0,
    },
  };
};

const initialState: CartState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartData>) => {
      state.cart = action.payload.cart;
      state.summary = action.payload.summary;

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.summary = {
        totalItems: 0,
        totalPrice: 0,
        restaurantCount: 0,
      };

      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    },
  },
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;