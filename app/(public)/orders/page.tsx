"use client";

import Section from "@/components/layouts/section";
import { Separator } from "@/components/ui/separator";
import OrderItem from "@/features/orders/components/order-item";
import OrderList from "@/features/orders/components/order-list";
import SearchBox from "@/features/orders/components/search-box";
import StatusTabs from "@/features/orders/components/status-tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { CircleArrowLeft, FileText, MapPin } from "lucide-react";
import Link from "next/link";

const OrdersPage = () => {
  return (
    <div className="custom-container w-full pt-4 md:pt-12 pb-10 md:pb-25 flex items-start justify-between gap-4 md:gap-8">
      {/* menu */}
      <div className="shrink-0 w-80 shadow-light bg-white hidden md:flex flex-col gap-6 p-5 rounded-2xl">
        <div className="flex-start gap-2">
          <Avatar className='size-12'>
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>
              U
            </AvatarFallback>
          </Avatar>

          <span className="font-bold text-lg">
            John Doe
          </span>
        </div>

        <Separator />

        <nav className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex-start gap-2"
          >
            <MapPin className="size-6" />
            <span className="font-medium text-md">
              Delivery Address
            </span>
          </Link>

          <Link
            href="/"
            className="flex-start gap-2 text-primary-100"
          >
            <FileText className="size-6" />
            <span className="font-medium text-md">
              My Orders
            </span>
          </Link>

          <Link
            href="/"
            className="flex-start gap-2"
          >
            <CircleArrowLeft className="size-6" />
            <span className="font-medium text-md">
              Logout
            </span>
          </Link>
        </nav>
      </div>

      {/* orders */}
      <Section
        title="My Orders"
        className="py-0 md:py-0 md:gap-6"
      >
        <div className="shadow-light bg-white p-4 md:p-6 rounded-2xl flex flex-col gap-5">
          <SearchBox />

          <div className='w-full flex-start flex-wrap gap-2 md:gap-3'>
            <span className="font-bold text-sm md:text-lg">
              Status
            </span>

            <StatusTabs
              value="Done"
              onChange={() => {}}
            />
          </div>

          <OrderList>
            <OrderItem />
            <OrderItem />
          </OrderList>
        </div>
      </Section>
    </div>
  );
};

export default OrdersPage;