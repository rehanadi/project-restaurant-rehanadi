'use client';

import { ListFilter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import RatingCheckbox from './rating-checkbox';
import DistanceCheckbox from './distance-checkbox';
import { locationDistances } from '@/features/location/constants/location-distances';

interface RestaurantFilterProps {
  range: number;
  priceMin: number | undefined;
  priceMax: number | undefined;
  rating: number | null;
  onRangeChange: (value: number) => void;
  onPriceMinChange: (value: number | undefined) => void;
  onPriceMaxChange: (value: number | undefined) => void;
  onRatingChange: (value: number | null) => void;
}

const RestaurantFilter = ({
  range,
  priceMin,
  priceMax,
  rating,
  onRangeChange,
  onPriceMinChange,
  onPriceMaxChange,
  onRatingChange,
}: RestaurantFilterProps) => {
  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onPriceMinChange(undefined);
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        onPriceMinChange(numValue);
      }
    }
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onPriceMaxChange(undefined);
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        onPriceMaxChange(numValue);
      }
    }
  };

  return (
    <>
      <div className="shadow-light bg-white p-3 rounded-xl flex items-center justify-between gap-4 md:hidden">
        <span className="uppercase font-extrabold text-sm">Filter</span>

        <ListFilter className="size-5 cursor-pointer" />
      </div>

      <div className="shrink-0 shadow-light bg-white hidden w-[266px] md:flex flex-col gap-6 py-4 rounded-xl">
        <div className="px-4 flex flex-col gap-2.5">
          <h3 className="uppercase font-extrabold text-md">Filter</h3>

          <h4 className="font-extrabold text-lg">Distance</h4>

          {locationDistances.map((distance) => (
            <DistanceCheckbox
              key={distance.value}
              label={distance.label}
              value={distance.value}
              checked={range === distance.value}
              onCheckedChange={onRangeChange}
            />
          ))}
        </div>

        <Separator />

        <div className="px-4 flex flex-col gap-2.5">
          <h4 className="font-extrabold text-lg">Price</h4>

          <div className="p-2 border border-neutral-300 rounded-md flex-start gap-2">
            <div className="shrink-0 bg-neutral-100 size-9.5 rounded-xs flex-center font-bold text-md">
              Rp
            </div>

            <Input
              type="number"
              placeholder="Minimum Price"
              value={priceMin ?? ''}
              onChange={handlePriceMinChange}
              suppressHydrationWarning
              className="flex-1 p-0 border-0 outline-0 focus:ring-0 text-md placeholder:text-neutral-500 shadow-none"
            />
          </div>

          <div className="p-2 border border-neutral-300 rounded-md flex-start gap-2">
            <div className="shrink-0 bg-neutral-100 size-9.5 rounded-xs flex-center font-bold text-md">
              Rp
            </div>

            <Input
              type="number"
              placeholder="Maximum Price"
              value={priceMax ?? ''}
              onChange={handlePriceMaxChange}
              suppressHydrationWarning
              className="flex-1 p-0 border-0 outline-0 focus:ring-0 text-md placeholder:text-neutral-500 shadow-none"
            />
          </div>
        </div>

        <Separator />

        <div className="px-4 flex flex-col gap-2.5">
          <h4 className="font-extrabold text-lg">Rating</h4>

          {[5, 4, 3, 2, 1].map((ratingValue) => (
            <RatingCheckbox
              key={ratingValue}
              label={ratingValue.toString()}
              value={ratingValue}
              checked={rating === ratingValue}
              onCheckedChange={onRatingChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantFilter;