import { http } from '@/lib/api';
import { API_RESTO_URL } from '@/features/shared/constants/api-url';
import { RecommendedRestaurantsResponse } from './types';

export const restaurantsService = {
  getRecommendedRestaurants: async (): Promise<RecommendedRestaurantsResponse> => {
    return http.get<RecommendedRestaurantsResponse>(`${API_RESTO_URL}/recommended`);
  },
};