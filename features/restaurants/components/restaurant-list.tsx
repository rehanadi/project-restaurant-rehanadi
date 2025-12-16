import { cn } from "@/lib/utils";

interface RestaurantListProps {
  children?: React.ReactNode;
  className?: string;
}

const RestaurantList = ({ children, className }: RestaurantListProps) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5", className)}>
      {children}
    </div>
  );
};

export default RestaurantList;