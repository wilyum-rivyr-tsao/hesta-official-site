import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Content2 from './Content2';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';

function Preview2({
  className,
  showState,
}: {
  showing: boolean;
  className?: string;
  showState: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <div className={`-mt-[100px] flex flex-col items-center justify-center`}>
        <div className={`flex flex-col items-center justify-center`}>
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
            全生命周期知识图谱
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
            悉瞰系统致力于打造垂直一体化的智慧管理平台融合先进的产业知识与经验，对建筑从设计到建造再到使用的全生命周期进行数据建模，打造独一无二的全生命周期知识图谱，为平台的人工智能服务打好坚实基础
          </motion.p>
        </div>
        <Content2 />
        <ReadMoreBtn className="absolute bottom-[50px]" href="/business_user" />
      </div>
    </div>
  );
}

export default Preview2;
