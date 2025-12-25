'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { updateProfileSchema, UpdateProfileFormData } from '@/features/auth/schemas';
import { useUpdateProfile } from '@/features/auth/hooks';
import { useAppSelector } from '@/lib/hooks';

const EditProfileForm = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [previewImage, setPreviewImage] = useState<string | null>(user?.avatar || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name || '',
      phone: user?.phone || '',
      avatar: undefined,
    },
  });

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('phone', user.phone);
      setPreviewImage(user.avatar);
    }
  }, [user, setValue]);

  const handleChangePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('avatar', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: UpdateProfileFormData) => {
    updateProfile({
      name: data.name,
      phone: data.phone,
      avatar: data.avatar || null,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-131 shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex flex-col items-center gap-2 md:gap-3 pb-2 md:pb-3">
          <Avatar className="size-16 md:size-20">
            <AvatarImage
              src={previewImage || '/images/avatar.png'}
              className="aspect-square rounded-full object-cover"
            />
            <AvatarFallback>{user?.name.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
          </Avatar>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <Button
            type="button"
            className="w-40 h-10 md:h-11"
            variant="outline"
            onClick={handleChangePhoto}
          >
            Change Photo
          </Button>

          {errors.avatar && (
            <span className="text-primary-100 font-semibold text-sm">
              {errors.avatar.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="cursor-pointer">
            Email
          </Label>

          <p id="email" className="font-bold text-sm md:text-md">
            {user?.email || '-'}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="name" className="cursor-pointer">
            Name
          </Label>

          <Input
            id="name"
            type="text"
            {...register('name')}
            className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            placeholder="Enter your name"
          />

          {errors.name && (
            <span className="text-primary-100 font-semibold text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="phone" className="cursor-pointer">
            Number Phone
          </Label>

          <Input
            id="phone"
            type="text"
            {...register('phone')}
            className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            placeholder="Enter your phone number"
          />

          {errors.phone && (
            <span className="text-primary-100 font-semibold text-sm">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full h-11 md:h-11" disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </Button>
    </form>
  );
};

export default EditProfileForm;