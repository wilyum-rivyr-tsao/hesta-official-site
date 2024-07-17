import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Content1 from './Content1';
import { motion, useInView } from 'framer-motion';

import Content2 from './Content2';
import { title } from 'process';
import Content3 from './Content3';
import Content4 from './Content4';
import Content6 from '@/components/Home/AppPreview/Content6';

const content = [
  {
    title: '数字孪生+3D交互',
    desc: '基于先进的AI扫描技术以及渲染引擎可以快速对物业进行3D资产转化，根据全方位的资料收集将资产数字化呈现做到极致。同时配合独有的全息技术让用户可以通过3D交互实现对信息的快速捕捉以及处理。',
  },
  {
    title: '全生命周期知识图谱',
    desc: '悉瞰系统致力于打造垂直一体化的智慧管理平台融合先进的产业知识与经验，对建筑从设计到建造再到使用的全生命周期进行数据建模，打造独一无二的全生命周期知识图谱，为平台的人工智能服务打好坚实基础',
  },
  {
    title: 'AI诊断，一键预约',
    desc: '利用知识图谱和全面的数据分析，我们提供AI智能诊断，能即时捕捉并分析故障，迅速执行止损措施并生成诊断报告，帮助用户和运维商及时响应。一键预约功能还可提升服务效率并降低维护成本。',
  },
  {
    title: '多平台多物业管理',
    desc: '支持web，手机，平板等多平台。同时也支持对多个物业同时管理以此达到信息集中管理，资源共享，信息互通等。通过多物业同时管理可以为客户实现资源配置以及利用效率的最大化从而达到降本增效的目的。',
  },
  {
    title: 'AI主动式维护与优化',
    desc: 'HESTA AI通过整合行业知识和实时运行数据，提供多模态分析，为用户主动提供维护优化建议，减少故障频率，提高系统效率和使用寿命，让物业管理更加省心高效。',
  },
  {
    title: '一站式物业管理平台',
    desc: '悉瞰平台通过数据收集，实时监控，远程控制，自动巡检，主动优化，系统联动，工单管理，角色管理等等服务实现了真正的一站式管理平台。最大程度的提高物业管理效率。',
  },
];
function Preview(props: any) {
  const { className, page, onMouseEnter, onMouseLeave } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="relative flex h-[675px] flex-col items-center justify-start sm-screen:h-[505px] 3xl:h-[700px]"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`z-50 -mt-[100px] flex flex-col items-center justify-center`}>
        <motion.span
          className="mt-[60px] font-harmony text-[1.3889vw] text-xl font-semibold text-[#383B43]"
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
            duration: 0.3,
            delay: 0.2,
            ease: 'easeOut',
          }}
          initial={{ y: -20, opacity: 0 }}
        >
          {content[page - 1]?.title}
        </motion.span>
        <motion.p
          className={`mt-[40px] w-[837px] font-harmony text-[16px] font-thin leading-[25px] text-[#383B43]`}
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
            duration: 0.3,
            delay: 0.3,
            ease: 'easeOut',
          }}
          initial={{ y: -30, opacity: 0 }}
        >
          {content[page - 1]?.desc}
        </motion.p>
      </div>
      {page === 1 && (
        <Content1
          delay={0.2}
          title="五号洗手间漏水"
          time="10:48"
          desc="5号传感器检测到潜在风险，请立即采取行动，查看报告获取更多信息。"
          icon="bg_system.jpg"
          target="home"
          key={1}
        />
      )}

      {page === 2 && <Content2 delay={0} className="mt-[52px]" />}

      {page === 3 && <Content3 delay={0} className="mt-[52px]" />}

      {page === 5 && (
        <Content1
          key={2}
          delay={0.2}
          title="检测到有毒气体"
          time="厨房1"
          desc="请立即打开窗户，并尽快离开封闭的环境，前往一个空气流通良好的地方。"
          icon="bg_warning.jpg"
          target="home"
        />
      )}

      {page === 6 && (
        <Content6 delay={0} className="mt-[52px] flex justify-center" showing={page === 6} />
      )}
    </div>
  );
}

export default Preview;
