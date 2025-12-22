import { http } from '@/lib/api';
import { API_ORDER_URL } from '@/features/shared/constants/api-url';
import { AddOrderPayload, AddOrderResponse } from './types';

export const ordersService = {
  addOrder: async (payload: AddOrderPayload): Promise<AddOrderResponse> => {
    return http.post<AddOrderResponse>(`${API_ORDER_URL}/checkout`, payload);
  },
};