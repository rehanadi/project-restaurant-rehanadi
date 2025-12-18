"use client";

import RestaurantList from "@/features/restaurants/components/restaurant-list";
import RestaurantItem from "@/features/restaurants/components/restaurant-item";
import RestaurantFilter from "./partials/restaurant-filter";
import { restaurantData } from "@/features/restaurants/constants/restaurant-data";

const RestaurantsPage = () => {
  return (
    <div className="custom-container w-full pt-4 md:pt-12 pb-10 md:pb-25 flex flex-col gap-4 md:gap-8">
      <h1 className="font-extrabold text-display-xs md:text-display-md">
        All Restaurant
      </h1>

      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
        <RestaurantFilter />

        <RestaurantList className="md:flex-1 md:grid-cols-2">
          {restaurantData.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </RestaurantList>
      </div>
    </div>
  );
};

export default RestaurantsPage;