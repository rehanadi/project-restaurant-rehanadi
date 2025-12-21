import { Skeleton } from "@/components/ui/skeleton";

const CartMenuItemSkeleton = () => {
  return (
    <div className="flex-between gap-4">
      <div className="flex-start gap-4.25">
        <Skeleton className="size-16 md:size-20 rounded-xl" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>

      <div className="flex-start gap-4">
        <Skeleton className="size-9 md:size-10 rounded-full" />
        <Skeleton className="h-5 w-6" />
        <Skeleton className="size-9 md:size-10 rounded-full" />
      </div>
    </div>
  );
};

export default CartMenuItemSkeleton;