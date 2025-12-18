import { Button } from "@/components/ui/button";
import CartMenuItem from "@/features/cart/components/cart-menu-item";
import Image from "next/image";

const CheckoutItems = () => {
  return (
    <div className="shadow-light bg-white w-full p-4 md:p-5 rounded-2xl flex flex-col gap-4 md:gap-5">
      <div className="flex-between gap-4">
        <div className="flex-start gap-1 md:gap-2">
          <Image
            src="/icons/store.svg"
            alt="Restaurant"
            width={32}
            height={32}
          />
  
          <span className="font-bold text-md md:text-lg">
            Burger King
          </span>
        </div>

        <Button
          variant="outline"
          className="w-26.5 md:w-30 h-9 md:h-10"
        >
          Add item
        </Button>
      </div>

      <CartMenuItem />
      <CartMenuItem />
    </div>
  );
};

export default CheckoutItems;