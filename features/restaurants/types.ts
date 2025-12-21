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
}