"use client";

import { Button } from "@/components/ui/button";
import SummaryItem from "@/features/checkout/components/summary-item";

const PaymentSummary = () => {
  return (
    <div className="px-4 md:px-5 flex flex-col gap-4">
      <h2 className="font-extrabold text-md md:text-lg">
        Payment Summary
      </h2>

      <SummaryItem
        label="Price (2 items)"
        value="Rp100.000"
      />
      
      <SummaryItem
        label="Delivery Fee"
        value="Rp10.000"
      />

      <SummaryItem
        label="Service Fee"
        value="Rp1.000"
      />

      <SummaryItem
        label="Total"
        value="Rp111.000"
        isTotal
      />

      <Button
        className="w-full h-11 md:h-12"
      >
        Buy
      </Button>
    </div>
  );
};

export default PaymentSummary;