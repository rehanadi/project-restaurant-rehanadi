import { useQuery } from '@tanstack/react-query';
import { restaurantsService } from './services';
import { useAppDispatch } from '@/lib/hooks';
import { setRecommendations } from './stores';
import { CACHE_DURATION } from '@/features/shared/constants/duration';

export const useGetRecommendedRestaurants = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['restaurants', 'recommended'],
    queryFn: async () => {
      const response = await restaurantsService.getRecommendedRestaurants();
      dispatch(setRecommendations(response.data.recommendations));
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};