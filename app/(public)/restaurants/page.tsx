'use client';

import { useState, useEffect, useMemo } from 'react';
import Section from '@/components/layouts/section';
import RestaurantList from '@/features/restaurants/components/restaurant-list';
import RestaurantItem from '@/features/restaurants/components/restaurant-item';
import RestaurantSkeleton from '@/features/restaurants/components/restaurant-skeleton';
import RestaurantFilter from './partials/restaurant-filter';
import { Button } from '@/components/ui/button';
import { useGetRestaurants } from '@/features/restaurants/hooks';
import { useDebounce } from '@/features/shared/hooks/use-debounce';

const RestaurantsPage = () => {
  const [range, setRange] = useState<number | undefined>(0.5);
  const [priceMin, setPriceMin] = useState<number | undefined>(undefined);
  const [priceMax, setPriceMax] = useState<number | undefined>(undefined);
  const [rating, setRating] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const debouncedPriceMin = useDebounce(priceMin, 500);
  const debouncedPriceMax = useDebounce(priceMax, 500);

  const { data, isLoading } = useGetRestaurants({
    range: range,
    priceMin: debouncedPriceMin,
    priceMax: debouncedPriceMax,
    rating: rating || undefined,
    page,
    limit: 8,
  });

  const { restaurants = [], pagination } = data?.data || {};

  // Reset page to 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [range, debouncedPriceMin, debouncedPriceMax, rating]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const showLoadMore = useMemo(() => {
    if (!pagination) return false;
    return page < pagination.totalPages;
  }, [pagination, page]);

  if (isLoading && page === 1) {
    return (
      <Section title="All Restaurant">
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
          <RestaurantFilter
            range={range}
            priceMin={priceMin}
            priceMax={priceMax}
            rating={rating}
            onRangeChange={setRange}
            onPriceMinChange={setPriceMin}
            onPriceMaxChange={setPriceMax}
            onRatingChange={setRating}
          />

          <div className="md:flex-1 flex flex-col gap-4 md:gap-5">
            <RestaurantList className="md:grid-cols-1 lg:grid-cols-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <RestaurantSkeleton key={index} />
              ))}
            </RestaurantList>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section title="All Restaurant">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
        <RestaurantFilter
          range={range}
          priceMin={priceMin}
          priceMax={priceMax}
          rating={rating}
          onRangeChange={setRange}
          onPriceMinChange={setPriceMin}
          onPriceMaxChange={setPriceMax}
          onRatingChange={setRating}
        />

        <div className="md:flex-1 flex flex-col gap-4 md:gap-5">
          {restaurants.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <p className="text-lg font-semibold text-neutral-600">No restaurants found</p>
            </div>
          ) : (
            <>
              <RestaurantList className="md:grid-cols-1 lg:grid-cols-2">
                {restaurants.map((restaurant) => (
                  <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                ))}
              </RestaurantList>

              {showLoadMore && (
                <Button
                  className="w-40 self-center"
                  variant="outline"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Load More'}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default RestaurantsPage;