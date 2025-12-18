import React from 'react'

interface OrderListProps {
  children?: React.ReactNode;
}

const OrderList = ({ children }: OrderListProps) => {
  return (
    <div className="flex flex-col gap-5">
      {children}
    </div>
  );
};

export default OrderList;