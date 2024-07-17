import { CDN } from '@/constants';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function PopMsg1(props?: any) {
  const { className, title, time, desc, icon, target, delay = 0.5 } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className={`${className} flex h-[170px] w-[430px]`} ref={ref}>
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
          src={`${CDN}/imgs/circle.png`}
          height={46}
          width={46}
          style={{ width: '2vw', height: '2vw' }}
          alt={''}
        />
      </motion.div>
      <motion.div
        className={`${target === 'business' && '-mt-[110px]'} ml-4 h-[170px] w-[345px] rounded-lg bg-white bg-opacity-80 backdrop-blur-lg`}
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
          delay,
          ease: 'easeOut',
        }}
        initial={{ opacity: 0, x: 200 }}
      >
        <div
          className={`h-[80px] bg-cover bg-center bg-no-repeat px-5 pt-6`}
          style={{ backgroundImage: `url('/imgs/${icon}')` }}
        >
          <h3 className="font-harmony text-[18px] font-[600]">{title}</h3>
          <p className="font-harmony font-thin text-[#959598]">{time}</p>
        </div>
        <div className="mt-[20px] px-5 font-harmony text-[14px] font-thin leading-[25px] text-[#383B43]">
          {desc}
        </div>
      </motion.div>
    </div>
  );
}

export default PopMsg1;
