import { http } from '@/lib/api';
import { API_ORDER_URL } from '@/features/shared/constants/api-url';
import { AddOrderPayload, AddOrderResponse, GetOrdersResponse, OrderStatus } from './types';

export const ordersService = {
  getOrders: async (
    status: OrderStatus = 'done',
    page: number = 1,
    limit: number = 5
  ): Promise<GetOrdersResponse> => {
    return http.get<GetOrdersResponse>(
      `${API_ORDER_URL}/my-order?status=${status}&page=${page}&limit=${limit}`
    );
  },

  addOrder: async (payload: AddOrderPayload): Promise<AddOrderResponse> => {
    return http.post<AddOrderResponse>(`${API_ORDER_URL}/checkout`, payload);
  },
};