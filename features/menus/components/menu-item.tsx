import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from "../types";
import { Minus, Plus } from "lucide-react";

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const isAddedCart = true;

  return (
    <div className="shadow-light rounded-2xl overflow-hidden">
      <div className="w-full aspect-square overflow-hidden relative">
        <Image
          src={menu.image!}
          alt={menu.foodName}
          fill
          className="object-cover object-center hover:scale-110 transition"
        />
      </div>

      <div className="p-3 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex flex-col">
          <h4 className="font-medium text-sm md:text-md">
            {menu.foodName}
          </h4>

          <p className="font-extrabold text-md md:text-lg">
            Rp{menu.price.toLocaleString('id-ID')}
          </p>
        </div>

        {isAddedCart ? (
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
        ) : (
          <Button
            className="w-full md:w-[79px] h-9 md:h-10"
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;