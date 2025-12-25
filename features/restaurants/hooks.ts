import { useQuery } from '@tanstack/react-query';
import { restaurantsService } from './services';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  setRecommendations,
  setSelectedRestaurant,
  setRestaurants,
  setNearby,
  setBestSellers,
  setSearchResults,
  setCategoryRestaurants,
} from './stores';
import { CACHE_DURATION } from '@/features/shared/constants/duration';
import { GetRestaurantsParams } from './types';

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

export const useGetNearbyRestaurants = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['restaurants', 'nearby'],
    queryFn: async () => {
      const response = await restaurantsService.getRecommendedRestaurants();
      dispatch(setNearby(response.data.recommendations));
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useGetRestaurant = (id: number) => {
  const dispatch = useAppDispatch();
  const { menuLimit, reviewLimit } = useAppSelector((state) => state.restaurants);

  return useQuery({
    queryKey: ['restaurant', id, menuLimit, reviewLimit],
    queryFn: async () => {
      const response = await restaurantsService.getRestaurant(id, menuLimit, reviewLimit);
      dispatch(setSelectedRestaurant(response.data));
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
    enabled: !!id,
  });
};

export const useGetRestaurants = (params: GetRestaurantsParams) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['restaurants', 'list', params],
    queryFn: async () => {
      const response = await restaurantsService.getRestaurants(params);
      dispatch(
        setRestaurants({
          restaurants: response.data.restaurants,
          pagination: response.data.pagination,
          filters: response.data.filters,
        })
      );
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
    refetchOnMount: 'always',
  });
};

export const useGetBestSellerRestaurants = (page: number = 1, limit: number = 6) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['restaurants', 'best-seller', page, limit],
    queryFn: async () => {
      const response = await restaurantsService.getBestSellerRestaurants(page, limit);
      dispatch(
        setBestSellers({
          restaurants: response.data.restaurants,
          pagination: response.data.pagination,
        })
      );
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
    refetchOnMount: 'always',
  });
};

export const useGetSearchRestaurants = (query: string, page: number = 1, limit: number = 6) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['restaurants', 'search', query, page, limit],
    queryFn: async () => {
      const response = await restaurantsService.searchRestaurants(query, page, limit);
      dispatch(
        setSearchResults({
          restaurants: response.data.restaurants,
          pagination: response.data.pagination,
          searchQuery: response.data.searchQuery,
        })
      );
      return response;
    },
    enabled: !!query && query.trim().length > 0,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useGetCategoryRestaurants = (category: string, page: number = 1, limit: number = 6) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['restaurants', 'category', category, page, limit],
    queryFn: async () => {
      const response = await restaurantsService.getRestaurants({
        category,
        page,
        limit,
      });
      dispatch(
        setCategoryRestaurants({
          restaurants: response.data.restaurants,
          pagination: response.data.pagination,
        })
      );
      return response;
    },
    enabled: !!category && category.trim().length > 0,
    staleTime: 1000,
    refetchOnMount: true,
  });
};