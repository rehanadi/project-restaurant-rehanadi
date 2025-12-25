'use client';

import { useState, useMemo } from 'react';
import RestaurantList from '@/features/restaurants/components/restaurant-list';
import Link from 'next/link';
import RestaurantItem from '@/features/restaurants/components/restaurant-item';
import RestaurantSkeleton from '@/features/restaurants/components/restaurant-skeleton';
import { Button } from '@/components/ui/button';
import { useGetBestSellerRestaurants } from '@/features/restaurants/hooks';
import { useAppSelector } from '@/lib/hooks';
import { LIMIT } from "@/features/restaurants/constants/restaurant-filters";

const BestSeller = () => {
  const [page, setPage] = useState(1);
  const { isLoading } = useGetBestSellerRestaurants(page, LIMIT);
  const { bestSellers, bestSellerPagination } = useAppSelector((state) => state.restaurants);

  const showLoadMore = useMemo(() => {
    if (!bestSellerPagination) return false;
    return page < bestSellerPagination.totalPages;
  }, [bestSellerPagination, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
      <div className="flex-between gap-4">
        <h2 className="font-extrabold text-display-xs md:text-display-md">Best Seller</h2>

        <Link
          href="/restaurants"
          className="text-primary-100 font-extrabold text-md md:text-lg hover:underline transition"
        >
          See All
        </Link>
      </div>

      <RestaurantList>
        {isLoading && page === 1
          ? Array.from({ length: LIMIT }).map((_, index) => <RestaurantSkeleton key={index} />)
          : bestSellers.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
      </RestaurantList>

      {!isLoading && showLoadMore && (
        <Button
          className="w-40 self-center"
          variant="outline"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </div>
  );
};

export default BestSeller;