import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

const CartMenuItem = () => {
  return (
    <div className="flex-between gap-4">
      <div className="flex-start gap-4.25">
        <div className="size-16 md:size-20 rounded-xl overflow-hidden relative">
          <Image
            src="/images/menus/menu-1.png"
            alt="Menu 1"
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-md">
            Food Name
          </span>
          <span className="font-extrabold text-md md:text-lg">
            Rp50.000
          </span>
        </div>
      </div>

      <div className="flex-start gap-4">
        <Button
          variant='outline'
          className="size-9 md:size-10 rounded-full"
        >
          <Minus className="size-5 md:size-6" />
        </Button>
        <span className="font-semibold text-md md:text-lg">
          1
        </span>
        <Button
          variant='default'
          className="size-9 md:size-10 rounded-full"
        >
          <Plus className="size-5 md:size-6" />
        </Button>
      </div>
    </div>
  );
};

export default CartMenuItem;