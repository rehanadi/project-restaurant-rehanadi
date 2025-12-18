import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartMenuItem from "./cart-menu-item";
import { Separator } from "@/components/ui/separator";

const CartItem = () => {
  return (
    <div className="shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-3 md:gap-5">
      <Link
        href='/restaurants/1'
        className="flex-start gap-1 md:gap-2"
      >
        <Image
          src="/icons/store.svg"
          alt="Restaurant"
          width={32}
          height={32}
        />

        <span className="font-bold text-md md:text-lg">
          Burger King
        </span>

        <ChevronRight className="size-5 md:size-6" />
      </Link>

      <CartMenuItem />
      <CartMenuItem />

      <Separator variant="dashed" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-md">
            Total
          </span>
          <span className="font-extrabold text-lg md:text-xl">
            Rp100.000
          </span>
        </div>

        <Button
          className="w-full md:w-60 h-11 md:h-12"
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default CartItem