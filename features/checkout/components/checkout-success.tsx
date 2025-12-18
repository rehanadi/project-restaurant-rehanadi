import { Separator } from "@/components/ui/separator";
import Logo from "@/features/shared/components/logo";
import Image from "next/image";
import SummaryItem from "./summary-item";
import { Button } from "@/components/ui/button";

const CheckoutSuccess = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Logo />

      <div className="w-full shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4">
        <div className="flex flex-col items-center gap-0.5">
          <Image
            src="/icons/success.svg"
            alt="Success"
            width={64}
            height={64}
          />

          <h1 className="font-extrabold text-lg md:text-xl text-center">
            Payment Success
          </h1>

          <p className="text-sm md:text-md text-center">
            Your payment has been successfully processed.
          </p>
        </div>

        <Separator variant="dashed" />

        <SummaryItem
          label="Date"
          value="25 August 2025, 15:51"
        />
        
        <SummaryItem
          label="Payment Method"
          value="Bank Rakyat Indonesia"
        />

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

        <Separator variant="dashed" />

        <SummaryItem
          label="Total"
          value="Rp111.000"
          isTotal
        />

        <Button
          className="w-full h-11 md:h-12"
        >
          See My Orders
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;