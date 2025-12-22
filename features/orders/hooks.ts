import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ordersService } from './services';
import { getErrorMessage } from '@/lib/api';
import { CACHE_DURATION } from '@/features/shared/constants/duration';
import { OrderStatus } from './types';
import { useAppDispatch } from '@/lib/hooks';
import { setOrders } from './stores';

export const useGetOrders = (status: OrderStatus = 'done', page: number = 1, limit: number = 5) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['orders', status, page, limit],
    queryFn: async () => {
      const response = await ordersService.getOrders(status, page, limit);
      dispatch(
        setOrders({
          orders: response.data.orders,
          pagination: response.data.pagination,
          filter: response.data.filter,
        })
      );
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
    refetchOnMount: 'always',
  });
};

export const useAddOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ordersService.addOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Order placed successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};