'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setDeliveryAddress } from '@/features/checkout/stores';
import { updateAddressSchema, UpdateAddressFormData } from '@/features/checkout/schemas';

const AddressForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { deliveryAddress } = useAppSelector((state) => state.checkout);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UpdateAddressFormData>({
    resolver: zodResolver(updateAddressSchema),
    defaultValues: {
      address: '',
      phone: '',
    },
  });

  useEffect(() => {
    if (deliveryAddress.address) {
      setValue('address', deliveryAddress.address);
    }
    if (deliveryAddress.phone) {
      setValue('phone', deliveryAddress.phone);
    }
  }, [deliveryAddress, setValue]);

  const onSubmit = (data: UpdateAddressFormData) => {
    dispatch(
      setDeliveryAddress({
        address: data.address,
        phone: data.phone,
      })
    );

    toast.success('Delivery address updated successfully');
    router.push('/checkout');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-131 shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex flex-col gap-1">
          <Label htmlFor="address" className="cursor-pointer">
            Address
          </Label>

          <Textarea
            id="address"
            {...register('address')}
            className="min-h-50 resize-none"
            placeholder="Enter your delivery address"
          />

          {errors.address && (
            <span className="text-primary-100 font-semibold text-sm">
              {errors.address.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="phone" className="cursor-pointer">
            Number Phone
          </Label>

          <Input
            id="phone"
            type="number"
            {...register('phone')}
            className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            placeholder="Enter your phone number"
          />

          {errors.phone && (
            <span className="text-primary-100 font-semibold text-sm">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full h-11 md:h-11">
        Save
      </Button>
    </form>
  );
};

export default AddressForm;