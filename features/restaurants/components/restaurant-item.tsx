import Rating from '@/features/shared/components/rating';
import Image from 'next/image';
import Link from 'next/link';
import { Restaurant } from '../types';

interface RestaurantItemProps {
  restaurant: Restaurant;
  showDistance?: boolean;
}

const RestaurantItem = ({ restaurant, showDistance = false }: RestaurantItemProps) => {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <div className="shadow-light bg-white p-3 md:p-4 rounded-2xl flex-start gap-2 md:gap-3">
        <div className="shrink-0 size-22.5 md:size-30 aspect-square rounded-xl relative overflow-hidden">
          <Image src={restaurant.logo} alt={restaurant.name} fill className="object-cover object-center" />
        </div>

        <div className="flex-1 flex flex-col gap-0.5">
          <h3 className="font-extrabold text-md">{restaurant.name}</h3>

          <Rating rating={restaurant.star} />

          <div className="flex-start gap-1.5 text-sm md:text-md">
            <span>{restaurant.place}</span>
            {showDistance && restaurant.distance !== undefined && (
              <>
                <div className="size-0.5 bg-neutral-950 rounded-full"></div>
                <span>{restaurant.distance} km</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;