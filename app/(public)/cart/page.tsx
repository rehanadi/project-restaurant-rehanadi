import Section from "@/components/layouts/section";
import CartList from "@/features/cart/components/cart-list";
import CartItem from "@/features/cart/components/cart-item";

const CartPage = () => {
  return (
    <Section
      title="My Cart"
      className="max-w-200"
    >
      <CartList>
        <CartItem />
        <CartItem />
      </CartList>
    </Section>
  );
};

export default CartPage;