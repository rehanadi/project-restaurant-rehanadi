import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

const OrderItemSkeleton = () => {
  return (
    <div className="shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-3 md:gap-4">
      <div className="self-start flex-start gap-2">
        <Skeleton className="size-8" />
        <Skeleton className="h-5 w-32" />
      </div>

      <div className="flex-start gap-3 md:gap-4.25">
        <Skeleton className="size-16 md:size-20 rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>

      <div className="flex-start gap-3 md:gap-4.25">
        <Skeleton className="size-16 md:size-20 rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>

      <Separator />

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

export default OrderItemSkeleton;