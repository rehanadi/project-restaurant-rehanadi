'use client';

import RestaurantContainer from './partials/restaurant-container';
import RestaurantImages from './partials/restaurant-images';
import RestaurantInfo from './partials/restaurant-info';
import RestaurantMenus from './partials/restaurant-menus';
import RestaurantReviews from './partials/restaurant-reviews';
import CheckoutSummary from './partials/checkout-summary';
import { Separator } from '@/components/ui/separator';
import { useGetRestaurant } from '@/features/restaurants/hooks';
import { useParams } from 'next/navigation';

const RestaurantPage = () => {
  const params = useParams();
  const restaurantId = Number(params.id);

  useGetRestaurant(restaurantId);

  return (
    <RestaurantContainer>
      <RestaurantImages />
      <RestaurantInfo />
      <Separator />
      <RestaurantMenus />
      <Separator />
      <RestaurantReviews />
      <CheckoutSummary />
    </RestaurantContainer>
  );
};

export default RestaurantPage;