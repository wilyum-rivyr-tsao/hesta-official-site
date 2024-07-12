import { useEffect, useRef } from 'react';
import PopMsg1 from './PopMsg1';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function Content1(props: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { className = '', delay = 0, title, time, desc, icon, target } = props;
  useEffect(() => {}, [isInView]);

  return (
    <div ref={ref} className="relative flex w-full flex-col justify-center">
      <motion.div
        className={`${className} flex justify-center`}
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
        <Image
          src="/imgs/ill_house2.png"
          alt={''}
          width={2300}
          height={1400}
          className="h-[560px] w-[1220px] sm-screen:h-[400px] sm-screen:w-[871px]"
        />
      </motion.div>

      <PopMsg1
        title={title}
        time={time}
        desc={desc}
        icon={icon}
        target={target}
        className="absolute left-[58%] top-[120px]"
      />
    </div>
  );
}

export default Content1;
