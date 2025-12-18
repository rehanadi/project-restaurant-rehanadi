import { ListFilter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import RatingCheckbox from "./rating-checkbox";
import DistanceCheckbox from "./distance-checkbox";

const RestaurantFilter = () => {
  return (
    <>
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
              className="flex-1 p-0 border-0 outline-0 focus:ring-0 text-md placeholder:text-neutral-500 shadow-none"
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
    </>
  )
}

export default RestaurantFilter;