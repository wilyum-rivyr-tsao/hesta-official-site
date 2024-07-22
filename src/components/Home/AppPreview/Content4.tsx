import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CDN } from '@/constants';

function Content4({
  delay = 1,
  className,
  isInView = false,
}: {
  delay?: number;
  className?: string;
  isInView?: boolean;
}) {
  const ref = useRef(null);
  const isInViewInner = useInView(ref);

  return (
    <motion.div
      ref={ref}
      animate={
        isInView || isInViewInner
          ? {
              x: 0,
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration: 0.5,
        // delay,
        ease: 'easeOut',
      }}
      initial={{ x: 2000, opacity: 0 }}
      className={className}
    >
      <Image
        src={`${CDN}/imgs/bg_computer.webp`}
        alt={''}
        width={5000}
        height={5000}
        className={`h-[850px] w-full`}
        priority
      />
    </motion.div>
  );
}

export default Content4;
