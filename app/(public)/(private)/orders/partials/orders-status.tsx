import StatusTabs from "@/features/orders/components/status-tabs";

const OrdersStatus = () => {
  return (
    <div className='w-full flex-start flex-wrap gap-2 md:gap-3'>
      <span className="font-bold text-sm md:text-lg">
        Status
      </span>

      <StatusTabs
        value="Done"
        onChange={() => {}}
      />
    </div>
  );
};

export default OrdersStatus;