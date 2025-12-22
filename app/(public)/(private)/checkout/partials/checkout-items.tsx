'use client';

import { Button } from '@/components/ui/button';
import CartMenuItem from '@/features/cart/components/cart-menu-item';
import Image from 'next/image';
import Link from 'next/link';
import { CartGroup } from '@/features/cart/types';

interface CheckoutItemsProps {
  cartGroups: CartGroup[];
}

const CheckoutItems = ({ cartGroups }: CheckoutItemsProps) => {
  return (
    <>
      {cartGroups.map((group) => (
        <div
          key={group.restaurant.id}
          className="shadow-light bg-white w-full p-4 md:p-5 rounded-2xl flex flex-col gap-4 md:gap-5"
        >
          <div className="flex-between gap-4">
            <div className="flex-start gap-1 md:gap-2">
              <Image
                src="/icons/store.svg"
                alt={group.restaurant.name}
                width={32}
                height={32}
              />

              <span className="font-bold text-md md:text-lg">
                {group.restaurant.name}
              </span>
            </div>

            <Button variant="outline" className="w-26.5 md:w-30 h-9 md:h-10" asChild>
              <Link href={`/restaurants/${group.restaurant.id}`}>Add item</Link>
            </Button>
          </div>

          {group.items.map((item) => (
            <CartMenuItem key={item.id} cartItem={item} onUpdate={() => {}} />
          ))}
        </div>
      ))}
    </>
  );
};

export default CheckoutItems;