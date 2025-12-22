import { FileText, MapPin, User } from "lucide-react";

export interface MenuData {
  icon: React.ElementType;
  label: string;
  href: string;
}

export const menuData: MenuData[] = [
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: MapPin,
    label: "Delivery Address",
    href: "/address",
  },
  {
    icon: FileText,
    label: "My Orders",
    href: "/orders",
  },
];