import { Skeleton } from '@/components/ui/skeleton';

const ReviewSkeleton = () => {
  return (
    <div className="shadow-light bg-white p-4 rounded-2xl flex flex-col gap-4">
      <div className="flex-start gap-3">
        <Skeleton className="size-14.5 md:size-16 rounded-full" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
};

export default ReviewSkeleton;