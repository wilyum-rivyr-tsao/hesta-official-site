'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePopupContext } from '@/context/PopupContext';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Menu = () => {
  const t = useTranslations();

  const { state, dispatch }: any = usePopupContext();
  const expand = () => {
    dispatch({ type: 'showMenu', payload: !state.showMenu });
  };

  const [current, setcurrent] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    console.log('pathname', pathname);
    if (pathname === '/en' || pathname === '/zh') {
      setcurrent('home');
    }

    if (pathname.indexOf('business_user') >= 0) {
      setcurrent('business_user');
    }

    if (pathname.indexOf('customer_user') >= 0) {
      setcurrent('customer_user');
    }

    if (pathname.indexOf('case') >= 0) {
      setcurrent('case');
    }

    if (pathname.indexOf('about_us') >= 0) {
      setcurrent('about_us');
    }

    if (pathname.indexOf('contact_us') >= 0) {
      setcurrent('contact_us');
    }
  }, [current, pathname]);

  return (
    <div
      className="fixed left-0 top-0 z-[99] h-[100vh] w-full select-none"
      onClick={() => dispatch({ type: 'showMenu', payload: false })}
    >
      <div className="fixed right-0 top-0 z-[999]">
        {/* <div className="absolute right-0 top-0 h-[100vh] w-[50vw] bg-white bg-opacity-75 blur-xl"></div> */}
        <motion.div
          className="absolute right-0 top-0 z-50 h-[100vh] w-[40vw] border-l border-white bg-[#ffffff86] backdrop-blur-md"
          animate={
            state.showMenu
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
          <div
            onClick={() => dispatch({ type: 'showMenu', payload: false })}
            className="fixed right-[40px] top-[36px] z-[9999] flex cursor-pointer items-center"
          >
            <Image
              src={`/imgs/${state.showMenu ? 'icon_menu_close' : 'icon_menu'}.webp`}
              width="40"
              height="40"
              alt={'logo'}
            />
            <span className="ml-[10px] text-[16px]">{state.showMenu ? 'Close' : 'Menu'}</span>
          </div>

          <div className="flex h-full flex-col items-center justify-between py-[6.7708vw] font-harmony">
            <Link className="flex flex-col items-center" href="/">
              <span
                className={`ml-2 text-[32px] font-bold sm-screen:text-[28px] ${current === 'home' && 'text-[#383b4365]'} hover:text-[#383b4365]`}
              >
                首页
              </span>
              <span className="ml-2 text-[20px] font-light sm-screen:text-[16px]">HOME</span>
              <span className="rotate-[24deg] text-[30px] font-thin sm-screen:text-[26px]">/</span>
            </Link>
            <Link href="/business_user" className="flex flex-col items-center">
              <span
                className={`ml-2 text-[32px] font-bold sm-screen:text-[28px] ${current === 'business_user' && 'text-[#383b4365]'} hover:text-[#383b4365]`}
              >
                商业
              </span>
              <span className="ml-2 text-[20px] font-light sm-screen:text-[16px]">BUSINESS</span>
              <span className="rotate-[24deg] text-[30px] font-thin sm-screen:text-[26px]">/</span>
            </Link>
            <Link href="/customer_user" className="flex flex-col items-center">
              <span
                className={`ml-2 text-[32px] font-bold sm-screen:text-[28px] ${current === 'customer_user' && 'text-[#383b4365]'} hover:text-[#383b4365]`}
              >
                住宅
              </span>
              <span className="ml-2 text-[20px] font-light sm-screen:text-[16px]">RESIDENCE</span>
              <span className="rotate-[24deg] text-[30px] font-thin sm-screen:text-[26px]">/</span>
            </Link>
            <Link href="/case/0" className="flex flex-col items-center">
              <span
                className={`ml-2 text-[32px] font-bold sm-screen:text-[28px] ${current === 'case' && 'text-[#383b4365]'} hover:text-[#383b4365]`}
              >
                案例
              </span>
              <span className="ml-2 text-[20px] font-light sm-screen:text-[16px]">CASE</span>
              <span className="rotate-[24deg] text-[30px] font-thin sm-screen:text-[26px]">/</span>
            </Link>
            <Link href="/about_us" className="flex flex-col items-center">
              <span
                className={`ml-2 text-[32px] font-bold sm-screen:text-[28px] ${current === 'about_us' && 'text-[#383b4365]'} hover:text-[#383b4365]`}
              >
                关于
              </span>
              <span className="ml-2 text-[20px] font-light sm-screen:text-[16px]">ABOUT</span>
              <span className="rotate-[24deg] text-[30px] font-thin sm-screen:text-[26px]">/</span>
            </Link>
            <Link href="/contact_us" className="flex flex-col items-center">
              <span
                className={`ml-2 text-[32px] font-bold sm-screen:text-[28px] ${current === 'contact_us' && 'text-[#383b4365]'} hover:text-[#383b4365]`}
              >
                联系我们
              </span>
              <span className="ml-2 text-[20px] font-light sm-screen:text-[16px]">CONTACT</span>
              {/* <span className="rotate-[24deg] text-[30px] font- sm-screen:text-[26px] thin">/</span> */}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
