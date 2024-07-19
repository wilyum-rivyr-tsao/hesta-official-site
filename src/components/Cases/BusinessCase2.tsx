import { CDN } from '@/constants';
import SlideUpModal from '../Basic/SlideUpModal';
import LeftMenu from './LeftMenu';
import Image from 'next/image';

function BusinessCase1({ close, showing }: any) {
  return (
    <SlideUpModal close={close} showing={showing}>
      <div className="flex">
        <LeftMenu></LeftMenu>
        <div className="shrink-1">
          <h1 className="mb-[69px] flex font-harmony text-[40px] font-black">智能豪华别墅的未来</h1>
          <div className="h-[50vh] overflow-y-auto font-harmony">
            <p>
              在现代高端生活中，豪华别墅不仅是奢华的居住空间，更是智能化生活的象征。对于管理面积达1095平方米的豪华别墅而言，传统的物业管理方式已难以满足业主对高效、便捷和智能化的需求。Hesta凭借其先进技术和全面服务，成功将这座豪华别墅带入智能管理的新纪元，大幅提升了物业管理的质量和效率。
            </p>
            <Image
              src={`${CDN}/imgs/case/Frame105.jpg`}
              alt=""
              className="mt-14 h-[34.7222vw] w-[58.125vw]"
              width={1600}
              height={1000}
            />
            <h2 className="mt-[30px] flex font-harmony text-[30px] font-black">
              Hesta 服务：引领物业管理智能化
            </h2>

            <div className="my-4">
              <h5 className="font-black">Hesta AI：智能物业的核心</h5>
              <p>
                Hesta
                AI是Hesta提供的核心服务之一，通过人工智能技术，实现了对物业管理的全面智能化。Hesta
                AI不仅能实时监控物业的各个角落，还能通过数据分析和预测，提前发现潜在问题，确保物业运营的顺畅。
              </p>
            </div>

            <div className="my-4">
              <h5 className="font-black">Hesta知识图谱：全面了解物业</h5>
              <p>
                Hesta知识图谱为物业管理者提供了一个全景式的视图，涵盖了从设备设施到运营流程的所有信息。这使得管理者能够快速了解和定位任何一个环节，极大地提高了管理的透明度和效率。
              </p>
            </div>

            <Image
              src={`${CDN}/imgs/case/case2p2.jpg`}
              alt=""
              className="mt-14 h-[34.7222vw] w-[58.125vw]"
              width={1600}
              height={1000}
            />

            <h2 className="mt-[30px] flex font-harmony text-[30px] font-black">
              Hesta 服务：引领物业管理智能化
            </h2>

            <div className="my-4">
              <h5 className="font-black">提高管理效率</h5>
              <p>
                引入Hesta服务后，物业管理实现了跨平台、跨工种的高效协同，整体管理效率提升了80%。这一显著提升不仅减少了重复劳动，还使各部门间的沟通更加顺畅。通过实时信息共享和统一的平台，各部门能够高效协作，快速决策，确保每一个管理环节都能顺利运转，提高了整体管理效能。
              </p>
            </div>

            <div className="mt-[60px]">
              <h3 className="text-[30px] font-bold">结语</h3>
              <p className="mt-[20px]">
                在Hesta的助力下，北京这座商业综合体实现了从传统物业管理向智慧物业管理的转型。这不仅提升了综合体的运营效率和服务质量，还为其他物业管理企业树立了一个新的标杆。Hesta的智能化物业管理解决方案，正在改变着传统物业管理的方式，为更多的物业项目带来新的活力和机遇。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideUpModal>
  );
}

export default BusinessCase1;
