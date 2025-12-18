import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Stars from "@/features/shared/components/stars";
import { Review } from "../types";

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({
  review,
}: ReviewItemProps) => {
  return (
    <div className="shadow-light bg-white p-4 rounded-2xl flex flex-col gap-4">
      <div className="flex-start gap-3">
        <Avatar className='size-14.5 md:gap-16'>
          <AvatarImage
            src={review.user.avatar}
            className="rounded-full"
          />
          <AvatarFallback>
            {review.user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h3 className="font-extrabold text-md md:text-lg">
            {review.user.name}
          </h3>

          <p className="text-sm md:text-md">
            {review.createdAt}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Stars stars={review.star} />

        <p className="text-sm md:text-md">
          {review.comment}
        </p>
      </div>
    </div>
  );
};

export default ReviewItem;