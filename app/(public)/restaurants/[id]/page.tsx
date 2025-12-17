import RestaurantContainer from "./partials/restaurant-container";
import RestaurantImages from "./partials/restaurant-images";
import RestaurantInfo from "./partials/restaurant-info";
import RestaurantMenus from "./partials/restaurant-menus";
import RestaurantReviews from "./partials/restaurant-reviews";
import CheckoutSummary from "./partials/checkout-summary";
import { Separator } from "@/components/ui/separator";

const RestaurantPage = () => {
  return (
    <RestaurantContainer>
      <RestaurantImages />
      <RestaurantInfo />
      <Separator />
      <RestaurantMenus />
      <Separator />
      <RestaurantReviews />
      <CheckoutSummary />
    </RestaurantContainer>
  );
};

export default RestaurantPage;