'use client';

import RestaurantList from '@/features/restaurants/components/restaurant-list';
import Link from 'next/link';
import RestaurantItem from '@/features/restaurants/components/restaurant-item';
import RestaurantSkeleton from '@/features/restaurants/components/restaurant-skeleton';
import { Button } from '@/components/ui/button';
import { useGetRecommendedRestaurants } from '@/features/restaurants/hooks';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { loadMore } from '@/features/restaurants/stores';
import { useMemo } from 'react';

const Recommended = () => {
  const LIMIT = 6;
  const dispatch = useAppDispatch();
  const { isLoading } = useGetRecommendedRestaurants();
  const { recommendations, currentPage, itemsPerPage } = useAppSelector(
    (state) => state.restaurants
  );

  const displayedRestaurants = useMemo(() => {
    return recommendations.slice(0, currentPage * itemsPerPage);
  }, [recommendations, currentPage, itemsPerPage]);

  const hasMore = displayedRestaurants.length < recommendations.length;

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
      <div className="flex-between gap-4">
        <h2 className="font-extrabold text-display-xs md:text-display-md">
          Recommended
        </h2>

        <Link
          href="/restaurants"
          className="text-primary-100 font-extrabold text-md md:text-lg hover:underline transition"
        >
          See All
        </Link>
      </div>

      <RestaurantList>
        {isLoading
          ? Array.from({ length: LIMIT }).map((_, index) => (
              <RestaurantSkeleton key={index} />
            ))
          : displayedRestaurants.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
      </RestaurantList>

      {!isLoading && hasMore && (
        <Button
          className="w-40 self-center"
          variant="outline"
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default Recommended;