'use client';
import useDynamicSlideUpState from '@/Hooks/useDynamicSlideUpState';
import useIsScrolledIntoView from '@/Hooks/useIsScrolledIntoView';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { motion } from 'framer-motion';
import { CDN } from '@/constants';

function DragScroll(props: any) {
  const scrollContent = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { componentRef, componentTop } = useIsScrolledIntoView();
  const [slideUpState, setCard] = useDynamicSlideUpState([
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
  ]);
  const { showing, className } = props;

  useEffect(() => {
    if (showing) {
      const delay = 200;
      const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];
      cards.forEach((card, index) => {
        setTimeout(
          () => {
            setCard(card, true);
          },
          delay * (index * 1.2) + 800,
        );
      });
    } else {
      ['card1', 'card2', 'card3', 'card4', 'card5'].forEach((card) => {
        setCard(card, false);
      });
    }
  }, [showing]);

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
      className={`flex w-full shrink-0 select-none justify-center overflow-hidden ${className}`}
      ref={componentRef}
    >
      {showing && (
        <div
          className={`no-scrollbar flex justify-start overflow-x-auto px-[100px] pt-[80px]`}
          ref={scrollContent}
          onMouseDown={onMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <motion.div
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
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
              delay: 0,
              ease: 'easeOut',
            }}
            initial={{ y: 1000, opacity: 0 }}
            style={{ backgroundImage: `url("${CDN}/imgs/card2.png")` }}
            className={`mr-2 flex h-[420px] w-[402px] shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px]`}
          >
            <motion.div
              style={{ backgroundImage: `url(${CDN}/imgs/3dicon_platform.png)` }}
              className={`-mt-[60px] h-[220px] w-[288px] bg-cover bg-center bg-no-repeat`}
              animate={
                hover === 1
                  ? {
                      scale: 1.2,
                    }
                  : {}
              }
            ></motion.div>
            <h3 className="mt-[17px] font-harmony text-[20px] font-bold">一站式平台+万物互联</h3>
            <p className="mt-[20px] font-harmony text-[14px] font-thin">
              HESTA兼容市场主流协议，并与多家厂商合作，实现万物互联，让用户无需拘泥于特定生态或品牌，在享受个性化选择的同时，依然能够通过一个平台控制全家的设备。
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(0)}
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
              delay: 0.1,
              ease: 'easeOut',
            }}
            initial={{ y: 1000, opacity: 0 }}
            style={{ backgroundImage: `url("${CDN}/imgs/card2.png")` }}
            className={`mr-2 flex h-[420px] w-[402px] shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px]`}
          >
            <motion.div
              animate={
                hover === 2
                  ? {
                      scale: 1.2,
                    }
                  : {}
              }
              style={{ backgroundImage: `url("${CDN}/imgs/3dicon_intelligence.png")` }}
              className={`-mt-[60px] h-[220px] w-[288px] bg-cover bg-center bg-no-repeat`}
            ></motion.div>
            <h3 className="mt-[17px] font-harmony text-[20px] font-bold">一键智能</h3>
            <p className="mt-[20px] font-harmony text-[14px] font-thin">
              HESTA结合平台数据、知识图谱和AI算法，为用户定制智能化方案。无论全屋整装或部分后装，HESTA
              APP几分钟内即可生成解决方案，确保智能家居的可行性、精确性、普惠性和高效性，让每个人轻松享受智慧生活。
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(0)}
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
              delay: 0.2,
              ease: 'easeOut',
            }}
            initial={{ y: 1000, opacity: 0 }}
            style={{ backgroundImage: `url("${CDN}/imgs/card2.png")` }}
            className={`mr-2 flex h-[420px] w-[402px] shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px]`}
          >
            <motion.div
              animate={
                hover === 3
                  ? {
                      scale: 1.2,
                    }
                  : {}
              }
              style={{ backgroundImage: `url("${CDN}/imgs/3dicon_interaction.png")` }}
              className={`-mt-[60px] h-[220px] w-[288px] bg-cover bg-center bg-no-repeat`}
            ></motion.div>
            <h3 className="mt-[17px] font-harmony text-[20px] font-bold">3D交互体验</h3>
            <p className="mt-[20px] font-harmony text-[14px] font-thin">
              HESTA利用先进的3D扫描技术，让用户轻松拥有3D资产，并通过物联网集成，实现前所未有的房屋交互，全面可视化，提高用户对房屋的了解和控制。
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(0)}
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
              delay: 0.3,
              ease: 'easeOut',
            }}
            initial={{ y: 1000, opacity: 0 }}
            style={{ backgroundImage: `url("${CDN}/imgs/card2.png")` }}
            className={`mr-2 flex h-[420px] w-[402px] shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px]`}
          >
            <motion.div
              animate={
                hover === 4
                  ? {
                      scale: 1.2,
                    }
                  : {}
              }
              style={{
                backgroundImage: `url("${CDN}/imgs/3dicon_customization.png")`,
              }}
              className={`-mt-[60px] h-[220px] w-[288px] bg-cover bg-center bg-no-repeat`}
            ></motion.div>
            <h3 className="mt-[17px] font-harmony text-[20px] font-bold">定制化人工智能服务</h3>
            <p className="mt-[20px] font-harmony text-[14px] font-thin">
              HESTA
              AI提供个性化智能家居服务，根据用户房屋、设备特点和个人偏好，从AI设计渲染、一键智能到AI维护管理与优化，进行针对性决策分析，确保提供完整、可靠的主动式AI服务。
            </p>
          </motion.div>
          <motion.div
            onMouseEnter={() => setHover(5)}
            onMouseLeave={() => setHover(0)}
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
              delay: 0.4,
              ease: 'easeOut',
            }}
            initial={{ y: 1000, opacity: 0 }}
            style={{ backgroundImage: `url("${CDN}/imgs/card2.png")` }}
            className={`mr-2 flex h-[420px] w-[402px] shrink-0 flex-col items-center bg-contain bg-center bg-no-repeat px-[40px]`}
          >
            <motion.div
              animate={
                hover === 5
                  ? {
                      scale: 1.2,
                    }
                  : {}
              }
              className={`-mt-[60px] h-[220px] w-[288px] bg-[url("/imgs/3dicon_life.png")] bg-cover bg-center bg-no-repeat`}
            ></motion.div>
            <h3 className="mt-[17px] font-harmony text-[20px] font-bold">智慧生活</h3>
            <p className="mt-[20px] font-harmony text-[14px] font-thin">
              HESTA结合尖端AI技术以及全方位的产业知识经验，为用户打造真正的无感式智能家居系统，无需动手，无需说话，房屋就是你的私人管家，想你所想，能你所能，用智慧家居开启未来生活。
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default DragScroll;
