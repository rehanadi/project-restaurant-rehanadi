"use client";

import Section from "@/components/layouts/section";
import RestaurantList from "@/features/restaurants/components/restaurant-list";
import RestaurantItem from "@/features/restaurants/components/restaurant-item";
import RestaurantFilter from "./partials/restaurant-filter";
import { restaurantData } from "@/features/restaurants/constants/restaurant-data";

const RestaurantsPage = () => {
  return (
    <Section title="All Restaurant">
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
    </Section>
  );
};

export default RestaurantsPage;