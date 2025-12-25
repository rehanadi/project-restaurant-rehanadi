'use client';

import { useState, useMemo, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import RestaurantList from '@/features/restaurants/components/restaurant-list';
import Link from 'next/link';
import RestaurantItem from '@/features/restaurants/components/restaurant-item';
import RestaurantSkeleton from '@/features/restaurants/components/restaurant-skeleton';
import { Button } from '@/components/ui/button';
import { useGetCategoryRestaurants } from '@/features/restaurants/hooks';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setSelectedCategory, resetCategoryRestaurants } from '@/features/restaurants/stores';
import { Label } from '@/components/ui/label';
import { restaurantCategoryData } from '@/features/categories/constants/restaurant-category-data';
import { LIMIT } from '@/features/restaurants/constants/restaurant-filters';
import Recommended from './recommended';
import { cn } from '@/lib/utils';

const RestaurantCategory = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { selectedCategory, categoryRestaurants, categoryPagination } = useAppSelector(
    (state) => state.restaurants
  );

  const { isLoading } = useGetCategoryRestaurants(selectedCategory || '', page, LIMIT);

  const showLoadMore = useMemo(() => {
    if (!categoryPagination) return false;
    return page < categoryPagination.totalPages;
  }, [categoryPagination, page]);

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      // Unselect category
      dispatch(setSelectedCategory(null));
      dispatch(resetCategoryRestaurants());
      setPage(1);
    } else {
      // Select new category - reset data first
      dispatch(resetCategoryRestaurants());
      setPage(1);
      // Invalidate all category queries to force fresh fetch
      queryClient.invalidateQueries({ queryKey: ['restaurants', 'category'] });
      dispatch(setSelectedCategory(categoryName));
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  // Reset when component unmounts
  useEffect(() => {
    return () => {
      dispatch(resetCategoryRestaurants());
    };
  }, [dispatch]);

  return (
    <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-4">
        <Label className="self-start">Select Category</Label>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {restaurantCategoryData.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className={cn(
                'h-12 md:h-14',
                selectedCategory === category.name && 'bg-neutral-200'
              )}
              onClick={() => handleCategorySelect(category.name)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {selectedCategory ? (
        <>
          <div className="flex-between gap-4">
            <h2 className="font-extrabold text-display-xs md:text-display-md">
              {selectedCategory}
            </h2>

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
              : categoryRestaurants.map((restaurant) => (
                  <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                ))}
          </RestaurantList>

          {!isLoading && categoryRestaurants.length === 0 && (
            <div className="flex-center py-20">
              <p className="text-lg md:text-xl font-semibold text-neutral-600">
                No restaurants found in this category
              </p>
            </div>
          )}

          {!isLoading && showLoadMore && (
            <Button
              className="w-40 self-center"
              variant="outline"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              Load More
            </Button>
          )}
        </>
      ) : (
        <Recommended />
      )}
    </div>
  );
};

export default RestaurantCategory;