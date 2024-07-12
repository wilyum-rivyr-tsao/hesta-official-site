import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';

function Preview(props: any) {
  const { className, showState } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className={`${className}`} ref={ref}>
      <div className="-mt-[100px] flex flex-col items-center justify-center">
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
            多平台多物业管理
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
            支持web，手机，平板等多平台。同时也支持对多个物业同时管理以此达到信息集中管理，资源共享，信息互通等。通过多物业同时管理可以为客户实现资源配置以及利用效率的最大化从而达到降本增效的目的。
          </motion.p>
        </div>
        <ReadMoreBtn className="absolute bottom-[50px]" href="/business_user" />
      </div>
    </div>
  );
}

export default Preview;
