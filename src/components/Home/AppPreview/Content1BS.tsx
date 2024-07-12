import { useEffect, useRef } from 'react';
import PopMsg1 from './PopMsg1';
import { motion, useInView } from 'framer-motion';

function Content1(props: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { className, delay = 0, title, time, desc, icon, target } = props;
  useEffect(() => {}, [isInView]);

  return (
    <div ref={ref} className="flex w-full justify-center">
      <motion.div
        className={`flex h-[70vh] w-full justify-center overflow-hidden bg-[url('/imgs/screen3half.png')] bg-contain bg-center bg-no-repeat ${className} w-full`}
        animate={
          isInView
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
