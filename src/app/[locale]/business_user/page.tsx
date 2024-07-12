'use client';

import { useTranslations } from 'next-intl';
import ContentLayout from '@/components/ContentLayout';

import Image from 'next/image';
import Link from 'next/link';
import RoundedPagination from '@/components/Basic/RoundedPagination';
import { useState } from 'react';
import Preview1 from '@/components/Home/AppPreview/Preview1';
import Content1 from '@/components/Home/AppPreview/Content1BS';
import Content2 from '@/components/Home/AppPreview/Content2';
import Content3 from '../../../components/Home/AppPreview/Content3';
import Content4 from '@/components/Home/AppPreview/Content4';
import Content6 from '@/components/Home/AppPreview/Content6';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const slides = [
  {
    page: 1,
    number: '01',
    name: '数字孪生+3D交互',
    desc: '基于先进的AI扫描技术以及渲染引擎可以快速对物业进行3D资产转化，根据全方位的资料收集将资产数字化呈现做到极致。同时配合独有的全息技术让用户可以通过3D交互实现对信息的快速捕捉以及处理。',
  },
  {
    page: 2,
    number: '02',
    name: '全生命周期知识图谱',
    desc: '悉瞰系统致力于打造垂直一体化的智慧管理平台融合先进的产业知识与经验，对建筑从设计到建造再到使用的全生命周期进行数据建模，打造独一无二的全生命周期知识图谱，为平台的人工智能服务打好坚实基础',
  },
  {
    page: 3,
    number: '03',
    name: 'AI诊断，一键预约',
    desc: '利用知识图谱和全面的数据分析，我们提供AI智能诊断，能即时捕捉并分析故障，迅速执行止损措施并生成诊断报告，帮助用户和运维商及时响应。一键预约功能还可提升服务效率并降低维护成本。',
  },
  {
    page: 4,
    number: '04',
    name: '多平台多物业管理',
    desc: '支持web，手机，平板等多平台。同时也支持对多个物业同时管理以此达到信息集中管理，资源共享，信息互通等。通过多物业同时管理可以为客户实现资源配置以及利用效率的最大化从而达到降本增效的目的。',
  },
  {
    page: 5,
    number: '05',
    name: 'AI主动式维护与优化',
    desc: 'HESTA AI通过整合行业知识和实时运行数据，提供多模态分析，为用户主动提供维护优化建议，减少故障频率，提高系统效率和使用寿命，让物业管理更加省心高效。',
  },
  {
    page: 6,
    number: '06',
    name: '一站式物业管理平台',
    desc: '悉瞰平台通过数据收集，实时监控，远程控制，自动巡检，主动优化，系统联动，工单管理，角色管理等等服务实现了真正的一站式管理平台。最大程度的提高物业管理效率。',
  },
];
function Index() {
  const t = useTranslations();

  const [slidePage, setslidePage] = useState(slides[0]);
  const [slidePages, setsildePages] = useState([1, 2]);
  const [productPage, setproductPage] = useState(1);

  const [productHoverIndex, setProductHoverIndex] = useState(0);

  const refProduct = useRef(null);
  const isInViewProduct = useInView(refProduct);

  const changeSlidePage = (nextPage: number) => {
    // check page direction by nextpage number - current page number if direction >0 is to next page
    const pageDirection = nextPage - slidePage.page;
    console.log('nextPage', nextPage, 'pageDirection', pageDirection);

    const slide = slides.find((item, index) => index + 1 === nextPage);
    setslidePage(slide);
    if (nextPage === 6) {
      setsildePages([nextPage, 1]);
      return;
    }
    if (nextPage === 1) {
      setsildePages([nextPage, 2]);
      return;
    }

    setsildePages([nextPage, nextPage + 1]);

    // if (pageDirection > 0) {
    //   setsildePages([nextPage, nextPage + 1]);
    //   return;
    // }
    // if (pageDirection < 0) {
    //   setsildePages([nextPage, nextPage - 1]);
    //   return;
    // }
  };
  return (
    <>
      <div className="flex h-[100vh] min-h-[900px] w-full flex-col items-center justify-center bg-[url('/imgs/business_user/banner_business.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="font-harmony text-[48px] font-bold text-[#383B43]">商业用户生活体验</h1>
        <p className="mt-5 font-harmony text-[20px] font-thin">
          实现一站式管理平台，帮助商业用户最大程度提高物业管理效率
        </p>
      </div>
      <div className="mt-20 flex min-h-[1000px] justify-between bg-[url('/imgs/customer_user/bg_second.png')] bg-cover bg-center bg-no-repeat px-[140px] pt-[176px]">
        <h1 className="w-[398px] min-w-[398px] font-harmony text-[48px] font-bold">
          当前商业用户正在面临的痛点
        </h1>
        <div className="-ml-[100px] grid max-h-[600px] min-w-[900px] grid-cols-3 gap-x-7 gap-y-0">
          <div className="h-[263px] w-[280px]"></div>
          <div className="h-[263px] w-[280px] rounded-md border border-[#fff] bg-[#f7f8fb] px-[40px] py-[30px]">
            <Image src={'/imgs/customer_user/icon_platform1.png'} width={70} height={70} alt={''} />
            <h4 className="mt-[52px] font-harmony text-[20px] font-[600]">平台</h4>
            <p className="font-light">缺乏提供全面解决方案的统一平台</p>
          </div>
          <div className="h-[263px] w-[280px] rounded-md border border-[#fff] bg-[#f7f8fb] px-[40px] py-[30px]">
            <Image src={'/imgs/customer_user/icon_platform1.png'} width={70} height={70} alt={''} />
            <h4 className="mt-[52px] font-harmony text-[20px] font-[600]">方案</h4>
            <p className="font-light">缺乏提供全面解决方案的统一平台</p>
          </div>
          <div className="h-[263px] w-[280px] rounded-md border border-[#fff] bg-[#f7f8fb] px-[40px] py-[30px]">
            <Image src={'/imgs/customer_user/icon_cost.png'} width={70} height={70} alt={''} />
            <h4 className="mt-[52px] font-harmony text-[20px] font-[600]">改装</h4>
            <p className="font-light">现有房屋的改装/后装解决方案有限且实施困难</p>
          </div>
          <div className="h-[263px] w-[280px] rounded-md border border-[#fff] bg-[#f7f8fb] px-[40px] py-[30px]">
            <Image src={'/imgs/customer_user/icon_refit.png'} width={70} height={70} alt={''} />
            <h4 className="mt-[52px] font-harmony text-[20px] font-[600]">成本</h4>
            <p className="font-light">全面集成的智能家居系统实施成本高</p>
          </div>
          <div className="h-[263px] w-[280px] rounded-md border border-[#fff] bg-[#f7f8fb] px-[40px] py-[30px]">
            <Image
              src={'/imgs/customer_user/icon_userfriendly.png'}
              width={70}
              height={70}
              alt={''}
            />
            <h4 className="mt-[52px] font-harmony text-[20px] font-[600]">预见</h4>
            <p className="font-light">无法预⻅用户需求或为用户提前思考</p>
          </div>
        </div>
      </div>

      <div className="flex h-[50vw] min-h-[900px] w-full flex-col justify-end overflow-hidden">
        {slidePage.page === 1 && (
          <Content1
            title="五号洗手间漏水"
            time="10:48"
            desc="5号传感器检测到潜在风险，请立即采取行动，查看报告获取更多信息。"
            icon="bg_system.png"
            className="-mt-[500px]"
          />
        )}

        {(slidePage.page === 2 || slidePage.page === 3 || slidePage.page === 4) && (
          <div className="mb-[23vh] flex items-center justify-center">
            {slidePage.page === 2 && <Content2 delay={0} />}
            {slidePage.page === 3 && <Content3 />}
            {slidePage.page === 4 && <Content4 className="h-[700px]" />}
          </div>
        )}

        {slidePage.page === 5 && (
          <Content1
            title="检测到有毒气体"
            time="厨房1"
            desc="5号传感器检测到潜在风险，请立即采取行动，查看报告获取更多信息。"
            icon="bg_warning.png"
            target="business"
          />
        )}

        {slidePage.page === 6 && (
          <Content6 className="mb-[23vh] flex justify-center" charPos="top" />
        )}

        <div className="-mt-[43vh] mb-[160px] flex w-full">
          <div
            className="z-20 flex cursor-pointer select-none items-center"
            onClick={() => {
              changeSlidePage(slidePages[0]);
            }}
          >
            <Image
              src="/imgs/business_user/icon_prev.png"
              alt=""
              width={77}
              height={5}
              className="mr-4 h-[5px] w-[77px]"
            />
            <h4 className="font-impact text-[50px]">0{slidePages[0]}</h4>
          </div>
          <div
            className="z-20 ml-auto flex cursor-pointer select-none items-center"
            onClick={() => {
              changeSlidePage(slidePages[1]);
            }}
          >
            <h4 className="mr-4 font-impact text-[50px]">0{slidePages[1]}</h4>

            <Image
              src="/imgs/business_user/icon_next.png"
              alt=""
              width={77}
              height={5}
              className="h-[5px] w-[77px]"
            />
          </div>
        </div>
        <div className="z-50 flex h-[310px] w-full items-center justify-center rounded-t-[120px] bg-white">
          <div className="mb-[93px] flex w-[948px] flex-wrap justify-center">
            <h3 className="mb-[30px] mt-[60px] text-center font-harmony text-[20px] font-black">
              {slidePage.name}
            </h3>
            <div className="font-harmony font-thin">{slidePage.desc}</div>
            <div className="mt-8 flex w-full justify-between">
              {slides.map((item, index) => {
                return (
                  <div
                    className="flex w-[14%] cursor-pointer flex-col"
                    key={item.number}
                    onClick={() => changeSlidePage(index + 1)}
                  >
                    <div
                      className={`mb-2 border-b-2 ${slidePage.page === index + 1 ? 'border-[#383B43]' : 'border-[#D3d4d7]'} `}
                    ></div>
                    <div className="flex justify-between font-harmony text-[12px]">
                      {slidePage.page === index + 1 && (
                        <>
                          <span>{item.number}</span>
                          <span>{item.name}</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[62.5vw] min-h-[900px] items-end bg-[url('/imgs/business_user/banner_management.png')] bg-cover bg-no-repeat">
        <div className="mb-[80px] ml-[9.5vw]">
          <Image
            src={`/imgs/business_user/x4.png`}
            width={208}
            height={230}
            className="h-[15.9722vw] w-[14.4444vw] sm-screen:h-[230px] sm-screen:w-[208px]"
            alt=""
          />
        </div>

        <p className="absolute right-[20.6944vw] mb-[100px] w-[22.7778vw] shrink-0 font-harmony text-[1.1111vw] font-light sm-screen:right-[298px] sm-screen:text-[16px]">
          物业管理是复杂耗时且具挑战性的工作。物业经理需要兼顾众多职责，跟踪多项任务往往会导致效率低下。悉瞰得推出将改变市场格局，物业经理将能够更高效地处理任务，减少时间和精力浪费。
        </p>
        {/* <div className="btn btn-outline mt-20 w-40">查看详情</div> */}
      </div>

      <div className="flex flex-col items-center" ref={refProduct}>
        <h3 className="mt-[124px] items-center font-harmony text-[48px] font-black">产品系统</h3>
        <RoundedPagination
          className="mt-4"
          page={productPage}
          goto={(page) => setproductPage(page)}
          totalPage={2}
        />

        <div className="w-full overflow-hidden">
          {isInViewProduct && productPage === 1 && (
            <motion.div
              className="mt-[80px] w-[99vw] overflow-hidden"
              animate={
                isInViewProduct && productPage === 1
                  ? {
                      x: 0,
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      x: 2000,
                    }
              }
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              initial={{ x: 2000, opacity: 0 }}
            >
              <div className="flex overflow-hidden">
                <div
                  className={`relative h-[20.1389vw] w-[29vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[29vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 1 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(1)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={427}
                    height={290}
                    className="absolute h-[20.1389vw] w-[29vw]"
                    src="/imgs/business_user/jixie.png"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 1 && 'mt-[10.8333vw]'}`}
                    >
                      机械设备
                    </h2>
                    {productHoverIndex === 1 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white">
                        {/* 实时监测电、水、气等能源的使用情况，提供可视化的能耗数据，帮助用户更加高效地使用能源，降低能源消耗和成本 */}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`relative h-[20.1389vw] w-[29.6528vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[29.6528vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 2 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(2)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={427}
                    height={290}
                    className="h-[20.1389vw] w-[29.6528vw]"
                    src="/imgs/business_user/geipaishui.png"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 2 && 'mt-[10.8333vw]'}`}
                    >
                      给排水
                    </h2>
                    {productHoverIndex === 2 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white">
                        {/* 实时监测电、水、气等能源的使用情况，提供可视化的能耗数据，帮助用户更加高效地使用能源，降低能源消耗和成本 */}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`relative h-[20.1389vw] w-[19.4444vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[19.4444vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 3 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(3)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={280}
                    height={290}
                    className="h-[20.1389vw] w-[19.4444vw] shrink-0"
                    src="/imgs/business_user/nenghao.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 3 && 'mt-[10.8333vw]'}`}
                    >
                      能耗监督
                    </h2>
                    {productHoverIndex === 3 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white">
                        实时监测电、水、气等能源的使用情况，提供可视化的能耗数据，帮助用户更加高效地使用能源，降低能源消耗和成本
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`relative h-[20.1389vw] w-[21.25vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[21.25vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 4 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(4)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={306}
                    height={290}
                    className="h-[20.1389vw] w-[21.25vw]"
                    src="/imgs/business_user/tongnuan.png"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 4 && 'mt-[10.8333vw]'}`}
                    >
                      暖通设备
                    </h2>
                    {productHoverIndex === 4 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden">
                <div
                  className={`relative h-[20.1389vw] w-[25.6944vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[25.6944vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 5 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(5)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={370}
                    height={290}
                    className="h-[20.1389vw] w-[25.6944vw] shrink-0"
                    src="/imgs/business_user/huanjing.png"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 5 && 'mt-[10.8333vw]'}`}
                    >
                      环境数据监测
                    </h2>
                    {productHoverIndex === 5 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>

                <div
                  className={`relative h-[20.1389vw] w-[38.9583vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[38.9583vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 6 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(6)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={561}
                    height={290}
                    className="h-[20.1389vw] w-[38.9583vw] shrink-0"
                    src="/imgs/business_user/lvhua.png"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 6 && 'mt-[10.8333vw]'}`}
                    >
                      绿化灌溉
                    </h2>
                    {productHoverIndex === 6 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>

                <div
                  className={`relative h-[20.1389vw] w-[34.7vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[35.3472vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 7 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(7)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={509}
                    height={290}
                    className="h-[20.1389vw] w-[35.3472vw] shrink-0"
                    src="/imgs/business_user/zhaoming.png"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 7 && 'mt-[10.8333vw]'}`}
                    >
                      电气/照明系统
                    </h2>
                    {productHoverIndex === 7 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {isInViewProduct && productPage === 2 && (
            <motion.div
              className="mt-[80px] w-[99vw] overflow-hidden"
              animate={
                isInViewProduct && productPage === 2
                  ? {
                      x: 0,
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      x: 2000,
                    }
              }
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
              initial={{ x: 2000, opacity: 0 }}
            >
              <div className="flex w-[99vw] overflow-hidden">
                <div
                  className={`relative h-[20.1389vw] w-[32vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[32vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 1 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(1)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={496}
                    height={290}
                    className="absolute h-[20.1389vw] w-[32vw]"
                    src="/imgs/business_user/dianti.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 1 && 'mt-[10.8333vw]'}`}
                    >
                      电梯系统
                    </h2>
                    {productHoverIndex === 1 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
                <div
                  className={`relative h-[20.1389vw] w-[34vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[34vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 2 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(2)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={474}
                    height={290}
                    className="h-[20.1389vw] w-[34vw]"
                    src="/imgs/business_user/fabu.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 2 && 'mt-[10.8333vw]'}`}
                    >
                      信息发布系统
                    </h2>
                    {productHoverIndex === 2 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
                <div
                  className={`relative h-[20.1389vw] w-[34vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[34vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 3 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(3)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={470}
                    height={290}
                    className="h-[20.1389vw] w-[34vw]"
                    src="/imgs/business_user/tingche.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 3 && 'mt-[10.8333vw]'}`}
                    >
                      停车场系统
                    </h2>
                    {productHoverIndex === 3 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden">
                <div
                  className={`relative h-[20.1389vw] w-[25vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[25vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 4 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(4)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={370}
                    height={290}
                    className="h-[20.1389vw] w-[25vw]"
                    src="/imgs/business_user/menjin.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 4 && 'mt-[10.8333vw]'}`}
                    >
                      门禁系统
                    </h2>
                    {productHoverIndex === 4 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
                <div
                  className={`relative h-[20.1389vw] w-[25vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[25vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 5 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(5)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={370}
                    height={290}
                    className="h-[20.1389vw] w-[25vw]"
                    src="/imgs/business_user/shipin.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 5 && 'mt-[10.8333vw]'}`}
                    >
                      视频监控系统
                    </h2>
                    {productHoverIndex === 5 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
                <div
                  className={`relative h-[20.1389vw] w-[25vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[25vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 6 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(6)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={370}
                    height={290}
                    className="h-[20.1389vw] w-[25vw]"
                    src="/imgs/business_user/huojing.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 6 && 'mt-[10.8333vw]'}`}
                    >
                      火警报警系统
                    </h2>
                    {productHoverIndex === 6 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
                <div
                  className={`relative h-[20.1389vw] w-[25vw] shrink-0 before:absolute before:z-10 before:h-[20.1389vw] before:w-[25vw] before:bg-gradient-to-br before:from-[#ffac92ba] before:to-[#c6adfd91] before:backdrop-blur-md ${productHoverIndex !== 7 && 'before:hidden'}`}
                  onMouseEnter={() => setProductHoverIndex(7)}
                  onMouseLeave={() => setProductHoverIndex(0)}
                >
                  <Image
                    width={370}
                    height={290}
                    className="h-[20.1389vw] w-[25vw]"
                    src="/imgs/business_user/ruqin.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 z-20 h-[20.1389vw] w-full px-[40px] py-[60px]">
                    <h2
                      className={`font-harmony text-[1.7361vw] font-semibold text-white ${productHoverIndex !== 7 && 'mt-[10.8333vw]'}`}
                    >
                      入侵警报系统
                    </h2>
                    {productHoverIndex === 7 && (
                      <p className="font-harmony text-[1.1111vw] font-light text-white"></p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
