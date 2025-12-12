import Link from "next/link"
import ResponsiveLogo from "./responsive-logo"
import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 h-16 w-full gap-4 bg-white md:h-20">
      <div className="custom-container flex-between h-full gap-4">
        <Link href='/'>
          <ResponsiveLogo />
        </Link>

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
              <AvatarImage src='/images/avatar.png' />
              <AvatarFallback>
                U
              </AvatarFallback>
            </Avatar>

            <span className="hidden md:inline font-semibold text-lg">
              John Doe
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header