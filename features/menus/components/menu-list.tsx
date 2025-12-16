import React from 'react'

interface MenuListProps {
  children?: React.ReactNode;
}

const MenuList = ({ children }: MenuListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      {children}
    </div>
  );
};

export default MenuList;