"use client";

import Section from "@/components/layouts/section";
import DeliveryAddress from "./partials/delivery-address";
import CheckoutItems from "./partials/checkout-items";
import PaymentMethod from "./partials/payment-method";
import PaymentSummary from "./partials/payment-summary";
import CheckoutContainer from "./partials/checkout-container";
import CheckoutSuccess from "@/features/checkout/components/checkout-success";
import { Separator } from "@/components/ui/separator";

const CheckoutPage = () => {
  const isSuccess = false;

  if (isSuccess) {
    return (
      <Section
        className="max-w-107 pt-8 md:pt-24"
      >
        <CheckoutSuccess />
      </Section>
    );
  }

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
            <Separator variant="dashed" />
            <PaymentSummary />
          </>
        }
      />
    </Section>
  );
};

export default CheckoutPage;