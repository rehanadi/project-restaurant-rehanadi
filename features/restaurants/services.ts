import { http } from '@/lib/api';
import { API_RESTO_URL } from '@/features/shared/constants/api-url';
import { RecommendedRestaurantsResponse, RestaurantDetailResponse } from './types';

export const restaurantsService = {
  getRecommendedRestaurants: async (): Promise<RecommendedRestaurantsResponse> => {
    return http.get<RecommendedRestaurantsResponse>(`${API_RESTO_URL}/recommended`);
  },

  getRestaurant: async (id: number, limitMenu: number, limitReview: number): Promise<RestaurantDetailResponse> => {
    return http.get<RestaurantDetailResponse>(`${API_RESTO_URL}/${id}?limitMenu=${limitMenu}&limitReview=${limitReview}`);
  },
};