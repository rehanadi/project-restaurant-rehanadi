import { GetRestaurantsParams } from './types';

export const buildQueryParams = (params: GetRestaurantsParams): string => {
  const queryParams = new URLSearchParams();

  if (params.range) queryParams.append('range', params.range.toString());
  if (params.priceMin) queryParams.append('priceMin', params.priceMin.toString());
  if (params.priceMax) queryParams.append('priceMax', params.priceMax.toString());
  if (params.rating) queryParams.append('rating', params.rating.toString());
  if (params.category) queryParams.append('category', params.category);
  if (params.page) queryParams.append('page', params.page.toString());
  if (params.limit) queryParams.append('limit', params.limit.toString());

  return queryParams.toString();
};