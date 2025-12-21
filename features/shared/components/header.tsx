"use client";

import { useState } from "react";
import Link from "next/link"
import ResponsiveLogo from "./responsive-logo"
import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from "lucide-react";

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
  
            <div className="flex-center gap-4">
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