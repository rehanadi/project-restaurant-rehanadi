"use client";

import RestaurantList from "@/features/restaurants/components/restaurant-list";
import Link from "next/link";
import RestaurantItem from "@/features/restaurants/components/restaurant-item";
import { restaurantData } from "@/features/restaurants/constants/restaurant-data";
import { Button } from "@/components/ui/button";

const Recommended = () => {
  return (
    <div className="custom-container w-full pt-6 md:pt-0 flex flex-col gap-4 md:gap-8">
      <div className="flex-between gap-4">
        <h2 className="font-extrabold text-display-xs md:text-display-md">
          Recommended
        </h2>

        <Link
          href="/restaurants"
          className="text-primary-100 font-extrabold text-md md:text-lg hover:underline transition"
        >
          See All
        </Link>
      </div>

      <RestaurantList>
        {restaurantData.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </RestaurantList>

      <Button
        className='w-40 self-center'
        variant='outline'
      >
        Show More
      </Button>
    </div>
  );
};

export default Recommended;