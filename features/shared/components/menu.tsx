'use client';

import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { CircleArrowLeft, FileText, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { logout } from '@/features/auth/stores';

const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="shrink-0 w-80 shadow-light bg-white hidden md:flex flex-col gap-6 p-5 rounded-2xl">
      <div className="flex-start gap-2">
        <Avatar className="size-12">
          <AvatarImage
            src={user?.avatar || '/images/avatar.png'}
            alt={user?.name || 'User'}
            className="rounded-full"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <span className="font-bold text-lg">{user?.name || 'User'}</span>
      </div>

      <Separator />

      <nav className="flex flex-col gap-6">
        <Link
          href="/address"
          className={`flex-start gap-2 hover:text-primary-100 transition-colors ${
            isActive('/address') ? 'text-primary-100' : ''
          }`}
        >
          <MapPin className="size-6" />
          <span className="font-medium text-md">Delivery Address</span>
        </Link>

        <Link
          href="/orders"
          className={`flex-start gap-2 hover:text-primary-100 transition-colors ${
            isActive('/orders') ? 'text-primary-100' : ''
          }`}
        >
          <FileText className="size-6" />
          <span className="font-medium text-md">My Orders</span>
        </Link>

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