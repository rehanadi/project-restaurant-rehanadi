import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface RatingProps {
  rating: number | string;
  className?: string;
  textClassName?: string;
}

const Rating = ({
  rating, 
  className,
  textClassName,
}: RatingProps) => {
  return (
    <div className={cn('flex-start gap-1', className)}>
      <Icon
        icon='material-symbols:star-rounded'
        className='size-6 text-yellow-500'
      />
      <span className={cn('text-sm-medium', textClassName)}>
        {rating}
      </span>
    </div>
  );
};

export default Rating;