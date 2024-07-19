import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Content1 from './Content1';
import { motion, useInView } from 'framer-motion';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';

function Preview(props: any) {
  const { className, showing } = props;
  const [showingLc, setshowingLc] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (showing) {
      setTimeout(() => {
        setshowingLc(true);
      }, 1500);
    } else {
      setshowingLc(false);
    }
  }, [showing, isInView]);

  return (
    <div className="flex flex-col items-center justify-between" ref={ref}>
      <div className={`-mt-[100px] flex flex-col items-center justify-center`}>
        <motion.span
          className="mt-[4.1667vw] font-harmony text-[1.3889vw] text-xl font-semibold text-[#383B43]"
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
          数字孪生+3D交互
        </motion.span>
        <motion.p
          className={`mt-[2.7778vw] w-[837px] font-harmony text-[16px] font-thin text-[#383B43]`}
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
          基于先进的AI扫描技术以及渲染引擎可以快速对物业进行3D资产转化，根据全方位的资料收集将资产数字化呈现做到极致。同时配合独有的全息技术让用户可以通过3D交互实现对信息的快速捕捉以及处理。
        </motion.p>
      </div>
      <Content1
        delay={1}
        title="五号洗手间漏水"
        time="10:48"
        desc="5号传感器检测到潜在风险，请立即采取行动，查看报告获取更多信息。"
        icon="bg_system.webp"
        target="home"
      />
      <ReadMoreBtn className="" href="/business_user" />
    </div>
  );
}

export default Preview;
