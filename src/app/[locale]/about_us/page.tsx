'use client';
import { useTranslations } from 'next-intl';
import ContentLayout from '@/components/ContentLayout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import firstImg from '/public/imgs/about_us/first.webp';
import BackgroundImage from '@/components/Basic/BackgroundImage';
import RoundedPagination from '@/components/Basic/RoundedPagination';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import IncreaseNumberAnimation from '@/components/Basic/IncreaseNumberAnimation';
import { motion, useInView } from 'framer-motion';
import { CDN } from '@/constants';
import SliderCard from '../../../components/Basic/SliderCard';

function isCenterIndex(array: any[], index: number): boolean {
  const length = array.length;

  if (length === 0) {
    return false; // Array is empty, no center index
  }

  const middleIndex1 = Math.floor((length - 1) / 2);
  const middleIndex2 = Math.ceil((length - 1) / 2);

  return index === middleIndex1 || index === middleIndex2;
}

type Item = { date: string; desc: string; page: number };

function updateArrayOnPageChange(arr: Item[], page: number, direction: 1 | -1): Item[] {
  if (direction === 1) {
    // Move the first item to the end
    const firstItem = arr.shift();
    if (firstItem !== undefined) {
      arr.push(firstItem);
    }
  } else if (direction === -1) {
    // Move the last item to the beginning
    const lastItem = arr.pop();
    if (lastItem !== undefined) {
      arr.unshift(lastItem);
    }
  }

  return arr;
}

