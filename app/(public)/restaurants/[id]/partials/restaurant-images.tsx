'use client';

import ImagesCarousel from './images-carousel';
import ImagesGallery from './images-gallery';
import { useAppSelector } from '@/lib/hooks';

const RestaurantImages = () => {
  const { selectedRestaurant } = useAppSelector((state) => state.restaurants);

  if (!selectedRestaurant) return null;

  return (
    <>
      <ImagesCarousel className="flex md:hidden" images={selectedRestaurant.images} />
      <ImagesGallery className="hidden md:grid" images={selectedRestaurant.images} />
    </>
  );
};

export default RestaurantImages;