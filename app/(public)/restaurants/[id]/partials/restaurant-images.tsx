import ImagesCarousel from "./images-carousel";
import ImagesGallery from "./images-gallery";

const RestaurantImages = () => {
  return (
    <>
      <ImagesCarousel className="flex md:hidden" />
      <ImagesGallery className="hidden md:grid" />
    </>
  );
};

export default RestaurantImages;