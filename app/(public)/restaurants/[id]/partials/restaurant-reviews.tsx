'use client';

import { Button } from '@/components/ui/button';
import ReviewList from '@/features/reviews/components/review-list';
import ReviewItem from '@/features/reviews/components/review-item';
import ReviewSkeleton from '@/features/reviews/components/review-skeleton';
import Rating from '@/features/shared/components/rating';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { loadMoreReviews } from '@/features/restaurants/stores';

const RestaurantReviews = () => {
  const REVIEW_LIMIT = 6;
  const dispatch = useAppDispatch();
  const { selectedRestaurant, reviewLimit } = useAppSelector((state) => state.restaurants);

  const hasMore = selectedRestaurant ? reviewLimit < selectedRestaurant.totalReviews : false;
  const isLoading = !selectedRestaurant;

  const handleLoadMore = () => {
    dispatch(loadMoreReviews());
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <h2 className="font-extrabold text-display-xs md:text-display-lg">Review</h2>

        {selectedRestaurant && (
          <Rating
            rating={`${selectedRestaurant.averageRating} (${selectedRestaurant.totalReviews} Ulasan)`}
            textClassName="font-extrabold text-md md:text-xl"
          />
        )}
      </div>

      <ReviewList>
        {isLoading
          ? Array.from({ length: REVIEW_LIMIT }).map((_, index) => (
              <ReviewSkeleton key={index} />
            ))
          : selectedRestaurant?.reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
      </ReviewList>

      {!isLoading && hasMore && (
        <Button className="w-40 self-center" variant="outline" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default RestaurantReviews;