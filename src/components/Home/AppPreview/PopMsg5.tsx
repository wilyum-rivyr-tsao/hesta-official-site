import { CDN } from '@/constants';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function PopMsg1(props: any) {
  const { className, ...restProps } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`absolute left-[42%] top-[45%] z-[99] ml-[180px] flex h-[170px] w-[430px] ${className}`}
    >
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
          src="/imgs/circle.webp"
          height={46}
          width={46}
          style={{ width: '2vw', height: '2vw' }}
          alt={''}
        />
      </motion.div>
      <motion.div
        className="ml-4 h-[170px] w-[345px] rounded-lg bg-white bg-opacity-60 backdrop-blur-lg"
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
          style={{ backgroundImage: `url("${CDN}/imgs/bg_system.webp")` }}
          className={`h-[80px] bg-cover bg-center bg-no-repeat px-5 pt-6`}
        >
          <h3 className="font-harmony text-[18px] font-bold">检测到有毒气体</h3>
          <p className="font-harmony font-thin text-[#939397]">厨房1</p>
        </div>
        <div className="mt-[30px] px-5 font-harmony text-xs font-thin text-[#383B43]">
          5号传感器检测到潜在风险，请立即采取行动，查看报告获取更多信息。
        </div>
      </motion.div>
    </div>
  );
}

export default PopMsg1;
