import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CDN } from '@/constants';

function Content2({
  delay = 1,
  className = '',
  isInView = false,
}: {
  className?: string;
  delay?: number;
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
          : {
              opacity: 0,
              x: -2000,
            }
      }
      transition={{
        duration: 0.2,
        delay,
        ease: 'easeOut',
      }}
      initial={{ x: 2000, opacity: 0 }}
      className={`${className}`}
    >
      <Image
        src={`${CDN}/imgs/Frame9.webp`}
        alt={''}
        width={1468}
        height={772}
        className={`h-[498px] w-[948px]`}
      />
    </motion.div>
  );
}

export default Content2;
