"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import OrderMenuItem from "./order-menu-item";

const OrderItem = () => {
  return (
    <div className="shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-3 md:gap-4">
      <Link
        href='/restaurants/1'
        className="self-start flex-start gap-2"
      >
        <Image
          src="/icons/store.svg"
          alt="Restaurant"
          width={32}
          height={32}
        />

        <span className="font-bold text-sm md:text-lg">
          Burger King
        </span>
      </Link>

      <OrderMenuItem />

      <Separator />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-md">
            Total
          </span>
          <span className="font-extrabold text-md md:text-xl">
            Rp100.000
          </span>
        </div>

        <Button
          className="w-full md:w-60 h-11 md:h-12"
        >
          Give Review
        </Button>
      </div>
    </div>
  );
};

export default OrderItem;