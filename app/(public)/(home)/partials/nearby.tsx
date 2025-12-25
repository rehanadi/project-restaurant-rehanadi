'use client';

import { useMemo } from 'react';
import RestaurantList from '@/features/restaurants/components/restaurant-list';
import Link from 'next/link';
import RestaurantItem from '@/features/restaurants/components/restaurant-item';
import RestaurantSkeleton from '@/features/restaurants/components/restaurant-skeleton';
import { Button } from '@/components/ui/button';
import { useGetNearbyRestaurants } from '@/features/restaurants/hooks';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { loadMoreNearby } from '@/features/restaurants/stores';
import { sortRestaurantsByDistance } from '@/features/restaurants/utils';
import { LIMIT } from "@/features/restaurants/constants/restaurant-filters";

const Nearby = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useGetNearbyRestaurants();
  const { nearby, nearbyCurrentPage, nearbyItemsPerPage } = useAppSelector(
    (state) => state.restaurants
  );
  const { latitude, longitude } = useAppSelector((state) => state.location);

  const sortedRestaurants = useMemo(() => {
    if (!latitude || !longitude) return nearby;
    return sortRestaurantsByDistance(nearby, latitude, longitude);
  }, [nearby, latitude, longitude]);

  const displayedRestaurants = useMemo(() => {
    return sortedRestaurants.slice(0, nearbyCurrentPage * nearbyItemsPerPage);
  }, [sortedRestaurants, nearbyCurrentPage, nearbyItemsPerPage]);

  const hasMore = displayedRestaurants.length < sortedRestaurants.length;

  const handleLoadMore = () => {
    dispatch(loadMoreNearby());
  };

  if (!latitude || !longitude) {
    return (
      <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
        <div className="flex-between gap-4">
          <h2 className="font-extrabold text-display-xs md:text-display-md">Nearby</h2>
        </div>

        <div className="flex items-center justify-center py-20">
          <p className="text-lg font-semibold text-neutral-600 text-center">
            Please allow location access to view nearby restaurants
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
      <div className="flex-between gap-4">
        <h2 className="font-extrabold text-display-xs md:text-display-md">Nearby Restaurants</h2>

        <Link
          href="/restaurants"
          className="text-primary-100 font-extrabold text-md md:text-lg hover:underline transition"
        >
          See All
        </Link>
      </div>

      <RestaurantList>
        {isLoading
          ? Array.from({ length: LIMIT }).map((_, index) => <RestaurantSkeleton key={index} />)
          : displayedRestaurants.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} showDistance />
            ))}
      </RestaurantList>

      {!isLoading && hasMore && (
        <Button className="w-40 self-center" variant="outline" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default Nearby;