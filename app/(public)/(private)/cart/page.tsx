'use client';

import Section from '@/components/layouts/section';
import CartList from '@/features/cart/components/cart-list';
import CartItem from '@/features/cart/components/cart-item';
import CartItemSkeleton from '@/features/cart/components/cart-item-skeleton';
import { useGetCart } from '@/features/cart/hooks';
import { useAppSelector } from '@/lib/hooks';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CartPage = () => {
  const { isLoading, refetch } = useGetCart();
  const { cart } = useAppSelector((state) => state.cart);

  if (isLoading) {
    return (
      <Section title="My Cart" className="max-w-200">
        <CartList>
          <CartItemSkeleton />
          <CartItemSkeleton />
        </CartList>
      </Section>
    );
  }

  if (cart.length === 0) {
    return (
      <Section title="My Cart" className="max-w-200">
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <p className="text-lg md:text-xl font-semibold text-neutral-600">
            Your cart is empty
          </p>
          <Button asChild className="px-6">
            <Link href="/restaurants">Browse Restaurants</Link>
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section title="My Cart" className="max-w-200">
      <CartList>
        {cart.map((group) => (
          <CartItem key={group.restaurant.id} cartGroup={group} onUpdate={refetch} />
        ))}
      </CartList>
    </Section>
  );
};

export default CartPage;