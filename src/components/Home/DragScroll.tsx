'use client';
import useDynamicSlideUpState from '@/Hooks/useDynamicSlideUpState';
import useIsScrolledIntoView from '@/Hooks/useIsScrolledIntoView';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { motion } from 'framer-motion';
import { CDN } from '@/constants';

const slides = [
  {
    icon: `${CDN}/imgs/3dicon_platform.png`,
    title: '一站式平台+万物互联',
    desc: 'HESTA兼容市场主流协议，并与多家厂商合作，实现万物互联，让用户无需拘泥于特定生态或品牌，在享受个性化选择的同时，依然能够通过一个平台控制全家的设备。',
  },
  {
    icon: `${CDN}/imgs/3dicon_intelligence.png`,
    title: '一键智能',
    desc: 'HESTA结合平台数据、知识图谱和AI算法，为用户定制智能化方案。无论全屋整装或部分后装，HESTA APP几分钟内即可生成解决方案，确保智能家居的可行性、精确性、普惠性和高效性，让每个人轻松享受智慧生活。',
  },
  {
    icon: `${CDN}/imgs/3dicon_interaction.png`,
    title: '3D交互体验',
    desc: 'HESTA利用先进的3D扫描技术，让用户轻松拥有3D资产，并通过物联网集成，实现前所未有的房屋交互，全面可视化，提高用户对房屋的了解和控制。',
  },
  {
    icon: `${CDN}/imgs/3dicon_customization.png`,
    title: '定制化人工智能服务',
    desc: 'HESTA AI提供个性化智能家居服务，根据用户房屋、设备特点和个人偏好，从AI设计渲染、一键智能到AI维护管理与优化，进行针对性决策分析，确保提供完整、可靠的主动式AI服务。',
  },
  {
    icon: `${CDN}/imgs/3dicon_life.png`,
    title: '智慧生活',
    desc: 'HESTA结合尖端AI技术以及全方位的产业知识经验，为用户打造真正的无感式智能家居系统，无需动手，无需说话，房屋就是你的私人管家，想你所想，能你所能，用智慧家居开启未来生活。',
  },
];

function DragScroll(props: any) {
  const scrollContent = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { componentRef, componentTop } = useIsScrolledIntoView();

  const { showing, className } = props;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContent.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContent.current.offsetLeft);
    setScrollLeft(scrollContent.current.scrollLeft);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContent.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContent.current.offsetLeft;
    const walk = x - startX; // Adjust scroll speed if needed
    scrollContent.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const currentScroll = scrollContent.current;
    if (!currentScroll) return;

    currentScroll.addEventListener('mousemove', onMouseMove);
    currentScroll.addEventListener('mouseup', onMouseUp);
    currentScroll.addEventListener('mouseleave', onMouseLeave);

    return () => {
      currentScroll.removeEventListener('mousemove', onMouseMove);
      currentScroll.removeEventListener('mouseup', onMouseUp);
      currentScroll.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isDragging, startX, scrollLeft]);

  const [hover, setHover] = useState(0);

  return (
    <div
      className={`flex min-h-[684px] w-full shrink-0 select-none justify-center overflow-hidden ${className}`}
      ref={componentRef}
    >
      {showing && (
        <div
          className={`no-scrollbar flex justify-start overflow-x-auto px-[140px] pt-[80px]`}
          ref={scrollContent}
          onMouseDown={onMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {slides.map((item: any, index: number) => (
            <motion.div
              key={item.title}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
              animate={
                showing
                  ? {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.2,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              initial={{ y: 1000, opacity: 0 }}
              style={{ backgroundImage: `url("${CDN}/imgs/card2.png")` }}
              // h-[21.875vw] w-[20.9375vw]
              className={`mr-2 flex h-[420px] w-[402px] shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px] 4xl:h-[604px] 4xl:w-[578px]`}
            >
              <motion.div
                style={{ backgroundImage: `url(${item.icon})` }}
                className={`-mt-[3.125vw] h-[11.4583vw] min-h-[220px] w-[15vw] min-w-[288px] bg-cover bg-center bg-no-repeat sm-screen:-mt-[60px] 4xl:h-[283px] 4xl:w-[403px]`}
                animate={
                  hover === index
                    ? {
                        scale: 1.2,
                      }
                    : {}
                }
              ></motion.div>
              <h3 className="mt-[17px] font-harmony text-[20px] font-bold">{item.title}</h3>
              <p className="mt-[20px] font-harmony text-[14px] font-thin">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DragScroll;
