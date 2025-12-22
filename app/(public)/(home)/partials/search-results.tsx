'use client';

import { useState, useMemo } from 'react';
import RestaurantList from '@/features/restaurants/components/restaurant-list';
import RestaurantItem from '@/features/restaurants/components/restaurant-item';
import RestaurantSkeleton from '@/features/restaurants/components/restaurant-skeleton';
import { Button } from '@/components/ui/button';
import { useGetSearchRestaurants } from '@/features/restaurants/hooks';
import { useAppSelector } from '@/lib/hooks';

interface SearchResultsProps {
  query: string;
}

const SearchResults = ({ query }: SearchResultsProps) => {
  const [page, setPage] = useState(1);
  const { isLoading } = useGetSearchRestaurants(query, page, 6);
  const { searchResults, searchPagination } = useAppSelector((state) => state.restaurants);

  const showLoadMore = useMemo(() => {
    if (!searchPagination) return false;
    return page < searchPagination.totalPages;
  }, [searchPagination, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
      <div className="flex-between gap-4">
        <h2 className="font-extrabold text-display-xs md:text-display-md">
          Search Results for &quot;{query}&quot;
        </h2>
      </div>

      {isLoading && page === 1 ? (
        <RestaurantList>
          {Array.from({ length: 6 }).map((_, index) => (
            <RestaurantSkeleton key={index} />
          ))}
        </RestaurantList>
      ) : searchResults.length === 0 ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-lg font-semibold text-neutral-600 text-center">
            No restaurants found for &quot;{query}&quot;
          </p>
        </div>
      ) : (
        <>
          <RestaurantList>
            {searchResults.map((restaurant) => (
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
  );
};

export default SearchResults;