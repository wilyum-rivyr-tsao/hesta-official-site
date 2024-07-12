import React, { useState, useEffect, useRef } from 'react';

interface AutoIncrementProps {
  targetNumber: number;
  duration: number; // duration in milliseconds
  className?: string;
}

const AutoIncrement: React.FC<AutoIncrementProps> = ({ targetNumber, duration, className }) => {
  const [number, setNumber] = useState(0);

  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          } else {
            setIsInViewport(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const startTime = performance.now();
    const updateNumber = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not exceed 1
      const currentNumber = Math.floor(progress * targetNumber);
      setNumber(currentNumber);

      if (progress < 1 && isInViewport) {
        animationFrameId = requestAnimationFrame(updateNumber);
      }
    };

    if (isInViewport) {
      animationFrameId = requestAnimationFrame(updateNumber);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetNumber, duration, isInViewport]);

  const formattedNumber = new Intl.NumberFormat().format(number);

  return (
    <div className={className} ref={containerRef}>
      {formattedNumber}
    </div>
  );
};

export default AutoIncrement;
