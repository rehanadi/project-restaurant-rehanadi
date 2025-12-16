import Image from "next/image";
import Rating from "@/features/shared/components/rating";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const RestaurantInfo = () => {
  return (
    <div className="flex-between gap-4">
      <div className="flex-start gap-2 md:gap-4">
        <div className="size-22.5 md:size-30 rounded-full overflow-hidden relative">
          <Image
            src='/images/restaurants/burger-king.png'
            alt='Restaurant Logo'
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-0.5 md:gap-1">
          <h1 className="font-extrabold text-md md:text-display-md">
            Burger King
          </h1>

          <Rating rating={4.9} />

          <div className="flex-start gap-1.5 md:font-medium text-sm md:text-lg">
            <span>Jakarta Selatan</span>
            <div className="size-0.5 bg-neutral-950 rounded-full"></div>
            <span>2.4 km</span>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-11 h-11 md:w-11xl rounded-full flex-center gap-3"
      >
        <Share2 className="size-5 md:size-6" />
        <span className="hidden md:inline font-bold">
          Share
        </span>
      </Button>
    </div>
  );
};

export default RestaurantInfo;