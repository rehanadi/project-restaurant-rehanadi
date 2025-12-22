import { Menu } from '@/features/menus/types';
import { Review } from '@/features/reviews/types';

export interface SampleMenu {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  lat: number;
  long: number;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  sampleMenus: SampleMenu[];
  isFrequentlyOrdered: boolean;
  distance?: number;
}

export interface RestaurantDetail {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  coordinates: {
    lat: number;
    long: number;
  };
  logo: string;
  images: string[];
  category: string;
  totalMenus: number;
  totalReviews: number;
  menus: Menu[];
  reviews: Review[];
}

export interface RecommendedRestaurantsResponse {
  success: boolean;
  message: string;
  data: {
    recommendations: Restaurant[];
    message: string;
  };
}

export interface RestaurantDetailResponse {
  success: boolean;
  message: string;
  data: RestaurantDetail;
}

export interface RestaurantsState {
  recommendations: Restaurant[];
  currentPage: number;
  itemsPerPage: number;
  selectedRestaurant: RestaurantDetail | null;
  menuLimit: number;
  reviewLimit: number;
  restaurants: Restaurant[];
  pagination: RestaurantPagination;
  filters: RestaurantFilters;
  nearby: Restaurant[];
  nearbyCurrentPage: number;
  nearbyItemsPerPage: number;
  bestSellers: Restaurant[];
  bestSellerPagination: RestaurantPagination;
}

export interface NearbyState {
  nearby: Restaurant[];
  currentPage: number;
  itemsPerPage: number;
}

export interface BestSellerState {
  bestSellers: Restaurant[];
  pagination: RestaurantPagination;
}

export interface BestSellerRestaurantsResponse {
  success: boolean;
  message: string;
  data: {
    restaurants: Restaurant[];
    pagination: RestaurantPagination;
  };
}

export interface RestaurantPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface RestaurantFilters {
  range: number;
  priceMin: number;
  priceMax: number;
  rating: number | null;
  category: string | null;
}

export interface GetRestaurantsResponse {
  success: boolean;
  message: string;
  data: {
    restaurants: Restaurant[];
    pagination: RestaurantPagination;
    filters: RestaurantFilters;
  };
}

export interface GetRestaurantsParams {
  range?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  category?: string;
  page?: number;
  limit?: number;
}