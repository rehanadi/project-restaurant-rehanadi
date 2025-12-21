'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthTabs from '@/features/auth/components/auth-tabs';
import Logo from '@/features/shared/components/logo';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister } from '../hooks';
import { registerSchema, RegisterFormData } from '../schemas';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = (data: RegisterFormData) => {
    registerUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
  };

  return (
    <form
      className="max-w-93.5 w-full px-6 flex flex-col gap-4 md:gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Link href="/" className="self-start">
        <Logo className="scale-95 md:scale-100" />
      </Link>

      <div className="flex flex-col md:gap-1">
        <h1 className="font-extrabold text-display-xs md:text-display-sm">
          Welcome Back
        </h1>
        <p className="font-medium text-xs md:text-md">
          Good to see you again! Let's eat
        </p>
      </div>

      <AuthTabs value="register" />

      <div className="flex flex-col gap-1">
        <Input
          type="text"
          placeholder="Name"
          className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
          {...register('name')}
        />

        {errors.name && (
          <span className="text-primary-100 font-semibold text-sm">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Input
          type="email"
          placeholder="Email"
          className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
          {...register('email')}
        />

        {errors.email && (
          <span className="text-primary-100 font-semibold text-sm">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Input
          type="text"
          placeholder="Number Phone"
          className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
          {...register('phone')}
        />

        {errors.phone && (
          <span className="text-primary-100 font-semibold text-sm">
            {errors.phone.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="w-full relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full h-12 md:h-14 px-3 pr-10 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            {...register('password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="size-4 text-neutral-500 cursor-pointer" />
            ) : (
              <Eye className="size-4 text-neutral-500 cursor-pointer" />
            )}
          </button>
        </div>

        {errors.password && (
          <span className="text-primary-100 font-semibold text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="w-full relative">
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="w-full h-12 md:h-14 px-3 pr-10 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
            {...register('confirmPassword')}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? (
              <EyeOff className="size-4 text-neutral-500 cursor-pointer" />
            ) : (
              <Eye className="size-4 text-neutral-500 cursor-pointer" />
            )}
          </button>
        </div>

        {errors.confirmPassword && (
          <span className="text-primary-100 font-semibold text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <Button className="w-full h-12 md:h-12" type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Register'}
      </Button>
    </form>
  );
};

export default RegisterForm;