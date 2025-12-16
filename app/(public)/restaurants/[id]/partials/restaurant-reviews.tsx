import { Button } from "@/components/ui/button";
import ReviewList from "@/features/reviews/components/review-list";
import ReviewItem from "@/features/reviews/components/review-item";
import Rating from "@/features/shared/components/rating";
import { reviewData } from "@/features/reviews/constants/review-data";

const RestaurantReviews = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-2 md:gap-3">
        <h2 className="font-extrabold text-display-xs md:text-display-lg">
          Review
        </h2>

        <Rating
          rating="4.9 (24 Ulasan)"
          textClassName="font-extrabold text-md md:text-xl"
        />
      </div>

      <ReviewList>
        {reviewData.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
      </ReviewList>

      <Button
        className='w-40 self-center'
        variant='outline'
      >
        Show More
      </Button>
    </div>
  );
};

export default RestaurantReviews;