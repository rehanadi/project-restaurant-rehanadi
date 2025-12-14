import CategoryList from "@/features/categories/components/category-list";
import CategoryItem from "@/features/categories/components/category-item";
import { categoryData } from "@/features/categories/constants/category-data";

const Categories = () => {
  return (
    <CategoryList>
      {categoryData.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </CategoryList>
  );
};

export default Categories;