'use client';

import CategoryList from '@/features/categories/components/category-list';
import CategoryItem from '@/features/categories/components/category-item';
import { categoryData } from '@/features/categories/constants/category-data';
import { useRouter } from 'next/navigation';

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryName: string) => void;
}

const Categories = ({ selectedCategory, onSelectCategory }: CategoriesProps) => {
  const router = useRouter();

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === 'All Restaurant') {
      router.push('/restaurants');
    } else {
      onSelectCategory(categoryName);
    }
  };

  return (
    <div className="custom-container w-full">
      <CategoryList>
        {categoryData.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isActive={selectedCategory === category.name}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </CategoryList>
    </div>
  );
};

export default Categories;