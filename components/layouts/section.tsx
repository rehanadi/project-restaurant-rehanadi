import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  id?: string;
  className?: string;
};

export const Section = ({
  children,
  title,
  id,
  className,
}: SectionProps) => {
  return (
    <div
      className={cn(
        "custom-container w-full pt-4 md:pt-12 pb-10 md:pb-25 flex flex-col gap-4 md:gap-8",
        className
      )}
      id={id}
    >
      {title && (
        <>
          {typeof title === 'string' ? (
            <h1 className="font-extrabold text-display-xs md:text-display-md">
              {title}
            </h1>
          ) : (
            <>{title}</>
          )}
        </>
      )}

      <div>
        {children}
      </div>
    </div>
  );
};

export default Section;