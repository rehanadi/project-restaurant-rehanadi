import Image from "next/image";

const OrderMenuItem = () => {
  return (
    <div className="flex-start gap-3 md:gap-4.25">
      <div className="size-16 md:size-20 rounded-xl overflow-hidden relative">
        <Image
          src="/images/menus/menu-1.png"
          alt="Menu 1"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <span className="font-medium text-sm md:text-md">
          Food Name
        </span>
        <span className="font-extrabold text-md">
          2 x Rp50.000
        </span>
      </div>
    </div>
  );
};

export default OrderMenuItem;