import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { cartService } from './services';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCart } from './stores';
import { getErrorMessage } from '@/lib/api';
import { CACHE_DURATION } from '@/features/shared/constants/duration';

export const useGetCart = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await cartService.getCart();
      dispatch(setCart(response.data));
      return response;
    },
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
    enabled: isAuthenticated,
    refetchOnMount: 'always',
  });
};

export const useAddCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartService.addCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item added to cart successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ cartItemId, quantity }: { cartItemId: number; quantity: number }) =>
      cartService.updateCartItem(cartItemId, { quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item updated successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartService.deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item removed from cart successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};