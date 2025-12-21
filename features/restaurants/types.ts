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

export interface RecommendedRestaurantsResponse {
  success: boolean;
  message: string;
  data: {
    recommendations: Restaurant[];
    message: string;
  };
}

export interface RestaurantsState {
  recommendations: Restaurant[];
  currentPage: number;
  itemsPerPage: number;
}