import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  RestaurantsState,
  Restaurant,
  RestaurantDetail,
  RestaurantPagination,
  RestaurantFilters,
} from './types';

const initialState: RestaurantsState = {
  recommendations: [],
  currentPage: 1,
  itemsPerPage: 6,
  selectedRestaurant: null,
  menuLimit: 8,
  reviewLimit: 6,
  restaurants: [],
  pagination: {
    page: 1,
    limit: 8,
    total: 0,
    totalPages: 0,
  },
  filters: {
    range: 0.5,
    priceMin: 1000,
    priceMax: 1000000,
    rating: null,
    category: null,
  },
  nearby: [],
  nearbyCurrentPage: 1,
  nearbyItemsPerPage: 6,
  bestSellers: [],
  bestSellerPagination: {
    page: 1,
    limit: 6,
    total: 0,
    totalPages: 0,
  },
  searchResults: [],
  searchPagination: {
    page: 1,
    limit: 6,
    total: 0,
    totalPages: 0,
  },
  searchQuery: '',
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
    setRestaurants: (
      state,
      action: PayloadAction<{
        restaurants: Restaurant[];
        pagination: RestaurantPagination;
        filters: RestaurantFilters;
      }>
    ) => {
      state.restaurants = action.payload.restaurants;
      state.pagination = action.payload.pagination;
      state.filters = action.payload.filters;
    },
    setNearby: (state, action: PayloadAction<Restaurant[]>) => {
      state.nearby = action.payload;
      state.nearbyCurrentPage = 1;
    },
    loadMoreNearby: (state) => {
      state.nearbyCurrentPage += 1;
    },
    resetNearby: (state) => {
      state.nearbyCurrentPage = 1;
    },
    setBestSellers: (
      state,
      action: PayloadAction<{
        restaurants: Restaurant[];
        pagination: RestaurantPagination;
      }>
    ) => {
      state.bestSellers = action.payload.restaurants;
      state.bestSellerPagination = action.payload.pagination;
    },
    resetBestSellers: (state) => {
      state.bestSellers = [];
      state.bestSellerPagination = {
        page: 1,
        limit: 6,
        total: 0,
        totalPages: 0,
      };
    },
    setSearchResults: (
      state,
      action: PayloadAction<{
        restaurants: Restaurant[];
        pagination: RestaurantPagination;
        searchQuery: string;
      }>
    ) => {
      state.searchResults = action.payload.restaurants;
      state.searchPagination = action.payload.pagination;
      state.searchQuery = action.payload.searchQuery;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.searchPagination = {
        page: 1,
        limit: 6,
        total: 0,
        totalPages: 0,
      };
      state.searchQuery = '';
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
  setRestaurants,
  setNearby,
  loadMoreNearby,
  resetNearby,
  setBestSellers,
  resetBestSellers,
  setSearchResults,
  clearSearchResults,
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;