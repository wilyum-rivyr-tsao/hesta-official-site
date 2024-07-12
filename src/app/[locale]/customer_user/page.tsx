'use client';
import { useTranslations } from 'next-intl';
import ContentLayout from '@/components/ContentLayout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RoundedPagination from '@/components/Basic/RoundedPagination';
import { useState } from 'react';

const appSlides = [
  {
    page: 1,
    img: '/imgs/appui1.png',
    title: '3D扫描',
    desc: 'Hesta 处于创新前沿，利用先进的空间计算算法，通过 APPLE Vision Pro 将扫描后的 3D 模型转化为沉浸式体验。这项技术让用户直接与房屋、物联网设备和人工智能助手互动。无论是定制家居设计还是虚拟探索，Hesta 都提供前所未有的未来体验，引领下一代数字交互。',
  },
  {
    page: 2,
    img: '/imgs/appui2.png',
    title: '全面掌控',
    desc: '用户可以随时随地编辑自己的房屋和智能设备，随意布置房间和设备位置，将自己已有的智能设备一键迁移添加到Hesta，并通过Hesta添加新购置的智能设备。',
  },
];
function Index() {
  const t = useTranslations();

  const [advatage, setAdvantage] = useState(1);

  const [appSlide, setappSlide] = useState(appSlides[0]);
  return (
    <>
      <div className="flex h-[100vh] min-h-[900px] w-full flex-col items-center justify-center bg-[url('/imgs/customer_user/banner_dwelling.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="font-harmony text-[48px] font-bold text-[#383B43]">数字化智能生活体验</h1>
        <p className="mt-5 font-harmony text-[20px] font-thin">
          丰富数字化智能生活体验，通过创新技术与个性化服务，为住宅用户打造更智能、更便捷的生活体验。
        </p>
      </div>
      <div className="mt-20 flex h-[100vh] min-h-[900px] justify-between bg-[url('/imgs/customer_user/bg_second.png')] bg-cover bg-center bg-no-repeat px-[140px] pt-[176px]">
        <h1 className="w-[407px] font-harmony text-[48px] font-bold">当前住宅用户正在面临的痛点</h1>
        <div className="grid max-h-[600px] min-w-[576px] grid-cols-2 gap-4">
          <div className="h-[263px] w-[280px] rounded-md border border-[#fff] bg-[#f7f8fb] px-[40px] py-[30px]">
            <Image src={'/imgs/customer_user/icon_platform1.png'} width={70} height={70} alt={''} />
            <h4 className="mt-[52px] font-harmony text-[20px] font-[600]">平台</h4>
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

      <div className="mx-[10px] mt-[100px] flex h-[100vh] min-h-[900px] flex-col items-center">
        <h1 className="font-harmony text-[48px] font-semibold">我们的优势</h1>
        <RoundedPagination
          className="mt-5"
          goto={(page: number) => setAdvantage(page)}
          totalPage={2}
          page={advatage}
        />
        <div className="flex">
          <div className={`mt-14 flex ${advatage !== 1 && 'hidden'}`}>
            <div className="z-20 -ml-4 -mt-10 h-[470px] w-[484px] justify-center border border-[#383B43] bg-[#E9ECF4] bg-cover bg-center bg-no-repeat px-10 py-16 hover:border-0 hover:bg-[url('/imgs/3dicon_platform1.png')]">
              <p className="font-harmony font-light">
                HESTA兼容市场主流协议，并与多家厂商合作，实现万物互联，让用户无需拘泥于特定生态或品牌，在享受个性化选择的同时，依然能够通过一个平台控制全家的设备。
              </p>
              <h3 className="mt-16 font-harmony text-2xl font-semibold">一站式物业管理平台</h3>
              <div className="divider-[#383B43] divider"></div>
              <h1 className="font-impact text-[100px]">01</h1>
            </div>
            <div className="z-20 -ml-4 mt-10 h-[470px] w-[484px] justify-center border border-[#383B43] bg-[#E9ECF4] bg-cover bg-center bg-no-repeat px-10 py-16 hover:border-0 hover:bg-[url('/imgs/customer_user/3dicon_intelligence1.png')]">
              <p className="font-harmony font-light">
                HESTA结合平台数据、知识图谱和AI算法，为用户定制智能化方案。无论全屋整装或部分后装，HESTA
                APP几分钟内即可生成解决方案，确保智能家居的可行性、精确性、普惠性和高效性，让每个人轻松享受智慧生活。
              </p>
              <h3 className="mt-16 font-harmony text-2xl font-semibold">一键智能</h3>
              {/* <div className="divider-[#383B43] divider"></div> */}
              <h1 className="mt-4 font-impact text-[100px]">02</h1>
            </div>
            <div className="-ml-4 mt-20 h-[470px] w-[484px] justify-center border border-[#383B43] bg-[#E9ECF4] bg-cover bg-center bg-no-repeat px-10 py-16 hover:border-0 hover:bg-[url('/imgs/3dicon_interaction1.png')]">
              <p className="font-harmony font-light">
                HESTA利用先进的3D扫描技术，让用户轻松拥有3D资产，并通过物联网集成，实现前所未有的房屋交互，全面可视化，提高用户对房屋的了解和控制。
              </p>
              <h3 className="mt-16 font-harmony text-2xl font-semibold">3D交互体验</h3>
              <div className="divider-[#383B43] divider"></div>
              <h1 className="font-impact text-[100px]">03</h1>
            </div>
          </div>
          {/* section2 */}
          <div className={`mt-14 flex ${advatage !== 2 && 'hidden'}`}>
            <div className="z-20 -ml-4 -mt-10 h-[470px] w-[484px] justify-center border border-[#383B43] bg-[#E9ECF4] bg-cover bg-center bg-no-repeat px-10 py-16 hover:border-0 hover:bg-[url('/imgs/3dicon_customization1.png')]">
              <p className="font-harmony font-light">
                HESTA
                AI提供个性化智能家居服务，根据用户房屋、设备特点和个人偏好，从AI设计渲染、一键智能到AI维护管理与优化，进行针对性决策分析，确保提供完整、可靠的主动式AI服务。
              </p>
              <h3 className="mt-16 font-harmony text-2xl font-semibold">一站式物业管理平台</h3>
              <div className="divider-[#383B43] divider"></div>
              <h1 className="font-impact text-[100px]">04</h1>
            </div>
            <div className="z-20 -ml-4 mt-10 h-[470px] w-[484px] justify-center border border-[#383B43] bg-[#E9ECF4] bg-cover bg-center bg-no-repeat px-10 py-16 hover:border-0 hover:bg-[url('/imgs/3dicon_life1.png')]">
              <p className="font-harmony font-light">
                HESTA结合尖端AI技术以及全方位的产业知识经验，为用户打造真正的无感式智能家居系统，无需动手，无需说话，房屋就是你的私人管家，想你所想，能你所能，用智慧家居开启未来生活。
              </p>
              <h3 className="mt-16 font-harmony text-2xl font-semibold">一键智能</h3>
              {/* <div className="divider-[#383B43] divider"></div> */}
              <h1 className="mt-4 font-impact text-[100px]">05</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[140px] -mt-[100px] mb-[200px] flex items-center justify-center">
        <div className="w-[364px]">
          <h1 className="text-center font-harmony text-[48px] font-semibold">应用场景</h1>
          <h2 className="mt-8 font-harmony text-[20px] font-semibold">设备监测预警</h2>
          <p className="mt-5 font-harmony font-light">
            水浸传感器检测到漏水后联动智能水阀关闭该区域供水，3D模型精准标记漏水点，同时生成漏水维修报告显示相应管道信息，水阀信息，连接点信息，位置信息，所需材料备件等。
          </p>
          {/* <RoundedPagination className="mt-8" /> */}
        </div>
        <div className="w-[900px]">
          <Image src="/imgs/customer_user/Group1580.png" alt={''} width={900} height={800} />
        </div>

        {/* <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="mb-4 h-28 w-28 bg-gray-200">控制</div>
            <div className="mb-4 h-28 w-28 bg-gray-200">控制</div>
            <div className="mb-4 h-28 w-28 bg-gray-200">控制</div>
            <div className="mb-4 h-28 w-28 bg-gray-200">控制</div>
          </div>
          <div className="ml-20 min-h-[400] w-[600px] bg-gray-300">
            <iframe
              src="http://app.xikan.tech:8110/app"
              height={600 + 'px'}
              width="100%"
              style={{ border: 0, width: '100%' }}
            ></iframe>
          </div>
        </div> */}
      </div>

      <div className="relative flex h-[62.5vw] min-h-[900px] items-end bg-[url('/imgs/customer_user/banner_loushui.png')] bg-cover bg-no-repeat">
        <div className="mb-[80px] ml-[9.5vw]">
          <Image
            src={`/imgs/customer_user/Group1583.png`}
            width={208}
            height={230}
            className="h-[15.9722vw] w-[14.4444vw] sm-screen:h-[230px] sm-screen:w-[208px]"
            alt=""
          />
        </div>

        <p className="absolute right-[20.6944vw] mb-[100px] w-[22.7778vw] shrink-0 font-harmony text-[1.1111vw] font-light sm-screen:right-[298px] sm-screen:text-[16px]">
          紧急情况（如管道泄漏）可能让人精疲力竭，而往往是管理不善的结果。典型的流程包括确定问题、关闭水阀、联系维修服务以及派遣技术人员，这是一项繁琐且昂贵的工作，借助悉瞰业主可以更轻松地解决问题
        </p>
        {/* <div className="btn btn-outline mt-20 w-40">查看详情</div> */}
      </div>

      <div className="relative flex h-[74.3056vw] min-h-[1070px] items-end bg-[url('/imgs/Group1581.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex w-full items-end justify-between rounded-[100px] rounded-b bg-[#F9FAFC] px-[9.7222vw] pb-[173px] pt-[160px]">
          <div>
            <RoundedPagination
              goto={(page) => setappSlide(appSlides[page - 1])}
              totalPage={2}
              page={appSlide.page}
            />
            <h4 className="mt-14 font-impact text-[48px] font-black">HESTA APP</h4>
            <p className="font-harmony text-[20px] font-black">{appSlide.title}</p>
          </div>
          <p className="w-[598px] font-harmony text-[16px] font-light">{appSlide.desc}</p>
        </div>
        <Image
          src={appSlide.img}
          alt="apple"
          width={1400}
          height={1400}
          className="absolute bottom-[180px] left-[50%] -ml-[365px] h-[730px] w-[730px]"
        />
      </div>

      <div className="flex h-[62.5vw] min-h-[900px] flex-col items-center justify-center bg-[#F9FAFC] pb-[200px]">
        <div className="flex h-[660px] w-[1320px] flex-col items-center justify-center rounded-3xl bg-[#F0F2F7] pt-[100px]">
          <Image
            src={`/imgs/customer_user/Group1530.png`}
            alt="apple"
            width={209}
            height={66}
            className="cursor-pointer"
          />

          <Image
            src={`/imgs/customer_user/app.png`}
            alt="apple"
            width={2320}
            height={834}
            className="mt-[60px] w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Index;
