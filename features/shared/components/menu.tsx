'use client';

import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { CircleArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { logout } from '@/features/auth/stores';
import { menuData, type MenuData } from "../constants/menu-data";
import React from "react";

const Menu = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <div className="shrink-0 w-80 shadow-light bg-white hidden md:flex flex-col gap-6 p-5 rounded-2xl">
      <div className="flex-start gap-2">
        <Avatar className="size-12">
          <AvatarImage
            src={user?.avatar || '/images/avatar.png'}
            alt={user?.name || 'User'}
            className="rounded-full"
          />
          <AvatarFallback>
            {user?.name.charAt(0).toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>

        <span className="font-bold text-lg">{user?.name || 'User'}</span>
      </div>

      <Separator />

      <nav className="flex flex-col gap-6">
        {menuData.map((item) => (
          <MenuItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
        
        <button
          onClick={handleLogout}
          className="flex-start gap-2 hover:text-primary-100 transition-colors cursor-pointer"
        >
          <CircleArrowLeft className="size-6" />
          <span className="font-medium text-md">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Menu;

const MenuItem = ({
  icon,
  label,
  href,
}: MenuData) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex-start gap-2 hover:text-primary-100 transition-colors ${
        isActive ? 'text-primary-100' : ''
      }`}
    >
      {React.createElement(icon, { className: "size-6" })}
      <span className="font-medium text-md">{label}</span>
    </Link>
  );
};