import StatusTabs from '@/features/orders/components/status-tabs';
import { OrderStatus } from '@/features/orders/types';

interface OrdersStatusProps {
  value: OrderStatus;
  onChange: (value: OrderStatus) => void;
}

const OrdersStatus = ({ value, onChange }: OrdersStatusProps) => {
  return (
    <div className="w-full flex-start flex-wrap gap-2 md:gap-3">
      <span className="font-bold text-sm md:text-lg">Status</span>

      <StatusTabs value={value} onChange={onChange} />
    </div>
  );
};

export default OrdersStatus;