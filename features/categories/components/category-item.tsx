import Image from "next/image";
import { Category } from "../types";

interface CategoryItemProps {
  category: Category;
  onClick?: () => void;
}

const CategoryItem = ({
  category,
  onClick,
}: CategoryItemProps) => {
  return (
    <div
      className="flex-1 basis-[106px] flex flex-col items-center gap-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-25 flex-center">
        <div className="size-12 md:size-[65px] relative">
          <Image
            src={category.image}
            alt={category.name}
            fill
          />
        </div>
      </div>

      <span className="font-bold text-sm text-center md:text-lg">
        {category.name}
      </span>
    </div>
  )
}

export default CategoryItem;