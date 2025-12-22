import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckoutState, UpdateAddressPayload } from './types';

const loadDeliveryAddressFromStorage = (): CheckoutState => {
  if (typeof window === 'undefined') {
    return {
      deliveryAddress: {
        address: '',
        phone: '',
      },
    };
  }

  try {
    const deliveryAddressStr = localStorage.getItem('deliveryAddress');

    if (deliveryAddressStr) {
      return {
        deliveryAddress: JSON.parse(deliveryAddressStr),
      };
    }
  } catch (error) {
    console.error('Failed to load delivery address from localStorage:', error);
  }

  return {
    deliveryAddress: {
      address: '',
      phone: '',
    },
  };
};

const initialState: CheckoutState = loadDeliveryAddressFromStorage();

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDeliveryAddress: (state, action: PayloadAction<UpdateAddressPayload>) => {
      state.deliveryAddress = {
        address: action.payload.address,
        phone: action.payload.phone,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('deliveryAddress', JSON.stringify(state.deliveryAddress));
      }
    },
    clearDeliveryAddress: (state) => {
      state.deliveryAddress = {
        address: '',
        phone: '',
      };

      if (typeof window !== 'undefined') {
        localStorage.removeItem('deliveryAddress');
      }
    },
  },
});

export const { setDeliveryAddress, clearDeliveryAddress } = checkoutSlice.actions;
export default checkoutSlice.reducer;