import Image from 'next/image';
import { OrderMenuItem as OrderMenuItemType } from '../types';
import { formatCurrency } from '@/features/shared/utils/currency-utils';

interface OrderMenuItemProps {
  item: OrderMenuItemType;
}

const OrderMenuItem = ({ item }: OrderMenuItemProps) => {
  return (
    <div className="flex-start gap-3 md:gap-4.25">
      <div className="size-16 md:size-20 rounded-xl overflow-hidden relative">
        <Image src={item.image} alt={item.menuName} fill className="object-cover" />
      </div>

      <div className="flex flex-col">
        <span className="font-medium text-sm md:text-md">{item.menuName}</span>
        <span className="font-extrabold text-md">
          {item.quantity} x {formatCurrency(item.price)}
        </span>
      </div>
    </div>
  );
};

export default OrderMenuItem;