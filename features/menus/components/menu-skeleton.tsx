import { Skeleton } from '@/components/ui/skeleton';

const MenuSkeleton = () => {
  return (
    <div className="shadow-light rounded-2xl overflow-hidden">
      <Skeleton className="w-full aspect-square" />

      <div className="p-3 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-6 w-24" />
        </div>

        <Skeleton className="h-9 md:h-10 w-full md:w-[79px]" />
      </div>
    </div>
  );
};

export default MenuSkeleton;