import { Badge } from '@/components/ui/badge';
import { OrderStatus } from '../types';
import { orderStatusData } from '../constants/order-status';

interface StatusTabsProps {
  value: OrderStatus;
  onChange: (value: OrderStatus) => void;
}

const StatusTabs = ({ value, onChange }: StatusTabsProps) => {
  return (
    <div className="flex-start flex-wrap gap-2 md:gap-3">
      {orderStatusData.map((status) => (
        <Badge
          key={status.value}
          variant={value === status.value ? 'danger-rounded' : 'outline-rounded'}
          className="cursor-pointer"
          onClick={() => onChange(status.value)}
        >
          {status.label}
        </Badge>
      ))}
    </div>
  );
};

export default StatusTabs;