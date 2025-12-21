import { Skeleton } from '@/components/ui/skeleton';

const RestaurantSkeleton = () => {
  return (
    <div className="shadow-light bg-white p-3 md:p-4 rounded-2xl flex-start gap-2 md:gap-3">
      <Skeleton className="shrink-0 size-22.5 md:size-30 aspect-square rounded-xl" />

      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
};

export default RestaurantSkeleton;