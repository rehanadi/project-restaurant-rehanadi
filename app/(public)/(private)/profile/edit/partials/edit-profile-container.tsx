import React from "react";

interface EditProfileContainerProps {
  children?: React.ReactNode;
}

const EditProfileContainer = ({ children }: EditProfileContainerProps) => {
  return (
    <div className="custom-container w-full pt-4 md:pt-12 pb-10 md:pb-25 flex items-start justify-between gap-4 md:gap-8">
      {children}
    </div>
  );
};

export default EditProfileContainer;