import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ordersService } from './services';
import { getErrorMessage } from '@/lib/api';

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