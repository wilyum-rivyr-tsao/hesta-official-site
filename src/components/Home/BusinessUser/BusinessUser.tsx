import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import BackgroundImage from '@/components/Basic/BackgroundImage';
import { CDN } from '@/constants';

const Index = forwardRef(function Index(props: any, ref: Ref<HTMLDivElement>) {
  const { page, ...restProps } = props;
  const [initAnimate, setinitAnimate] = useState(false);

  const refInner = useRef(null);
  const isInView = useInView(refInner);

  return (
    <motion.div className="" {...restProps}>
      <BackgroundImage
        src={`/imgs/screen2.webp`}
        className="flex h-[100vh] min-h-[700px] w-full flex-col items-center justify-center"
        contentClass="w-[100vw]"
      >
        <div className={`flex h-[100vh] min-h-[700px] w-full`}>
          <Image
            src={`${CDN}/imgs/ill_square1.webp`}
            alt=""
            width={310}
            height={310}
            className={`animate__animated animate__slower absolute left-[22.8472vw] top-[16%] h-[310px] w-[310px] ${page === 2 ? '' : ''} ${initAnimate ? 'animate__fadeIn' : 'shake10'}`}
            ref={refInner}
          />

          <Image
            src={`${CDN}/imgs/ill_square2.webp`}
            alt=""
            width={360}
            height={360}
            className={`animate__animated animate__slower absolute left-[54.1667%] top-[22%] h-[360px] w-[360px] ${page === 2 ? '' : ''} ${initAnimate ? 'animate__fadeIn' : 'shake11'}`}
          />
          <Image
            src={`${CDN}/imgs/ill_square3.webp`}
            alt=""
            width={120}
            height={120}
            className={`animate__animated animate__slower absolute left-[20.1389%] top-[60%] h-[120px] w-[120px] ${page === 2 ? '' : ''} ${initAnimate ? 'animate__fadeIn' : 'shake11'}`}
          />
          <Image
            src={`${CDN}/imgs/ill_circle.webp`}
            alt=""
            width={186}
            height={186}
            className={`animate__animated animate__slower absolute left-[59.9306%] top-[63%] h-[186px] w-[186px] ${page === 2 ? '' : ''} ${initAnimate ? 'animate__fadeIn' : 'shake12'}`}
          />
        </div>
        {isInView && (
          <div className="absolute top-0 z-20">
            <div className={`flex h-[100vh] w-[100vw] flex-col items-center justify-center`}>
              <motion.h3
                className="cursor-pointer text-center font-harmony text-[48px] font-bold text-[#383B43]"
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
                initial={{ y: -50, opacity: 0 }}
              >
                商业用户创新优势
              </motion.h3>
              <motion.p
                className="mt-[20px] cursor-pointer text-center font-harmony text-[20px] font-thin text-[#383B43]"
                animate={
                  isInView
                    ? {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                      }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: 'easeOut',
                }}
                initial={{ y: -50, opacity: 0 }}
              >
                深入虚拟世界，探索全新维度，享受视觉盛宴
              </motion.p>
            </div>
          </div>
        )}
      </BackgroundImage>
    </motion.div>
  );
});

export default Index;
