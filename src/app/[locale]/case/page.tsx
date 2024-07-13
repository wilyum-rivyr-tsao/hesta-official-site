'use client';

import { useTranslations } from 'next-intl';
import ContentLayout from '@/components/ContentLayout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useReducer, useRef, useState } from 'react';
import BusinessCase1 from '../../../components/Cases/BusinessCase1';
import BusinessCase2 from '@/components/Cases/BusinessCase2';
import { CDN } from '@/constants';

function Case() {
  const t = useTranslations();

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'bCase1':
        return { ...state, bCase1: action.payload };
      case 'bCase2':
        return { ...state, bCase2: action.payload };
      default:
        return state;
    }
  };
  const [cases, dispatchCase] = useReducer(reducer, {
    bCase1: false,
    bCase2: false,
  });

  const [current, setcurrent] = useState('all');
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <div>
      <ContentLayout>
        <div className={`mx-[140px] mt-[210px]`}>
          <div className="flex flex-col">
            <div>
              <h2 className="mx-auto items-center justify-center font-harmony text-[48px] font-black">
                案例分析
              </h2>
              <p className="mb-[26px] font-harmony text-[20px] font-light">
                通过案例分析，我们将探讨数字化智能的实际应用，以及带来的改变与优化
              </p>
            </div>
            <div className="flex">
              <div
                className={`mr-4 h-[40px] w-[98px] cursor-pointer border border-[#383B43] text-center text-[14px] leading-10 hover:bg-[#383B43] hover:text-[#fff] ${current === 'all' && 'bg-[#383B43] text-[#fff]'}`}
                onClick={() => {
                  setcurrent('all');
                }}
              >
                所有
              </div>
              <div
                className={`mr-4 flex h-[40px] w-[98px] cursor-pointer items-center justify-center border border-[#383B43] text-[14px] text-[#383b43] hover:bg-[#383B43] hover:text-[#fff] ${current === 'customer' && 'bg-[#383B43] text-[#fff]'}`}
                onClick={() => {
                  setcurrent('customer');
                }}
              >
                <Image
                  src={`${CDN}/imgs/case/icon_dwelling.png`}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-2"
                />
                住宅
              </div>
              <div
                className={`mr-4 flex h-[40px] w-[98px] cursor-pointer items-center justify-center border border-[#383B43] text-[14px] text-[#383b43] hover:bg-[#383B43] hover:text-[#fff] ${current === 'business' && 'bg-[#383B43] text-[#fff]'}`}
                onClick={() => {
                  setcurrent('business');
                }}
              >
                <Image
                  src={`${CDN}/imgs/case/icon_business.png`}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-2"
                />
                商业
              </div>
            </div>
            <Image
              src={`${CDN}/imgs/case/case_square.png`}
              alt=""
              width={500}
              height={500}
              className="absolute right-[9.7222vw] top-[100px] h-[500px] w-[500px]"
            />
          </div>
          <div className="relative z-30 mt-[80px]">
            {(current === 'all' || current === 'business') && (
              <div
                className="relative flex bg-white"
                onClick={() => {
                  dispatchCase({ type: 'bCase1', payload: true });
                }}
                onMouseEnter={() => setHoverIndex(1)}
                onMouseLeave={() => setHoverIndex(0)}
              >
                <div className="h-[30.2083vw] w-[50%] overflow-hidden">
                  <motion.div
                    animate={
                      hoverIndex === 1
                        ? {
                            scale: 1.1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                    }}
                    initial={{}}
                    className="sm-screen:min-h-[435px] sm-screen:min-w-[580px]"
                  >
                    <Image
                      src={`${CDN}/imgs/case/Frame51.png`}
                      alt=""
                      width={1000}
                      height={800}
                      className="h-[30.2083vw]"
                    />
                  </motion.div>
                </div>
                <div className="flex w-[50%] flex-col px-[6.25vw] pt-[8.4722vw] sm-screen:min-w-[580px]">
                  <Image
                    src={`${CDN}/imgs/case/icon_business_white.png`}
                    alt=""
                    width={500}
                    height={500}
                    className="h-[46px] w-[46px]"
                  />
                  <h3 className="mb-4 mt-2 font-harmony text-[20px] font-black">
                    Hesta助力北京商业综合体实现卓越运营
                  </h3>
                  <p className="font-harmony font-light">
                    在现代都市生活中，商业综合体不仅仅是购物和娱乐的场所，更是城市经济的重要支撑点。位于北京市的某商业综合体，通过引入Hesta的先进物业管理解决方案，成为了智慧物业管理的新标杆。管理面积达150,000平方米的这个综合体，正因为Hesta的全面服务而焕然一新。
                  </p>
                </div>
              </div>
            )}

            {(current === 'all' || current === 'customer') && (
              <div
                className="relative mt-[30px] flex bg-white"
                onClick={() => {
                  dispatchCase({ type: 'bCase2', payload: true });
                }}
                onMouseEnter={() => setHoverIndex(2)}
                onMouseLeave={() => setHoverIndex(0)}
              >
                <div className="flex w-[50%] flex-col px-[6.25vw] pt-[8.4722vw] sm-screen:min-w-[580px]">
                  <Image
                    src={`${CDN}/imgs/case/icon_business_white.png`}
                    alt=""
                    width={500}
                    height={500}
                    className="h-[46px] w-[46px]"
                  />
                  <h3 className="mb-4 mt-2 font-harmony text-[20px] font-black">
                    智能豪华别墅的未来
                  </h3>
                  <p className="font-harmony font-light">
                    在现代高端生活中，豪华别墅不仅是奢华的居住空间，更是智能化生活的象征。对于管理面积达1095平方米的豪华别墅而言，传统的物业管理方式已难以满足业主对高效、便捷和智能化的需求。Hesta凭借其先进技术和全面服务，成功将这座豪华别墅带入智能管理的新纪元，大幅提升了物业管理的质量和效率。
                  </p>
                </div>

                <div className="h-[30.2083vw] w-[50%] overflow-hidden">
                  <motion.div
                    animate={
                      hoverIndex === 2
                        ? {
                            scale: 1.1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                    }}
                    initial={{}}
                    className="sm-screen:min-h-[435px] sm-screen:min-w-[580px]"
                  >
                    <Image
                      src={`${CDN}imgs/case/Frame51-2.png`}
                      alt=""
                      width={1000}
                      height={800}
                      className="h-[30.2083vw]"
                    />
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ContentLayout>
      {cases.bCase1 && (
        <BusinessCase1
          close={() => {
            dispatchCase({ type: 'bCase1', payload: false });
          }}
        />
      )}

      {cases.bCase2 && (
        <BusinessCase2
          close={() => {
            dispatchCase({ type: 'bCase2', payload: false });
          }}
        />
      )}
    </div>
  );
}

export default Case;
