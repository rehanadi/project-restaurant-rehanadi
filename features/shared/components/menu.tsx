import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { CircleArrowLeft, FileText, MapPin } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="shrink-0 w-80 shadow-light bg-white hidden md:flex flex-col gap-6 p-5 rounded-2xl">
      <div className="flex-start gap-2">
        <Avatar className='size-12'>
          <AvatarImage
            src="/images/avatar.png"
            className="rounded-full"
          />
          <AvatarFallback>
            U
          </AvatarFallback>
        </Avatar>

        <span className="font-bold text-lg">
          John Doe
        </span>
      </div>

      <Separator />

      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex-start gap-2 hover:text-primary-100 transition-colors"
        >
          <MapPin className="size-6" />
          <span className="font-medium text-md">
            Delivery Address
          </span>
        </Link>

        <Link
          href="/"
          className="flex-start gap-2 hover:text-primary-100 transition-colors"
        >
          <FileText className="size-6" />
          <span className="font-medium text-md">
            My Orders
          </span>
        </Link>

        <Link
          href="/"
          className="flex-start gap-2 hover:text-primary-100 transition-colors"
        >
          <CircleArrowLeft className="size-6" />
          <span className="font-medium text-md">
            Logout
          </span>
        </Link>
      </nav>
    </div>
  )
}

export default Menu;