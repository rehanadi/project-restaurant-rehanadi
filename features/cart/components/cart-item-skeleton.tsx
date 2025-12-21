import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import CartMenuItemSkeleton from "./cart-menu-item-skeleton";

const CartItemSkeleton = () => {
  return (
    <div className="shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-3 md:gap-5">
      <div className="flex-start gap-1 md:gap-2">
        <Skeleton className="size-8" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="size-5" />
      </div>

      <div className="flex flex-col gap-3">
        <CartMenuItemSkeleton />
        <CartMenuItemSkeleton />
      </div>

      <Separator variant="dashed" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-6 w-24" />
        </div>

        <Skeleton className="w-full md:w-60 h-11 md:h-12" />
      </div>
    </div>
  );
};

export default CartItemSkeleton;