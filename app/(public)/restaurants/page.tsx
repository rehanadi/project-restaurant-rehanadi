"use client";

import { ListFilter } from "lucide-react";
import RestaurantList from "@/features/restaurants/components/restaurant-list";
import RestaurantItem from "@/features/restaurants/components/restaurant-item";
import { restaurantData } from "@/features/restaurants/constants/restaurant-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import RatingCheckbox from "./partials/rating-checkbox";
import DistanceCheckbox from "./partials/distance-checkbox";

const RestaurantsPage = () => {
  return (
    <div className="custom-container w-full pt-4 pb-10 flex flex-col gap-4">
      <h1 className="font-extrabold text-display-xs">
        All Restaurant
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="shadow-light bg-white p-3 rounded-xl flex items-center justify-between gap-4 md:hidden">
          <span className="uppercase font-extrabold text-sm">
            Filter
          </span>

          <ListFilter className="size-5 cursor-pointer" />
        </div>

        <div className="shrink-0 shadow-light bg-white hidden w-[266px] md:flex flex-col gap-6 py-4 rounded-xl">
          <div className="px-4 flex flex-col gap-2.5">
            <h3 className="uppercase font-extrabold text-md">
              Filter
            </h3>

            <h4 className="font-extrabold text-lg">
              Distance
            </h4>

            <DistanceCheckbox
              label="Nearby"
              value="nearby"
              checked={true}
            />

            <DistanceCheckbox
              label="Within 1 km"
              value="1-km"
              checked={false}
            />

            <DistanceCheckbox
              label="Within 3 km"
              value="3-km"
              checked={false}
            />

            <DistanceCheckbox
              label="Within 5 km"
              value="5-km"
              checked={false}
            />
          </div>

          <Separator />

          <div className="px-4 flex flex-col gap-2.5">
            <h4 className="font-extrabold text-lg">
              Price
            </h4>

            <div className="p-2 border border-neutral-300 rounded-md flex-start gap-2">
              <div className="shrink-0 bg-neutral-100 size-9.5 rounded-xs flex-center font-bold text-md">
                Rp
              </div>

              <Input
                type="number"
                placeholder="Minimum Price"
                className="flex-1 p-0 border-0 outline-0 focus:ring-0 text-md placeholder:text-neutral-500"
              />
            </div>

            <div className="p-2 border border-neutral-300 rounded-md flex-start gap-2">
              <div className="shrink-0 bg-neutral-100 size-9.5 rounded-xs flex-center font-bold text-md">
                Rp
              </div>

              <Input
                type="number"
                placeholder="Maximum Price"
                className="flex-1 p-0 border-0 outline-0 focus:ring-0 text-md placeholder:text-neutral-500"
              />
            </div>
          </div>

          <Separator />

          <div className="px-4 flex flex-col gap-2.5">
            <h4 className="font-extrabold text-lg">
              Rating
            </h4>

            {[5, 4, 3, 2, 1].map((rating) => (
              <RatingCheckbox
                key={rating}
                label={rating.toString()}
                value={rating.toString()}
                checked={false}
              />
            ))}
          </div>
        </div>

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