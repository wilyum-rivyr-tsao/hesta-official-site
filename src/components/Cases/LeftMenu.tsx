import { CDN } from '@/constants';
import Image from 'next/image';

function LeftMenu() {
  return (
    <div className="mr-10 h-[339px] w-[283px] shrink-0 rounded-[13px] bg-[#F0F2F7] px-[40px] py-[60px]">
      <div className="flex items-center">
        <Image
          alt=""
          width={46}
          height={46}
          src={`${CDN}/imgs/case/icon_business_white.png`}
          className="mr-4 h-[46px] w-[46px] shrink-0"
        />
        <div className="mt-1 flex flex-col font-harmony">
          <h5 className="font-black">物业类型</h5>
          <span>商业综合体</span>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <Image
          alt=""
          width={46}
          height={46}
          src={`${CDN}/imgs/case/icon_business_white.png`}
          className="mr-4 h-[46px] w-[46px] shrink-0"
        />
        <div className="mt-1 flex flex-col font-harmony">
          <h5 className="font-black">地点</h5>
          <span>北京市</span>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <Image
          alt=""
          width={46}
          height={46}
          src={`${CDN}/imgs/case/icon_business_white.png`}
          className="mr-4 h-[46px] w-[46px] shrink-0"
        />
        <div className="mt-1 flex flex-col font-harmony">
          <h5 className="font-black">管理面积</h5>
          <span>150,000p平方米</span>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
