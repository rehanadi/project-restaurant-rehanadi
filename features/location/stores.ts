import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationState } from './types';

const loadLocationFromStorage = (): LocationState => {
  if (typeof window === 'undefined') {
    return {
      latitude: null,
      longitude: null,
    };
  }

  try {
    const locationStr = localStorage.getItem('location');

    if (locationStr) {
      const location = JSON.parse(locationStr);
      return {
        latitude: location.latitude,
        longitude: location.longitude,
      };
    }
  } catch (error) {
    console.error('Failed to load location from localStorage:', error);
  }

  return {
    latitude: null,
    longitude: null,
  };
};

const initialState: LocationState = loadLocationFromStorage();

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;

      if (typeof window !== 'undefined') {
        localStorage.setItem('location', JSON.stringify(action.payload));
      }
    },
    clearLocation: (state) => {
      state.latitude = null;
      state.longitude = null;

      if (typeof window !== 'undefined') {
        localStorage.removeItem('location');
      }
    },
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;