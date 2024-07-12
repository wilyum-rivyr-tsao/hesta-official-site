import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';
import Content3 from './Content3';

function Preview({ className }: { className?: string; showState: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <div className={`-mt-[100px] flex flex-col items-center justify-center ${className}`}>
        <div className={`animate__animated flex flex-col items-center justify-center`}>
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
            AI诊断，一键预约
          </motion.span>
          <motion.p
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
            className="mt-[2.7778vw] w-[58.125vw] font-harmony font-thin"
          >
            依托于知识图谱以及全方位系统的数据监测、收集及分析，我们可以提供AI智能诊断功能，对问题或故障进行即时捕捉分析，迅速完成平台可执行的止损措施同时生成全面的诊断报告让用户和运维商可以根据报告全面了解情况及时做出响应。同时配合一键预约达到服务效率最大化的同时维护成本。
          </motion.p>
        </div>

        <Content3 className="mt-8 overflow-hidden sm-screen:h-[300px] sm-screen:w-[818px]" />
        <ReadMoreBtn className="absolute bottom-[50px]" href="/business_user" />
      </div>
    </div>
  );
}

export default Preview;
