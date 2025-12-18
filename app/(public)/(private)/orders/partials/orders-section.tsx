import React from "react";

interface OrdersSectionProps {
  children?: React.ReactNode;
}

const OrdersSection = ({ children }: OrdersSectionProps) => {
  return (
    <div className="shadow-light bg-white p-4 md:p-6 rounded-2xl flex flex-col gap-5">
      {children}
    </div>
  );
};

export default OrdersSection;