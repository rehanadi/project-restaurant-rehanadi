import { http } from '@/lib/api';
import { API_RESTO_URL } from '@/features/shared/constants/api-url';
import {
  RecommendedRestaurantsResponse,
  RestaurantDetailResponse,
  GetRestaurantsResponse,
  GetRestaurantsParams,
  BestSellerRestaurantsResponse,
} from './types';
import { buildQueryParams } from './utils';

export const restaurantsService = {
  getRecommendedRestaurants: async (): Promise<RecommendedRestaurantsResponse> => {
    return http.get<RecommendedRestaurantsResponse>(`${API_RESTO_URL}/recommended`);
  },

  getRestaurant: async (
    id: number,
    limitMenu: number,
    limitReview: number
  ): Promise<RestaurantDetailResponse> => {
    return http.get<RestaurantDetailResponse>(
      `${API_RESTO_URL}/${id}?limitMenu=${limitMenu}&limitReview=${limitReview}`
    );
  },

  getRestaurants: async (params: GetRestaurantsParams = {}): Promise<GetRestaurantsResponse> => {
    const queryString = buildQueryParams(params);
    return http.get<GetRestaurantsResponse>(`${API_RESTO_URL}?${queryString}`);
  },

  getBestSellerRestaurants: async (
    page: number = 1,
    limit: number = 6
  ): Promise<BestSellerRestaurantsResponse> => {
    return http.get<BestSellerRestaurantsResponse>(
      `${API_RESTO_URL}/best-seller?page=${page}&limit=${limit}`
    );
  },
};