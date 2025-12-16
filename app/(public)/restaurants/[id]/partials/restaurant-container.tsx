import React from 'react'

interface RestaurantContainerProps {
  children?: React.ReactNode;
}

const RestaurantContainer = ({ children }: RestaurantContainerProps) => {
  return (
    <div className="custom-container w-full pt-4 md:pt-12 pb-10 md:pb-12 flex flex-col gap-4 md:gap-8">
      {children}
    </div>
  );
};

export default RestaurantContainer;