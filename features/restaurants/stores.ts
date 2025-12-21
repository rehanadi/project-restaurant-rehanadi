import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestaurantsState, Restaurant } from './types';

const initialState: RestaurantsState = {
  recommendations: [],
  currentPage: 1,
  itemsPerPage: 6,
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRecommendations: (state, action: PayloadAction<Restaurant[]>) => {
      state.recommendations = action.payload;
      state.currentPage = 1;
    },
    loadMore: (state) => {
      state.currentPage += 1;
    },
    resetPagination: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setRecommendations, loadMore, resetPagination } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;