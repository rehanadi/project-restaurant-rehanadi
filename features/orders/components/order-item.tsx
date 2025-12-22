'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import OrderMenuItem from './order-menu-item';
import ModalAddReview from '@/features/reviews/components/modal-add-review';
import { Transaction } from '../types';
import { formatCurrency } from '@/features/shared/utils/currency-utils';

interface OrderItemProps {
  order: Transaction;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<{
    restaurantId: number;
    menuIds: number[];
  } | null>(null);

  const handleOpenReviewModal = (restaurantId: number, menuIds: number[]) => {
    setSelectedRestaurant({ restaurantId, menuIds });
    setOpenReviewModal(true);
  };

  return (
    <>
      <div className="shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-6 md:gap-8">
        {order.restaurants.map((restaurant) => (
          <div key={restaurant.restaurant.id} className="flex flex-col gap-3 md:gap-4">
            <Link
              href={`/restaurants/${restaurant.restaurant.id}`}
              className="self-start flex-start gap-2"
            >
              <Image
                src="/icons/store.svg"
                alt={restaurant.restaurant.name}
                width={32}
                height={32}
              />

              <span className="font-bold text-sm md:text-lg">
                {restaurant.restaurant.name}
              </span>
            </Link>

            {restaurant.items.map((item) => (
              <OrderMenuItem key={item.menuId} item={item} />
            ))}

            <Separator />

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <div className="flex flex-col">
                <span className="font-medium text-sm md:text-md">Total</span>
                <span className="font-extrabold text-md md:text-xl">
                  {formatCurrency(restaurant.subtotal)}
                </span>
              </div>

              <Button
                className="w-full md:w-60 h-11 md:h-12"
                onClick={() =>
                  handleOpenReviewModal(
                    restaurant.restaurant.id,
                    restaurant.items.map((item) => item.menuId)
                  )
                }
              >
                Give Review
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedRestaurant && (
        <ModalAddReview
          open={openReviewModal}
          onOpenChange={setOpenReviewModal}
          transactionId={order.transactionId}
          restaurantId={selectedRestaurant.restaurantId}
          menuIds={selectedRestaurant.menuIds}
        />
      )}
    </>
  );
};

export default OrderItem;