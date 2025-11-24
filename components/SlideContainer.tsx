import React, { ReactNode } from 'react';

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children, className = "", id }) => {
  return (
    <section 
      id={id}
      className={`h-[100dvh] w-full snap-start snap-always flex flex-col justify-center items-center px-6 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SlideContainer;