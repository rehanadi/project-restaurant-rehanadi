import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestaurantsState, Restaurant, RestaurantDetail } from './types';

const initialState: RestaurantsState = {
  recommendations: [],
  currentPage: 1,
  itemsPerPage: 6,
  selectedRestaurant: null,
  menuLimit: 8,
  reviewLimit: 6,
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
    setSelectedRestaurant: (state, action: PayloadAction<RestaurantDetail>) => {
      state.selectedRestaurant = action.payload;
    },
    loadMoreMenus: (state) => {
      state.menuLimit += 8;
    },
    loadMoreReviews: (state) => {
      state.reviewLimit += 6;
    },
    resetRestaurantDetail: (state) => {
      state.selectedRestaurant = null;
      state.menuLimit = 8;
      state.reviewLimit = 6;
    },
  },
});

export const {
  setRecommendations,
  loadMore,
  resetPagination,
  setSelectedRestaurant,
  loadMoreMenus,
  loadMoreReviews,
  resetRestaurantDetail,
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;