import { GetRestaurantsParams, Restaurant } from './types';
import haversineDistance from 'haversine-distance';

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

export const calculateDistance = (
  userLat: number,
  userLong: number,
  restaurantLat: number,
  restaurantLong: number
): number => {
  const userLocation = { latitude: userLat, longitude: userLong };
  const restaurantLocation = { latitude: restaurantLat, longitude: restaurantLong };

  // haversine returns distance in meters
  const distanceInMeters = haversineDistance(userLocation, restaurantLocation);

  // Convert to kilometers and round to 2 decimal places
  const distanceInKm = distanceInMeters / 1000;
  return Math.round(distanceInKm * 100) / 100;
};

export const sortRestaurantsByDistance = (
  restaurants: Restaurant[],
  userLat: number,
  userLong: number
): Restaurant[] => {
  return restaurants
    .map((restaurant) => ({
      ...restaurant,
      distance: calculateDistance(userLat, userLong, restaurant.lat, restaurant.long),
    }))
    .sort((a, b) => (a.distance || 0) - (b.distance || 0));
};