'use client';
import { usePopupContext } from '@/context/PopupContext';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { forwardRef, Ref } from 'react';
import { CDN } from '@/constants';

interface Props {
  className?: string;
}
const Footer = forwardRef(function Foorter({ className }: Props, ref: Ref<HTMLDivElement>) {
  const t = useTranslations();
  const { state, dispatch }: any = usePopupContext();

  const showTerms = () => {
    dispatch({ type: 'showTerms', payload: !state.showTerms });
  };

  const showTerms2 = () => {
    dispatch({ type: 'showTerms2', payload: !state.showTerms2 });
  };
  console.log('CDN', CDN);
  return (
    <div
      style={{ backgroundImage: `url('${CDN}/imgs/bg_end.png')` }}
      className={`h-[62.5vw] bg-cover bg-center bg-no-repeat px-[9.7222vw] ${className} relative flex flex-col items-center justify-center`}
      ref={ref}
    >
      <div className="flex w-full items-center justify-between">
        <div>
          <Image
            src={`${CDN}/imgs/logo.png`}
            width="148"
            height="46"
            alt={'logo'}
            style={{
              width: '10.2778vw',
              height: '3.1944vw',
            }}
          />
          <h2 className="mt-[1.4vw] h-[7.7778vw] w-[20.9028vw] font-harmony text-[3.3333vw] font-bold">
            洞悉地产科技 瞰见智慧未来
          </h2>
          <Link href="/contact_us">
            <div
              className={`button-hover mt-[4.1667vw] flex h-[3.75vw] w-[10.6944vw] items-center bg-[url("/imgs/btnarr.png")] bg-cover bg-center bg-no-repeat hover:bg-[url("/imgs/btnarr_active.png")]`}
            >
              <span className="-mt-2 ml-[0.5556vw] font-harmony text-[1.1111vw] font-thin hover:text-white">
                {t('Contact us')}
              </span>
            </div>
          </Link>
        </div>

        <div className="flex cursor-pointer font-harmony">
          <ul className="mr-[5.6vw]">
            <li>
              <Link href="/about_us">关于我们</Link>
            </li>
            <li className="mt-[2.0833vw]">
              <Link href="/case">案例分析</Link>
            </li>
            <li className="mt-[2.0833vw]" onClick={showTerms2}>
              <div>隐私政策</div>
            </li>
            <li className="mt-[2.0833vw]" onClick={showTerms}>
              <div>用户协议</div>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/business_user">商业用户</Link>
            </li>
            <li className="mt-[2.0833vw]">
              <Link href="/customer_user">住宅用户</Link>
            </li>
            <li className="mt-[2.0833vw]">
              <Link href="/contact_us">联系我们</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="absolute bottom-8 text-[#383b43a8]">
        Copyright © 2023 Hesta Technologies Inc. All Rights Reserved. 北京悉瞰科技有限公司 版权所有
      </p>
    </div>
  );
});

export default Footer;
