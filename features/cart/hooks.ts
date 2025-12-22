import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { cartService } from './services';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCart } from './stores';
import { getErrorMessage } from '@/lib/api';
import { CACHE_DURATION } from '@/features/shared/constants/duration';
import { GetCartResponse } from './types';

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
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: cartService.addCartItem,
    onMutate: async (variables) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['cart'] });

      const previousCart = queryClient.getQueryData<GetCartResponse>(['cart']);

      if (previousCart) {
        const newCart = { ...previousCart };
        const restaurantIndex = newCart.data.cart.findIndex(
          (group) => group.restaurant.id === variables.restaurantId
        );

        if (restaurantIndex !== -1) {
          const existingItemIndex = newCart.data.cart[restaurantIndex].items.findIndex(
            (item) => item.menu.id === variables.menuId
          );

          if (existingItemIndex !== -1) {
            const item = newCart.data.cart[restaurantIndex].items[existingItemIndex];
            item.quantity += variables.quantity;
            item.itemTotal = item.menu.price * item.quantity;
          }
        }

        queryClient.setQueryData(['cart'], newCart);
        dispatch(setCart(newCart.data));
      }

      return { previousCart };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item added to cart successfully');
    },
    onError: (error, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart);
        dispatch(setCart(context.previousCart.data));
      }
      toast.error(getErrorMessage(error));
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: ({ cartItemId, quantity }: { cartItemId: number; quantity: number }) =>
      cartService.updateCartItem(cartItemId, { quantity }),
    onMutate: async (variables) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['cart'] });

      const previousCart = queryClient.getQueryData<GetCartResponse>(['cart']);

      if (previousCart) {
        const newCart = { ...previousCart };
        
        for (const group of newCart.data.cart) {
          const itemIndex = group.items.findIndex((item) => item.id === variables.cartItemId);
          
          if (itemIndex !== -1) {
            const item = group.items[itemIndex];
            item.quantity = variables.quantity;
            item.itemTotal = item.menu.price * variables.quantity;

            group.subtotal = group.items.reduce((sum, item) => sum + item.itemTotal, 0);

            newCart.data.summary.totalItems = newCart.data.cart.reduce(
              (sum, g) => sum + g.items.reduce((s, i) => s + i.quantity, 0),
              0
            );
            newCart.data.summary.totalPrice = newCart.data.cart.reduce(
              (sum, g) => sum + g.subtotal,
              0
            );

            break;
          }
        }

        queryClient.setQueryData(['cart'], newCart);
        dispatch(setCart(newCart.data));
      }

      return { previousCart };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item updated successfully');
    },
    onError: (error, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart);
        dispatch(setCart(context.previousCart.data));
      }
      toast.error(getErrorMessage(error));
    },
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: cartService.deleteCartItem,
    onMutate: async (cartItemId) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['cart'] });

      const previousCart = queryClient.getQueryData<GetCartResponse>(['cart']);

      if (previousCart) {
        const newCart = { ...previousCart };
        
        newCart.data.cart = newCart.data.cart
          .map((group) => ({
            ...group,
            items: group.items.filter((item) => item.id !== cartItemId),
          }))
          .filter((group) => group.items.length > 0);

        for (const group of newCart.data.cart) {
          group.subtotal = group.items.reduce((sum, item) => sum + item.itemTotal, 0);
        }

        newCart.data.summary.totalItems = newCart.data.cart.reduce(
          (sum, g) => sum + g.items.reduce((s, i) => s + i.quantity, 0),
          0
        );
        newCart.data.summary.totalPrice = newCart.data.cart.reduce(
          (sum, g) => sum + g.subtotal,
          0
        );
        newCart.data.summary.restaurantCount = newCart.data.cart.length;

        queryClient.setQueryData(['cart'], newCart);
        dispatch(setCart(newCart.data));
      }

      return { previousCart };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item removed from cart successfully');
    },
    onError: (error, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart);
        dispatch(setCart(context.previousCart.data));
      }
      toast.error(getErrorMessage(error));
    },
  });
};