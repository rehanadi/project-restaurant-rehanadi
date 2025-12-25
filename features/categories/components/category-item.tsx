import Image from 'next/image';
import { Category } from '../types';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  category: Category;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryItem = ({ category, isActive = false, onClick }: CategoryItemProps) => {
  return (
    <div
      className={cn(
        'flex-1 basis-[106px] p-1 flex flex-col rounded-2xl items-center gap-1 cursor-pointer transition-colors',
        isActive ? 'bg-primary-100 text-neutral-25' : 'hover:bg-primary-100 hover:text-neutral-25'
      )}
      onClick={onClick}
    >
      <div className="w-full h-25 flex-center">
        <div className="size-12 md:size-[65px] relative">
          <Image src={category.image} alt={category.name} fill />
        </div>
      </div>

      <span className="font-bold text-sm text-center md:text-lg">{category.name}</span>
    </div>
  );
};

export default CategoryItem;