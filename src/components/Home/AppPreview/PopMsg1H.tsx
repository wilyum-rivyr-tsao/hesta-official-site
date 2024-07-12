import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function PopMsg1(props?: any) {
  const { className, title, time, desc, icon } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className={`ml-[708px] mt-[300px] flex h-[170px] w-[430px]`} ref={ref}>
      <motion.div
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
          duration: 0.5,
          delay: 1.5,
          ease: 'easeOut',
        }}
        initial={{ opacity: 0 }}
      >
        <Image
          src="/imgs/circle.png"
          height={46}
          width={46}
          style={{ width: '3vw', height: '3vw' }}
          alt={''}
        />
      </motion.div>
      <motion.div
        className="-mt-[110px] ml-4 h-[170px] w-[345px] rounded-lg bg-white bg-opacity-70 backdrop-blur-lg"
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: 200,
              }
        }
        transition={{
          duration: 0.5,
          delay: 1.5,
          ease: 'easeOut',
        }}
        initial={{ opacity: 0, x: 200 }}
      >
        <div
          className={`h-[80px] bg-[url("/imgs/${icon}")] bg-cover bg-center bg-no-repeat px-5 pt-6`}
        >
          <h3 className="font-harmony text-[18px] font-bold">{title}</h3>
          <p className="font-harmony font-thin text-[#939397]">{time}</p>
        </div>
        <div className="mt-[30px] px-5 font-harmony text-xs font-thin text-[#383B43]">{desc}</div>
      </motion.div>
    </div>
  );
}

export default PopMsg1;
