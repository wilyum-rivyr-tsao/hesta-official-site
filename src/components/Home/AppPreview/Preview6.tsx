import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';
import { CDN } from '@/constants';

function Preview2({
  showing,
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
      <div className={`-mt-[100px] flex flex-col items-center justify-center ${className}`}>
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
            一站式物业管理平台
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
            悉瞰平台通过数据收集，实时监控，远程控制，自动巡检，主动优化，系统联动，工单管理，角色管理等等服务实现了真正的一站式管理平台。最大程度的提高物业管理效率。生的频率，提高建筑物内各个系统的工作效率以及使用寿命，让用户更加省心高效的进行物业管理
          </motion.p>
        </div>
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
            duration: 1,
            delay: 1,
          }}
          initial={{ opacity: 0 }}
        >
          <Image
            src={`${CDN}/imgs/frame06.webp`}
            alt={''}
            width={2000}
            height={800}
            className={`-mt-[20px] h-[33vw] w-[75.4167vw] sm-screen:h-[390px] sm-screen:w-[925px]`}
          />
        </motion.div>
        <ReadMoreBtn className="absolute bottom-[50px]" href="/business_user" />
      </div>
    </div>
  );
}

export default Preview2;