function AboutUs() {
  const t = useTranslations();
  const statisticsRef = useRef(null);
  const isInView = useInView(statisticsRef);

  const conceptRef = useRef(null);
  const isInViewConcept = useInView(conceptRef);

  const [historyPage, sethistoryPage] = useState({
    date: '2023.03',
    desc: '落地北京华润⻓安九里 150000平米写字楼整体物业管理平台',
    page: 6,
  });
  const [historyArr, setHistoryArr] = useState([
    { date: '2021.11', desc: 'Hesta概念诞生', page: 1 },
    { date: '2021.12', desc: '概念验证完成', page: 2 },
    { date: '2022.02', desc: '物业管理原型平台开发', page: 3 },
    { date: '2022.06', desc: '首个原型平台实地部署', page: 4 },
    { date: '2022.10', desc: '组建团队', page: 5 },
    { date: '2023.03', desc: '落地北京华润⻓安九里 150000平米写字楼整体物业管理平台', page: 6 },
    { date: '2023.06', desc: '落地山东济南金控总部 100000平米写字楼整体楼宇管理平台', page: 7 },
    { date: '2024.02', desc: 'Hesta 客户端APP上线发布', page: 8 },
    { date: '2024.05', desc: '目标完成50000用户获取预计2500订阅用户的市场目标', page: 9 },
  ]);

  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setHistoryArr((preArr) => updateArrayOnPageChange([...preArr], historyPage.page, direction));
  }, [historyPage]);

  const gotoHis = (page: number) => {
    const pageCur = historyArr.find((item) => {
      return item.page === page;
    });
    console.log('pageCur', pageCur);
    sethistoryPage(pageCur ?? ({} as Item));
  };

  return (
    <>
      <Image
        src={`${CDN}/imgs/about_us/first.webp`}
        objectFit="cover"
        alt={''}
        priority
        width={2000}
        height={2000}
      />

      <BackgroundImage
        src={`${CDN}/imgs/about_us/Group1595.webp`}
        alt=""
        className="h-[70vw] min-h-[1200px] w-full"
        quality={70}
        priority={true}
      >
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="mb-[40px] mt-[90px] font-harmony text-[40px] font-black">品牌故事</h3>
          <div className="w-[80.5556vw] font-harmony font-light">
            <div className="min-h-[19.0278vw]">
              <p>
                Hesta成立于2021年，由一群对科技和未来生活充满激情的创新者创立，创立初衷很简单——成为引领未来生活创新的先锋，让智慧生活触手可及。
              </p>
              <p className="mt-6">
                我们相信创新是引领未来生活的核心动力，我们不断探索最新的科技成果，力求将最前沿的技术融入到产品和服务中。致力于将高科技解决方案大众化，让每一个消费者都能享受到智慧生活的便利。Hesta通过降低技术成本，提高技术可及性，使得更多的人能够享受到科技带来的美好生活。从物业建设到日常维护，Hesta提供全方位的智能服务，确保物业在其整个生命周期内都能保持最佳状态，为居住者提供持久的便利和舒适。我们的服务涵盖智能家居系统、社区安防、能源管理等多个方面，致力于为用户提供无缝衔接的智能生活体验。
              </p>
              <p className="mt-6">
                未来，Hesta将继续秉持“创新、普惠、全生命周期服务”的理念，不断推动科技进步和智慧生活的发展。我们相信，通过我们的努力，智慧生活将不再是梦想，而是每一个人都能触手可及的现实。
              </p>
              <p className="mt-6">Hesta，智慧生活的引领者，未来生活的开创者。</p>
            </div>
            <div className="relative h-[52.0139vw] w-full" ref={statisticsRef}>
              <div className="absolute left-[6.6667vw] top-[4.3056vw] flex flex-col">
                <p className="text-[#383b439d]">
                  服务商业客户面积
                  <span className="text-[#383b4348]">（㎡）</span>
                </p>

                <IncreaseNumberAnimation
                  className="-mt-14 font-akrobat text-[150px] text-[#383b43]"
                  targetNumber={370000}
                  duration={2000}
                />
              </div>
              <div className="absolute right-[11.25vw] top-[20.8333vw] flex flex-col">
                <p className="text-[#383b439d]">
                  服务商业客户面积
                  <span className="text-[#383b4348]">（㎡）</span>
                </p>

                <IncreaseNumberAnimation
                  className="-mt-14 font-akrobat text-[150px] text-[#383b43]"
                  targetNumber={6200}
                  duration={3000}
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="relative my-[5.9722vw] flex cursor-pointer select-none flex-col items-center">
        <div className="relative z-20 flex h-[580px] w-[428px] items-center justify-center overflow-hidden">
          <div className="absolute top-0 z-30 h-[80px] w-full bg-gradient-to-b from-[#E9ECF4] to-transparent font-akrobat"></div>
          <div className="flex w-[428px] flex-col items-center justify-center">
            {historyArr.map((item, index) => {
              return (
                <div
                  className={`font-akrobat ${isCenterIndex(historyArr, index) ? 'text-[100px]' : 'text-[80px] text-[#DEE0E5]'}`}
                  key={item.id}
                >
                  {item.date}
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 z-30 h-[80px] w-full bg-gradient-to-t from-[#E9ECF4] to-transparent font-akrobat"></div>
        </div>
        <div className="absolute top-[53%] z-20 flex w-full justify-center">
          <div className="w-[80%]">
            <div className="h-[30px] w-full border-t border-black bg-[#E9ECF4]"></div>
            <p className="-mr-10 text-center font-harmony text-[18px] font-light">
              {historyPage.desc}
            </p>
          </div>

          <RoundedPagination
            className="-mt-[20px] rotate-90"
            goto={gotoHis}
            totalPage={historyArr.length}
            page={historyPage.page}
            direction={setDirection}
            limitRange={false}
          />
        </div>

        <Image
          src={`${CDN}/imgs/about_us/fb.webp`}
          width={451}
          height={440}
          alt=""
          className="absolute -top-[30px] left-[25vw]"
        />
        <Image
          src={`${CDN}/imgs/about_us/fb1.webp`}
          width={240}
          height={234}
          alt=""
          className="absolute bottom-[50px] right-[30vw]"
        />
      </div>

      <div
        className="flex min-h-[900px] w-full flex-col items-center justify-center"
        ref={conceptRef}
      >
        <h3 className="mb-[90px] mt-[90px] font-harmony text-[40px] font-black">企业理念</h3>

        {isInViewConcept && (
          <div className={`grid grid-cols-3 gap-4`}>
            <SliderCard
              title="愿景"
              showing={isInViewConcept}
              delay={0}
              icon={`${CDN}/imgs/about_us/3dicon_vision.webp`}
              desc="通过 AI 驱动数字平台，改变人们与房产互动的方式，打造轻松又便捷的物业维护体验。"
              size={'w-[374px] h-[350px]'}
              iconSize={'w-[336px] h-[236px] -mt-[50px]'}
            />

            <SliderCard
              title="使命"
              showing={isInViewConcept}
              delay={0.1}
              icon={`${CDN}/imgs/about_us/3dicon_mission.webp`}
              desc="将行业领先的解决方案带进千家万户。致力于开启真正的“智能”生活体验，为用户提供涵盖房屋全生命周期的全方位服务。"
              size={'w-[374px] h-[350px]'}
              iconSize={'w-[336px] h-[236px] -mt-[50px]'}
            />

            <SliderCard
              title="核心价值观"
              showing={isInViewConcept}
              delay={0.2}
              icon={`${CDN}/imgs/about_us/3dicon_value.webp`}
              desc="坚实与革新/超越用户需求/勇于接受挑战"
              size={'w-[374px] h-[350px]'}
              iconSize={'w-[336px] h-[236px] -mt-[50px]'}
            />
          </div>
        )}
      </div>
      <BackgroundImage
        className="mt-[113px] h-[34.7222vw] min-h-[520px] w-full"
        src={`${CDN}/imgs/about_us/banner_xuanze.webp`}
      >
        <div className="ml-[9.7222vw] h-[34.7222vw] min-h-[500px] w-[33.6111vw] min-w-[520px] bg-white bg-opacity-60 px-10 pt-[118px] font-harmony backdrop-blur-md">
          <h3 className="mb-[30px] font-harmony text-[30px] font-black">选择悉瞰</h3>
          <p className="text-[18px] font-light leading-[35px]">
            Hesta通过提供全方位一站式的解决方案，以满足物业生命周期中的每一个需求。我们打破传统IoT生态的局限，提供无缝、无界的体验，提升效能、效率和经济性。此外，Hesta率先使用3D互动模型，重新定义人们与物业的互动方式。通过我们的一键智能家居转型服务以及行业领先的AI定制服务，Hesta不仅重新定义了与物业的互动，还极大地改变了这些房屋和空间对人们日常工作、生活的影响。Hesta将真正注释未来生活。
          </p>
        </div>
      </BackgroundImage>
      {/* <div className="flex h-[62.5vw] min-h-[900px] w-full flex-col pt-[140px]">
        <div className="ml-[140px]">
          <h2 className="font-harmony text-[48px] font-black">我们拥有专业的团队</h2>
          <p className="max-w-[434px] font-harmony text-[20px] font-light">
            具备卓越的技术实力、丰富的项目经验，致力为客户提供创新、高效的解决方案。
          </p>
        </div>
        <div className="flex w-[1100px] items-end self-end overflow-hidden">
          <div className="mr-[70px] w-[360px] shrink-0">
            <Image
              src="/imgs/about_us/member1.webp"
              alt=""
              width={720}
              height={780}
              className="h-[390px] w-[360px]"
            />
            <h4 className="font-harmony text-[20px] font-black">吉辰</h4>
            <p className="font-harmony text-[16px] font-light">创始人 CEO</p>
            <div className="divider"></div>
          </div>
          <div className="mr-[70px] w-[360px] shrink-0">
            <Image
              src="/imgs/about_us/member1.webp"
              alt=""
              width={720}
              height={780}
              className="h-[390px] w-[360px]"
            />
            <h4 className="font-harmony text-[20px] font-black">吉辰</h4>
            <p className="font-harmony text-[16px] font-light">创始人 CEO</p>
            <div className="divider"></div>
            <p className="font-harmony font-thin">
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
            </p>
          </div>
          <div className="mr-[70px] w-[360px] shrink-0">
            <Image
              src="/imgs/about_us/member1.webp"
              alt=""
              width={720}
              height={780}
              className="h-[390px] w-[360px]"
            />
            <h4 className="font-harmony text-[20px] font-black">吉辰</h4>
            <p className="font-harmony text-[16px] font-light">创始人 CEO</p>
            <div className="divider"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AboutUs;
