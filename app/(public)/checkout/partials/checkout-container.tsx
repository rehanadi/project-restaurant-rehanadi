import React from "react";

interface CheckoutContainerProps {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}

const CheckoutContainer = ({
  main,
  sidebar,
}: CheckoutContainerProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-5">
      <div className="w-full md:w-3/5 flex flex-col gap-4 md:gap-5">
        {main}
      </div>

      <div className="w-full md:w-2/5 shadow-light bg-white py-4 md:py-5 rounded-2xl flex flex-col gap-4">
        {sidebar}
      </div>
    </div>
  );
};

export default CheckoutContainer;