'use client';

import { Button } from '@/components/ui/button';
import CategoryTabs from '@/features/categories/components/category-tabs';
import MenuItem from '@/features/menus/components/menu-item';
import MenuList from '@/features/menus/components/menu-list';
import MenuSkeleton from '@/features/menus/components/menu-skeleton';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { loadMoreMenus } from '@/features/restaurants/stores';
import { useMemo, useState } from 'react';

const RestaurantMenus = () => {
  const MENU_LIMIT = 8;
  const dispatch = useAppDispatch();
  const { selectedRestaurant, menuLimit } = useAppSelector((state) => state.restaurants);
  const [selectedType, setSelectedType] = useState('All Menu');

  const filteredMenus = useMemo(() => {
    if (!selectedRestaurant) return [];
    
    if (selectedType === 'All Menu') {
      return selectedRestaurant.menus;
    }
    
    return selectedRestaurant.menus.filter(
      (menu) => menu.type.toLowerCase() === selectedType.toLowerCase()
    );
  }, [selectedRestaurant, selectedType]);

  const hasMore = selectedRestaurant ? menuLimit < selectedRestaurant.totalMenus : false;
  const isLoading = !selectedRestaurant;

  const handleLoadMore = () => {
    dispatch(loadMoreMenus());
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 pb-6 md:pb-0">
      <h2 className="font-extrabold text-display-xs md:text-display-lg">Menu</h2>

      <CategoryTabs value={selectedType} onChange={setSelectedType} />

      <MenuList>
        {isLoading
          ? Array.from({ length: MENU_LIMIT }).map((_, index) => (
              <MenuSkeleton key={index} />
            ))
          : filteredMenus.map((menu) => <MenuItem key={menu.id} menu={menu} />)}
      </MenuList>

      {!isLoading && hasMore && (
        <Button className="w-40 self-center" variant="outline" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default RestaurantMenus;