"use client";

import { useState } from "react";
import Link from "next/link"
import ResponsiveLogo from "./responsive-logo"
import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, Menu, User, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const isAuthenticated = true;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="shadow-light sticky inset-x-0 top-0 z-50 h-16 w-full gap-4 bg-white md:h-20">
      <div className="custom-container flex-between h-full gap-4">
        <Link href='/'>
          <ResponsiveLogo />
        </Link>

        {isAuthenticated ? (
          <div className="flex-center gap-6">
            <Link
              href='/cart'
              className="relative"
            >
              <Icon
                icon='lets-icons:bag-fill'
                className='size-7 md:size-8'
              />
                <div className='bg-primary-100 flex-center text-xs-bold absolute -top-1 -right-1 size-5 rounded-full text-white'>
                  5
                </div>
            </Link>
  
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex-center gap-4 cursor-pointer">
                  <Avatar className='size-10 md:size-12'>
                    <AvatarImage
                      src='/images/avatar.png'
                      className="rounded-full"
                    />
                    <AvatarFallback>
                      U
                    </AvatarFallback>
                  </Avatar>
      
                  <span className="hidden md:inline font-semibold text-lg">
                    John Doe
                  </span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-3">
                  <p className="font-semibold text-md">John Doe</p>
                </div>

                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <User className="size-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => {}}
                  variant="destructive"
                  className="cursor-pointer"
                >
                  <LogOut className="size-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <>
            <AuthButtons className='hidden md:grid' />

            <AnimatePresence>
              {showMenu ? (
                <>
                  <X
                    className='block size-6 cursor-pointer md:hidden'
                    onClick={() => setShowMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='absolute inset-x-0 top-16 z-60'
                  >
                    <AuthButtons className='grid w-full justify-between bg-white p-4 md:hidden' />
                  </motion.div>
                </>
              ) : (
                <Menu
                  className='block size-6 cursor-pointer md:hidden'
                  onClick={() => setShowMenu(true)}
                />
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

const AuthButtons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("grid-cols-2 items-center justify-center gap-4", className)}>
      <Button
        variant="outline"
        className="w-full md:w-[163px]"
        asChild
      >
        <Link href='/login'>
          Sign In
        </Link>
      </Button>
      <Button
        className="w-full md:w-[163px]"
        asChild
      >
        <Link href='/register'>
          Sign Up
        </Link>
      </Button>
    </div>
  );
}