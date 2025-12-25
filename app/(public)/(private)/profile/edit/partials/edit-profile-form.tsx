'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const EditProfileForm = () => {
  return (
    <form
      className="md:max-w-131 shadow-light bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex flex-col items-center gap-2 md:gap-3 pb-2 md:pb-3">
          <Avatar className="size-16 md:size-20">
            <AvatarImage
              src='/images/avatar.png'
              className="rounded-full"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <input
            type="file"
            accept="image/*"
            className="hidden"
          />

          <Button
            className="w-40 h-10 md:h-11"
            variant="outline"
          >
            Change Photo
          </Button>
        </div>
        
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="cursor-pointer">
            Email
          </Label>

          <p id="email" className="font-bold text-sm md:text-md">
            rehanadipurwana@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="name" className="cursor-pointer">
            Name
          </Label>

          <Input
            id="name"
            type="text"
            className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            placeholder="Enter your name"
          />

          <span className="text-primary-100 font-semibold text-sm">
            Error Text Helper
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="phone" className="cursor-pointer">
            Number Phone
          </Label>

          <Input
            id="phone"
            type="number"
            className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            placeholder="Enter your phone number"
          />

          <span className="text-primary-100 font-semibold text-sm">
            Error Text Helper
          </span>
        </div>
      </div>

      <Button type="submit" className="w-full h-11 md:h-11">
        Save
      </Button>
    </form>
  );
};

export default EditProfileForm;