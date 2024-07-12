import { useEffect, useRef, useState } from 'react';
import PopMsg5 from './PopMsg5';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';
import Image from 'next/image';

function Preview(props: any) {
  const { className, showing } = props;

  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <div className={`-mt-[100px] flex flex-col items-center justify-center`}>
        <motion.span
          className="mt-[4.1667vw] font-harmony text-[1.3889vw] text-xl font-semibold"
          animate={
            isInView
              ? {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: 'easeOut',
          }}
          initial={{ y: -20, opacity: 0 }}
        >
          AI主动式维护与优化
        </motion.span>
        <motion.p
          className="mt-[2.7778vw] w-[58.125vw] font-harmony font-thin"
          animate={
            isInView
              ? {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.5,
            delay: 1,
            ease: 'easeOut',
          }}
          initial={{ y: -30, opacity: 0 }}
        >
          通过收集众多行业知识以及经验再合物业实时运行数据，HESTA
          AI多模态分析比对为用户提供主动式的维护优化以及建议，最大程度的减少问题与故障发生的频率，提高建筑物内各个系统的工作效率以及使用寿命，让用户更加省心高效的进行物业管理
        </motion.p>
      </div>

      <PopMsg5 className={`animate__animated`} />

      {/* <motion.div
        className={``}
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
          delay: 1,
        }}
        initial={{ opacity: 0 }}
      ></motion.div> */}
      <div className="flex w-full shrink-0 items-center justify-center">
        <Image
          src="/imgs/screen3half.png"
          className="mt-20 h-[643px] w-[1462px]"
          alt={''}
          width={4000}
          height={4000}
        />
      </div>
      <ReadMoreBtn className="absolute bottom-[50px]" href="/business_user" />
    </div>
  );
}

export default Preview;
