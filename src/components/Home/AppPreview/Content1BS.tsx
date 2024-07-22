import { useEffect, useRef } from 'react';
import PopMsg1 from './PopMsg1';
import { motion, useInView } from 'framer-motion';
import { CDN } from '@/constants';

function Content1(props: any) {
  const ref = useRef(null);
  const isInViewInner = useInView(ref);
  const { className, delay = 0, title, time, desc, icon, target, isInView } = props;
  useEffect(() => {}, [isInView]);

  return (
    <div className="flex w-full justify-center" ref={ref}>
      <motion.div
        className={`flex h-[70vh] w-full justify-center overflow-hidden bg-contain bg-center bg-no-repeat ${className} w-full`}
        style={{ backgroundImage: `url('${CDN}/imgs/screen3half.webp')` }}
        animate={
          isInView || isInViewInner
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1,
          delay,
        }}
        initial={{ opacity: 0 }}
      >
        <PopMsg1
          title={title}
          time={time}
          desc={desc}
          icon={icon}
          target={target}
          className="relative left-[18vw] top-[14vw]"
        />
      </motion.div>
    </div>
  );
}

export default Content1;
