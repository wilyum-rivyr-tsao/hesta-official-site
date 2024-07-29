'use client';
import { usePopupContext } from '@/context/PopupContext';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { forwardRef, Ref, useRef } from 'react';
import { CDN } from '@/constants';
import { motion, useInView } from 'framer-motion';

interface Props {
  className?: string;
}
const Footer = forwardRef(function Foorter({ className }: Props, ref: Ref<HTMLDivElement>) {
  const t = useTranslations();
  const { state, dispatch }: any = usePopupContext();
  const ref2 = useRef(null);
  const isInView = useInView(ref2);

  const showTerms = () => {
    dispatch({ type: 'showTerms', payload: !state.showTerms });
  };

  const showTerms2 = () => {
    dispatch({ type: 'showTerms2', payload: !state.showTerms2 });
  };
  console.log('CDN', CDN);
  return (
    <div
      style={{ backgroundImage: `url('${CDN}/imgs/bg_end.webp')` }}
      className={`h-[62.5vw] bg-cover bg-center bg-no-repeat px-[9.7222vw] ${className} relative flex flex-col items-center justify-center`}
      ref={ref}
    >
      <div className="flex w-full items-center justify-between" ref={ref2}>
        <div>
          <motion.div
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
              duration: 1,
              delay: 0,
              ease: 'easeOut',
            }}
            initial={{ y: 50, opacity: 0 }}
          >
            <Image
              src={`${CDN}/imgs/logo.webp`}
              width="148"
              height="46"
              alt={'logo'}
              style={{
                width: '10.2778vw',
                height: '3.1944vw',
              }}
            />
          </motion.div>
          <motion.h2
            className="mt-[1.4vw] h-[7.7778vw] w-[20.9028vw] font-harmony text-[3.3333vw] font-bold"
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
              duration: 1,
              delay: 0.5,
              ease: 'easeOut',
            }}
            initial={{ y: 50, opacity: 0 }}
          >
            洞悉地产科技 瞰见智慧未来
          </motion.h2>
          <Link href="/contact_us">
            <motion.div
              className={`button-hover mt-[4.1667vw] flex h-[3.75vw] w-[10.6944vw] items-center bg-[url("/imgs/btnarr.webp")] bg-cover bg-center bg-no-repeat hover:bg-[url("/imgs/btnarr_active.webp")]`}
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
                duration: 1,
                delay: 1,
                ease: 'easeOut',
              }}
              initial={{ y: 50, opacity: 0 }}
            >
              <span className="-mt-2 ml-[0.5556vw] font-harmony text-[1.1111vw] font-thin hover:text-white">
                {t('Contact us')}
              </span>
            </motion.div>
          </Link>
        </div>

        <motion.div
          className="flex cursor-pointer font-harmony"
          animate={isInView ? { y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          initial={{ y: 100 }}
        >
          <ul className="mr-[5.6vw]">
            <li>
              <Link href="/about_us">关于我们</Link>
            </li>
            <li className="mt-[2.0833vw]">
              <Link href="/case/0">案例分析</Link>
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
        </motion.div>
      </div>
      <p className="absolute bottom-8 font-harmony font-normal text-[#383b43a8]">
        北京悉瞰科技有限公司 版权所有 | 京ICP备2023018344号-1
      </p>
    </div>
  );
});

export default Footer;
