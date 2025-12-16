"use client";

import { Button } from "@/components/ui/button";
import CategoryTabs from "@/features/categories/components/category-tabs";
import MenuItem from "@/features/menus/components/menu-item";
import MenuList from "@/features/menus/components/menu-list";
import { menuData } from "@/features/menus/constants/menu-data";

const RestaurantMenus = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 pb-6 md:pb-0">
      <h2 className="font-extrabold text-display-xs md:text-display-lg">
        Menu
      </h2>

      <CategoryTabs
        value="All Menu"
        onChange={(value) => console.log(value)}
      />

      <MenuList>
        {menuData.map((menu) => (
          <MenuItem
            key={menu.id}
            menu={menu}
          />
        ))}
      </MenuList>

      <Button
        className='w-40 self-center'
        variant='outline'
      >
        Show More
      </Button>
    </div>
  );
};

export default RestaurantMenus;