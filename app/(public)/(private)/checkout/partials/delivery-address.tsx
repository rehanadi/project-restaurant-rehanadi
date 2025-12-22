'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface DeliveryAddressProps {
  address: string;
  phone: string;
  onChangeAddress: (address: string) => void;
}

const DeliveryAddress = ({ address, phone, onChangeAddress }: DeliveryAddressProps) => {
  return (
    <div className="shadow-light bg-white w-full p-4 md:p-5 rounded-2xl flex flex-col gap-4 md:gap-5.25">
      <div className="flex flex-col gap-1">
        <div className="flex-start gap-2">
          <div className="size-6 md:size-8 relative">
            <Image src="/icons/location.svg" alt="Location" fill />
          </div>

          <h2 className="font-extrabold text-md md:text-lg">Delivery Address</h2>
        </div>

        <p className="font-medium text-sm md:text-md">{address}</p>

        <p className="font-medium text-sm md:text-md">{phone}</p>
      </div>

      <Button variant="outline" className="w-30 h-9 md:h-10">
        Change
      </Button>
    </div>
  );
};

export default DeliveryAddress;