'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from '../types';
import { Minus, Plus } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import {
  useAddCartItem,
  useUpdateCartItem,
  useDeleteCartItem,
} from '@/features/cart/hooks';
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { formatCurrency } from '@/features/shared/utils/currency-utils';

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const params = useParams();
  const restaurantId = Number(params.id);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { cart } = useAppSelector((state) => state.cart);
  const { mutate: addCartItem, isPending: isAdding } = useAddCartItem();
  const { mutate: updateCartItem, isPending: isUpdating } = useUpdateCartItem();
  const { mutate: deleteCartItem, isPending: isDeleting } = useDeleteCartItem();

  const cartItem = useMemo(() => {
    const restaurantCart = cart.find((c) => c.restaurant.id === restaurantId);
    if (!restaurantCart) return null;
    return restaurantCart.items.find((item) => item.menu.id === menu.id);
  }, [cart, restaurantId, menu.id]);

  const handleAdd = () => {
    addCartItem({
      restaurantId,
      menuId: menu.id,
      quantity: 1,
    });
  };

  const handleIncrement = () => {
    if (!cartItem) return;
    updateCartItem({
      cartItemId: cartItem.id,
      quantity: cartItem.quantity + 1,
    });
  };

  const handleDecrement = () => {
    if (!cartItem) return;

    if (cartItem.quantity === 1) {
      deleteCartItem(cartItem.id);
    } else {
      updateCartItem({
        cartItemId: cartItem.id,
        quantity: cartItem.quantity - 1,
      });
    }
  };

  const isPending = isAdding || isUpdating || isDeleting;

  return (
    <div className="shadow-light rounded-2xl overflow-hidden">
      <div className="w-full aspect-square overflow-hidden relative">
        <Image
          src={menu.image!}
          alt={menu.foodName}
          fill
          className="object-cover object-center hover:scale-110 transition"
        />
      </div>

      <div className="p-3 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex flex-col">
          <h4 className="font-medium text-sm md:text-md">{menu.foodName}</h4>

          <p className="font-extrabold text-md md:text-lg">
            {formatCurrency(menu.price)}
          </p>
        </div>

        {isAuthenticated && (
          <>
            {cartItem ? (
              <div className="flex-start gap-4">
                <Button
                  variant="outline"
                  className="size-9 md:size-10 rounded-full"
                  onClick={handleDecrement}
                  disabled={isPending}
                >
                  <Minus className="size-5 md:size-6" />
                </Button>
                <span className="font-semibold text-md md:text-lg">
                  {cartItem.quantity}
                </span>
                <Button
                  variant="default"
                  className="size-9 md:size-10 rounded-full"
                  onClick={handleIncrement}
                  disabled={isPending}
                >
                  <Plus className="size-5 md:size-6" />
                </Button>
              </div>
            ) : (
              <Button
                className="w-full md:w-[79px] h-9 md:h-10"
                onClick={handleAdd}
                disabled={isPending}
              >
                Add
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MenuItem;