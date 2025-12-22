'use client';

import { Button } from '@/components/ui/button';
import SummaryItem from '@/features/checkout/components/summary-item';
import { formatCurrency } from '@/features/shared/utils/currency-utils';
import { useAppSelector } from '@/lib/hooks';

interface PaymentSummaryProps {
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  totalPrice: number;
  onBuy: () => void;
  isDisabled: boolean;
  isPending: boolean;
}

const PaymentSummary = ({
  subtotal,
  deliveryFee,
  serviceFee,
  totalPrice,
  onBuy,
  isDisabled,
  isPending,
}: PaymentSummaryProps) => {
  const { summary } = useAppSelector((state) => state.cart);

  return (
    <div className="px-4 md:px-5 flex flex-col gap-4">
      <h2 className="font-extrabold text-md md:text-lg">Payment Summary</h2>

      <SummaryItem label={`Price (${summary.totalItems} items)`} value={formatCurrency(subtotal)} />

      <SummaryItem label="Delivery Fee" value={formatCurrency(deliveryFee)} />

      <SummaryItem label="Service Fee" value={formatCurrency(serviceFee)} />

      <SummaryItem label="Total" value={formatCurrency(totalPrice)} isTotal />

      <Button
        className="w-full h-11 md:h-12"
        onClick={onBuy}
        disabled={isDisabled || isPending}
      >
        {isPending ? 'Processing...' : 'Buy'}
      </Button>
    </div>
  );
};

export default PaymentSummary;