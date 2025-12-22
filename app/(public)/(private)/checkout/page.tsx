'use client';

import { useState, useMemo } from 'react';
import Section from '@/components/layouts/section';
import DeliveryAddress from './partials/delivery-address';
import CheckoutItems from './partials/checkout-items';
import PaymentMethod from './partials/payment-method';
import PaymentSummary from './partials/payment-summary';
import CheckoutContainer from './partials/checkout-container';
import CheckoutSuccess from './partials/checkout-success';
import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/lib/hooks';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAddOrder } from '@/features/orders/hooks';
import { useDeleteCart } from '@/features/cart/hooks';
import { Transaction } from '@/features/orders/types';

const CheckoutPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { cart, summary } = useAppSelector((state) => state.cart);
  const { mutate: addOrder, isPending: isOrdering } = useAddOrder();
  const { mutate: deleteCart } = useDeleteCart();

  const [deliveryAddress, setDeliveryAddress] = useState(
    'Jl. Sudirman No. 25, Jakarta Pusat, 10220'
  );
  const [notes, setNotes] = useState('Please ring the doorbell');
  const [paymentMethod, setPaymentMethod] = useState('Bank Negara Indonesia');
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const DELIVERY_FEE = 10000;
  const SERVICE_FEE = 1000;

  const totalPrice = useMemo(() => {
    return summary.totalPrice + DELIVERY_FEE + SERVICE_FEE;
  }, [summary.totalPrice]);

  const isDisabled = useMemo(() => {
    return !deliveryAddress || !user?.phone || cart.length === 0 || !paymentMethod;
  }, [deliveryAddress, user?.phone, cart.length, paymentMethod]);

  const handleBuy = () => {
    if (isDisabled) return;

    const payload = {
      restaurants: cart.map((group) => ({
        restaurantId: group.restaurant.id,
        items: group.items.map((item) => ({
          menuId: item.menu.id,
          quantity: item.quantity,
        })),
      })),
      deliveryAddress,
      phone: user!.phone,
      paymentMethod,
      notes,
    };

    addOrder(payload, {
      onSuccess: (data) => {
        setTransaction(data.data.transaction);
        deleteCart();
      },
    });
  };

  if (transaction) {
    return (
      <Section className="max-w-107 pt-8 md:pt-24">
        <CheckoutSuccess transaction={transaction} />
      </Section>
    );
  }

  if (cart.length === 0) {
    return (
      <Section title="Checkout" className="max-w-250 md:gap-6">
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
    <Section title="Checkout" className="max-w-250 md:gap-6">
      <CheckoutContainer
        main={
          <>
            <DeliveryAddress
              address={deliveryAddress}
              phone={user?.phone || ''}
              onChangeAddress={setDeliveryAddress}
            />
            <CheckoutItems cartGroups={cart} />
          </>
        }
        sidebar={
          <>
            <PaymentMethod value={paymentMethod} onChange={setPaymentMethod} />
            <Separator variant="dashed" />
            <PaymentSummary
              subtotal={summary.totalPrice}
              deliveryFee={DELIVERY_FEE}
              serviceFee={SERVICE_FEE}
              totalPrice={totalPrice}
              onBuy={handleBuy}
              isDisabled={isDisabled}
              isPending={isOrdering}
            />
          </>
        }
      />
    </Section>
  );
};

export default CheckoutPage;