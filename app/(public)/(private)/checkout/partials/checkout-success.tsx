'use client';

import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Logo from '@/features/shared/components/logo';
import SummaryItem from '@/features/checkout/components/summary-item';
import { Button } from '@/components/ui/button';
import { Transaction } from '@/features/orders/types';
import { formatCurrency } from '@/features/shared/utils/currency-utils';
import { formatDateTime } from '@/features/shared/utils/time-utils';
import Link from 'next/link';

interface CheckoutSuccessProps {
  transaction: Transaction;
}

const CheckoutSuccess = ({ transaction }: CheckoutSuccessProps) => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Logo />

      <div className="w-full shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <Image src="/icons/success.svg" alt="Success" width={64} height={64} />

          <h1 className="font-extrabold text-lg md:text-xl text-center">
            Payment Success
          </h1>

          <p className="text-sm md:text-md text-center">
            Your payment has been successfully processed.
          </p>
        </div>

        <Separator variant="dashed" />

        <SummaryItem label="Date" value={formatDateTime(transaction.createdAt)} />

        <SummaryItem label="Payment Method" value={transaction.paymentMethod} />

        <SummaryItem
          label={`Price (${transaction.restaurants.reduce((sum, r) => sum + r.items.reduce((s, i) => s + i.quantity, 0), 0)} items)`}
          value={formatCurrency(transaction.pricing.subtotal)}
        />

        <SummaryItem
          label="Delivery Fee"
          value={formatCurrency(transaction.pricing.deliveryFee)}
        />

        <SummaryItem
          label="Service Fee"
          value={formatCurrency(transaction.pricing.serviceFee)}
        />

        <Separator variant="dashed" />

        <SummaryItem
          label="Total"
          value={formatCurrency(transaction.pricing.totalPrice)}
          isTotal
        />

        <Button className="w-full h-11 md:h-12" asChild>
          <Link href="/orders">See My Orders</Link>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;