'use client';

import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { useAppSelector } from '@/lib/hooks';
import { formatCurrency } from '@/features/shared/utils/currency-utils';
import Link from 'next/link';

const CheckoutSummary = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { summary } = useAppSelector((state) => state.cart);

  if (!isAuthenticated || summary.totalItems === 0) return null;

  return (
    <div className="shadow-light fixed bottom-0 inset-x-0 bg-white">
      <div className="custom-container w-full h-16 md:h-20 flex-between gap-4">
        <div className="flex flex-col gap-0.5">
          <div className="flex-start gap-1 md:gap-2">
            <Icon icon="lets-icons:bag-fill" className="size-5 md:size-6" />
            <span className="text-sm md:text-md">
              {summary.totalItems} Items
            </span>
          </div>

          <span className="font-extrabold text-md md:text-xl">
            {formatCurrency(summary.totalPrice)}
          </span>
        </div>

        <Button className="w-40 md:w-57.6 h-10 md:h-11" asChild>
          <Link href="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;