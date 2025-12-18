"use client";

import Section from "@/components/layouts/section";
import DeliveryAddress from "./partials/delivery-address";
import CheckoutItems from "./partials/checkout-items";
import PaymentMethod from "./partials/payment-method";
import PaymentSummary from "./partials/payment-summary";
import CheckoutContainer from "./partials/checkout-container";

const CheckoutPage = () => {
  return (
    <Section
      title="Checkout"
      className="max-w-250 md:gap-6"
    >
      <CheckoutContainer
        main={
          <>
            <DeliveryAddress />
            <CheckoutItems />
          </>
        }
        sidebar={
          <>
            <PaymentMethod />
            <PaymentSummary />
          </>
        }
      />
    </Section>
  );
};

export default CheckoutPage;