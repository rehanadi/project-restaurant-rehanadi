import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CartMenuItem from './cart-menu-item';
import { Separator } from '@/components/ui/separator';
import { CartGroup } from '../types';
import { formatCurrency } from '@/features/shared/utils/currency-utils';

interface CartItemProps {
  cartGroup: CartGroup;
  onUpdate: () => void;
}

const CartItem = ({ cartGroup, onUpdate }: CartItemProps) => {
  return (
    <div className="shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-3 md:gap-5">
      <Link
        href={`/restaurants/${cartGroup.restaurant.id}`}
        className="flex-start gap-1 md:gap-2"
      >
        <Image
          src="/icons/store.svg"
          alt={cartGroup.restaurant.name}
          width={32}
          height={32}
        />

        <span className="font-bold text-md md:text-lg">
          {cartGroup.restaurant.name}
        </span>

        <ChevronRight className="size-5 md:size-6" />
      </Link>

      {cartGroup.items.map((item) => (
        <CartMenuItem key={item.id} cartItem={item} onUpdate={onUpdate} />
      ))}

      <Separator variant="dashed" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-md">Total</span>
          <span className="font-extrabold text-lg md:text-xl">
            {formatCurrency(cartGroup.subtotal)}
          </span>
        </div>

        <Button className="w-full md:w-60 h-11 md:h-12" asChild>
          <Link href="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;