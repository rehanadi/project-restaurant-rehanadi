import { Menu } from '@/features/menus/types';

export interface CartRestaurant {
  id: number;
  name: string;
  logo: string;
}

export interface CartItem {
  id: number;
  menu: Menu;
  quantity: number;
  itemTotal: number;
}

export interface CartGroup {
  restaurant: CartRestaurant;
  items: CartItem[];
  subtotal: number;
}

export interface CartSummary {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
}

export interface CartData {
  cart: CartGroup[];
  summary: CartSummary;
}

export interface GetCartResponse {
  success: boolean;
  message: string;
  data: CartData;
}

export interface AddCartItemPayload {
  restaurantId: number;
  menuId: number;
  quantity: number;
}

export interface UpdateCartItemPayload {
  quantity: number;
}

export interface AddCartItemResponse {
  success: boolean;
  message: string;
  data: {
    cartItem: CartItem & {
      restaurant: CartRestaurant;
    };
  };
}

export interface UpdateCartItemResponse {
  success: boolean;
  message: string;
  data: {
    cartItem: CartItem & {
      restaurant: CartRestaurant;
    };
  };
}

export interface DeleteCartItemResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface DeleteCartResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface CartState {
  cart: CartGroup[];
  summary: CartSummary;
}