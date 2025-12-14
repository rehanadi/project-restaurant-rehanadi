import React from 'react'

interface CategoryListProps {
  children?: React.ReactNode;
}

const CategoryList = ({ children }: CategoryListProps) => {
  return (
    <div className="custom-container flex w-full flex-wrap items-start justify-start gap-5 md:gap-[46.8px]">
      {children}
    </div>
  );
};

export default CategoryList;