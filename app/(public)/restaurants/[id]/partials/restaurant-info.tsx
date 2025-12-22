'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Rating from '@/features/shared/components/rating';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';
import { calculateDistance } from '@/features/restaurants/utils';

const RestaurantInfo = () => {
  const { selectedRestaurant } = useAppSelector((state) => state.restaurants);
  const { latitude, longitude } = useAppSelector((state) => state.location);

  const distance = useMemo(() => {
    if (!selectedRestaurant || !latitude || !longitude) return null;
    return calculateDistance(
      latitude,
      longitude,
      selectedRestaurant.coordinates.lat,
      selectedRestaurant.coordinates.long
    );
  }, [selectedRestaurant, latitude, longitude]);

  if (!selectedRestaurant) {
    return (
      <div className="flex-between gap-4">
        <div className="flex-start gap-2 md:gap-4">
          <Skeleton className="size-22.5 md:size-30 rounded-full" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>

        <Skeleton className="w-11 h-11 md:w-11xl md:h-11 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex-between gap-4">
      <div className="flex-start gap-2 md:gap-4">
        <div className="size-22.5 md:size-30 rounded-full overflow-hidden relative">
          <Image
            src={selectedRestaurant.logo}
            alt={selectedRestaurant.name}
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-0.5 md:gap-1">
          <h1 className="font-extrabold text-md md:text-display-md">
            {selectedRestaurant.name}
          </h1>

          <Rating rating={selectedRestaurant.star} />

          <div className="flex-start gap-1.5 md:font-medium text-sm md:text-lg">
            <span>{selectedRestaurant.place}</span>
            {distance !== null && (
              <>
                <div className="size-0.5 bg-neutral-950 rounded-full"></div>
                <span>{distance} km</span>
              </>
            )}
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-11 h-11 md:w-11xl rounded-full flex-center gap-3"
      >
        <Share2 className="size-5 md:size-6" />
        <span className="hidden md:inline font-bold">Share</span>
      </Button>
    </div>
  );
};

export default RestaurantInfo;