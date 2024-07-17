import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CDN } from '@/constants';

function Content4({
  delay = 1,
  className,
  charPos = 'bottom',
  showing = false,
}: {
  delay?: number;
  className?: string;
  charPos?: string;
  showing: boolean;
}) {
  const ref = useRef(null);
  // const isInView = useInView(ref);
  const isInView = showing;

  return (
    <div className={`${className} relative`} ref={ref}>
      <motion.div
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
      >
        <Image
          src={`${CDN}/imgs/Group1600.png`}
          alt={''}
          width={5000}
          height={5000}
          className={`h-[400px] w-[1200px]`}
        />
      </motion.div>
      <motion.div
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
          delay: delay + 0.2,
          ease: 'easeOut',
        }}
        initial={{ x: 2000, opacity: 0 }}
        className={`absolute ${charPos === 'bottom' ? 'top-[150px]' : '-top-[150px]'} `}
      >
        <Image
          src={`${CDN}/imgs/slide6chart2.png`}
          alt={''}
          width={1420}
          height={900}
          className={`h-[325px] w-[395px]`}
        />
      </motion.div>
    </div>
  );
}

export default Content4;
