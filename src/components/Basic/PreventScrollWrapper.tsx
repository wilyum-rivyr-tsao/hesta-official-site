// PreventScrollWrapper.tsx
import React, { useRef, useEffect, ReactNode, HTMLAttributes } from 'react';

interface PreventScrollWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PreventScrollWrapper: React.FC<PreventScrollWrapperProps> = ({ children, ...props }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleMouseEnter = () => {
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
    };

    const handleMouseLeave = () => {
      document.removeEventListener('wheel', preventScroll, { passive: false });
      document.removeEventListener('touchmove', preventScroll, { passive: false });
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener('mouseenter', handleMouseEnter);
      wrapperElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener('mouseenter', handleMouseEnter);
        wrapperElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} {...props}>
      {children}
    </div>
  );
};

export default PreventScrollWrapper;
