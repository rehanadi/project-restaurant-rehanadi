"use client";

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthTabs from "@/features/auth/components/auth-tabs"
import Logo from "@/features/shared/components/logo"
import { Eye } from "lucide-react"
import Link from "next/link"

const LoginForm = () => {
  return (
    <form className="max-w-93.5 w-full px-6 flex flex-col gap-4 md:gap-5">
      <Link
        href="/"
        className="self-start"
      >
        <Logo className="scale-95 md:scale-100" />
      </Link>

      <div className="flex flex-col md:gap-1">
        <h1 className="font-extrabold text-display-xs md:text-display-sm">
          Welcome Back
        </h1>
        <p className="font-medium text-xs md:text-md">
          Good to see you again! Let’s eat
        </p>
      </div>

      <AuthTabs value="login" />

      <div className="flex flex-col gap-1">
        <Input
          type="email"
          placeholder="Email"
          className="w-full h-12 md:h-14 px-3 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
        />

        <span className="text-primary-100 font-semibold text-sm">
          Error Text Helper
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="w-full relative">
          <Input
            type="password"
            placeholder="Password"
            className="w-full h-12 md:h-14 px-3 pr-10 border-neutral-300 rounded-xl md:rounded-lg text-sm placeholder:text-neutral-500"
          />
          <Eye className="absolute right-4 top-1/2 -translate-y-1/2 size-4" />
        </div>

        <span className="text-primary-100 font-semibold text-sm">
          Error Text Helper
        </span>
      </div>

      <div className='flex-start gap-2'>
        <Checkbox
          id="remember-me"
          checked={false}
          onCheckedChange={() => {}}
        />
        <Label htmlFor="remember-me">
          Remember me
        </Label>
      </div>

      <Button
        className="w-full h-12 md:h-12"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;