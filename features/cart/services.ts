import { http } from '@/lib/api';
import { API_CART_URL } from '@/features/shared/constants/api-url';
import {
  GetCartResponse,
  AddCartItemPayload,
  AddCartItemResponse,
  UpdateCartItemPayload,
  UpdateCartItemResponse,
  DeleteCartItemResponse,
} from './types';

export const cartService = {
  getCart: async (): Promise<GetCartResponse> => {
    return http.get<GetCartResponse>(API_CART_URL);
  },

  addCartItem: async (payload: AddCartItemPayload): Promise<AddCartItemResponse> => {
    return http.post<AddCartItemResponse>(API_CART_URL, payload);
  },

  updateCartItem: async (
    cartItemId: number,
    payload: UpdateCartItemPayload
  ): Promise<UpdateCartItemResponse> => {
    return http.put<UpdateCartItemResponse>(`${API_CART_URL}/${cartItemId}`, payload);
  },

  deleteCartItem: async (cartItemId: number): Promise<DeleteCartItemResponse> => {
    return http.delete<DeleteCartItemResponse>(`${API_CART_URL}/${cartItemId}`);
  },
};