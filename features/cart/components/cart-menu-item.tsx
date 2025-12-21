'use client';

import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { CartItem } from '../types';
import { formatCurrency } from '@/features/shared/utils/currency-utils';
import { useUpdateCartItem, useDeleteCartItem } from '../hooks';

interface CartMenuItemProps {
  cartItem: CartItem;
  onUpdate: () => void;
}

const CartMenuItem = ({ cartItem, onUpdate }: CartMenuItemProps) => {
  const { mutate: updateCartItem, isPending: isUpdating } = useUpdateCartItem();
  const { mutate: deleteCartItem, isPending: isDeleting } = useDeleteCartItem();

  const handleIncrement = () => {
    updateCartItem(
      {
        cartItemId: cartItem.id,
        quantity: cartItem.quantity + 1,
      },
      {
        onSuccess: () => {
          onUpdate();
        },
      }
    );
  };

  const handleDecrement = () => {
    if (cartItem.quantity === 1) {
      deleteCartItem(cartItem.id, {
        onSuccess: () => {
          onUpdate();
        },
      });
    } else {
      updateCartItem(
        {
          cartItemId: cartItem.id,
          quantity: cartItem.quantity - 1,
        },
        {
          onSuccess: () => {
            onUpdate();
          },
        }
      );
    }
  };

  const isPending = isUpdating || isDeleting;

  return (
    <div className="flex-between gap-4">
      <div className="flex-start gap-4.25">
        <div className="size-16 md:size-20 rounded-xl overflow-hidden relative">
          <Image
            src={cartItem.menu.image!}
            alt={cartItem.menu.foodName}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-md">
            {cartItem.menu.foodName}
          </span>
          <span className="font-extrabold text-md md:text-lg">
            {formatCurrency(cartItem.menu.price)}
          </span>
        </div>
      </div>

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
    </div>
  );
};

export default CartMenuItem;