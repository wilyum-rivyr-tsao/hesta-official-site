import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CDN } from '@/constants';

function Content4({ delay = 1, className }: { delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      animate={
        isInView
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
        duration: 0.5,
        // delay,
        ease: 'easeOut',
      }}
      initial={{ x: 2000, opacity: 0 }}
      className={className}
    >
      <Image
        src={`${CDN}/imgs/bg_computer.png`}
        alt={''}
        width={5000}
        height={5000}
        className={`h-[850px] w-full`}
      />
    </motion.div>
  );
}

export default Content4;
