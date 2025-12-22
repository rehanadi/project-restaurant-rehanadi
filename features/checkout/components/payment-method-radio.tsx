import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { PaymentMethod } from '../types';
import Image from 'next/image';

interface PaymentMethodRadioProps {
  paymentMethod: PaymentMethod;
}

const PaymentMethodRadio = ({ paymentMethod }: PaymentMethodRadioProps) => {
  const { label, image, value } = paymentMethod;

  return (
    <div className="flex-between gap-2">
      <div className="size-10 border border-neutral-300 rounded-md flex-center">
        <Image
          src={image.src}
          alt={label}
          width={image.width}
          height={image.height}
          className="object-contain"
        />
      </div>

      <Label htmlFor={value} className="flex-1 text-sm md:text-md">
        {label}
      </Label>

      <RadioGroupItem id={value} value={value} className="shrink-0" />
    </div>
  );
};

export default PaymentMethodRadio;