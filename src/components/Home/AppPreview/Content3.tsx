import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { CDN } from '@/constants';

function Content3({ delay = 0, className }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={`flex h-[398px] flex-row items-end justify-between ${className}`} ref={ref}>
      <motion.div
        animate={
          isInView
            ? {
                x: 0,
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 0.5,
          delay,
          ease: 'easeOut',
        }}
        initial={{ x: 2000, opacity: 0 }}
      >
        <Image
          src={`${CDN}/imgs/previewContent3a.png`}
          alt={''}
          width={413}
          height={800}
          className={`animate__animated h-[386px] w-[413px] opacity-90 sm-screen:h-[290px] sm-screen:w-[311px]`}
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
            : {}
        }
        transition={{
          duration: 0.5,
          delay: delay + 0.5,
          ease: 'easeOut',
        }}
        initial={{ x: 2000, opacity: 0 }}
        className=""
      >
        {/* <Image
          src="/imgs/previewContent3b.png"
          alt={''}
          width={452}
          height={800}
          className={`animate__animated ml-4 h-[386px] w-[452px] opacity-90 sm-screen:h-[290px] sm-screen:w-[341px]`}
        /> */}
        <div className="ml-4 rounded-sm bg-white opacity-90">
          {isInView && (
            <video
              className={`h-[386px] w-[452px] opacity-90 sm-screen:h-[290px] sm-screen:w-[341px]`}
              autoPlay
              muted
              src={`/video/jiemian.mp4`}
              loop
            />
          )}
        </div>
      </motion.div>
      <motion.div
        animate={
          isInView
            ? {
                x: 0,
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 0.5,
          delay: delay + 1,
          ease: 'easeOut',
        }}
        initial={{ x: 2000, opacity: 0 }}
        className="shrink-0"
      >
        <Image
          src={`${CDN}/imgs/previewContent3c.png`}
          alt={''}
          width={193}
          height={800}
          className={`-mb-10 -ml-4 h-[233px] w-[230px] opacity-90 sm-screen:h-[175px] sm-screen:w-[195px]`}
        />
      </motion.div>
    </div>
  );
}

export default Content3;
