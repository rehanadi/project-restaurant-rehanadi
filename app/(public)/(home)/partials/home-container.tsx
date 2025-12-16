import React from 'react'

interface HomeContainerProps {
  children?: React.ReactNode;
}

const HomeContainer = ({ children }: HomeContainerProps) => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 pb-12 md:pb-25">
      {children}
    </div>
  );
};

export default HomeContainer;