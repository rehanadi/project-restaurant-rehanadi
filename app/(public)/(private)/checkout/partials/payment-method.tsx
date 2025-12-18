import { Fragment } from 'react'
import { RadioGroup } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import PaymentMethodRadio from "@/features/checkout/components/payment-method-radio";
import { paymentMethodData } from "@/features/checkout/constants/payment-method-data";

const PaymentMethod = () => {
  return (
    <div className="px-4 md:px-5 flex flex-col gap-4">
      <h2 className="font-extrabold text-md md:text-lg">
        Payment Method
      </h2>

      <RadioGroup
        value="bni"
        onValueChange={() => {}}
        className='gap-3'
      >
        {paymentMethodData.map((method, index) => (
          <Fragment key={index}>
            <PaymentMethodRadio
              paymentMethod={method}
            />
            {index < paymentMethodData.length - 1 && (
              <Separator />
            )}
          </Fragment>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PaymentMethod;