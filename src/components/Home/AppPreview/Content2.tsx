import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CDN } from '@/constants';

function Content2({ delay = 1, className = '' }: { className?: string; delay?: number }) {
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
        duration: 0.2,
        delay,
        ease: 'easeOut',
      }}
      initial={{ x: 2000, opacity: 0 }}
      className={`${className}`}
    >
      <Image
        src={`${CDN}/imgs/Frame9.jpg`}
        alt={''}
        width={1468}
        height={772}
        className={`h-[368px] w-[734px] sm-screen:h-[330px] sm-screen:w-[620px]`}
      />
    </motion.div>
  );
}

export default Content2;
