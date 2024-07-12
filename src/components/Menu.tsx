'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePopupContext } from '@/context/PopupContext';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Menu = () => {
  const t = useTranslations();

  const { state, dispatch }: any = usePopupContext();
  const expand = () => {
    dispatch({ type: 'showMenu', payload: !state.showMenu });
  };

  useEffect(() => {
    document.body.style.maxHeight = '100vh';
    document.body.style.overflow = 'hidden';

    console.log('router.pathname', pathname);
    return () => {
      document.body.style.maxHeight = '';
      document.body.style.overflow = '';
    };
  }, []);

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
    <div className="absolute right-0 top-0">
      {/* <div className="absolute right-0 top-0 h-[100vh] w-[50vw] bg-white bg-opacity-75 blur-xl"></div> */}
      <div className="absolute right-0 top-0 z-50 h-[100vh] w-[50vw] bg-[url('/imgs/menu_bg.png')] bg-cover bg-center bg-no-repeat">
        <div onClick={expand} className="absolute right-10 top-8 flex cursor-pointer items-center">
          <Image
            src={`/imgs/${state.showMenu ? 'icon_menu_close' : 'icon_menu'}.png`}
            width="40"
            height="40"
            alt={'logo'}
          />
          <span className="ml-[10px] text-[16px]">{state.showMenu ? 'Close' : 'Menu'}</span>
        </div>

        <div
          className="flex h-full flex-col items-center justify-between px-[17.8472vw] py-[9.0278vw] font-harmony"
          onClick={() => dispatch({ type: 'showMenu', payload: false })}
        >
          <Link className="mb-3 flex flex-col items-center" href="/">
            <span
              className={`ml-2 text-[32px] font-bold ${current === 'home' && 'text-[#383b4365]'}`}
            >
              首页
            </span>
            <span className="ml-2 text-[20px] font-light">HOME</span>
            <span className="rotate-[24deg] text-[30px] font-thin">/</span>
          </Link>
          <Link href="/business_user" className="mb-3 flex flex-col items-center">
            <span
              className={`ml-2 text-[32px] font-bold ${current === 'business_user' && 'text-[#383b4365]'}`}
            >
              商业
            </span>
            <span className="ml-2 text-[20px] font-light">BUSINESS</span>
            <span className="rotate-[24deg] text-[30px] font-thin">/</span>
          </Link>
          <Link href="/customer_user" className="mb-3 flex flex-col items-center">
            <span
              className={`ml-2 text-[32px] font-bold ${current === 'customer_user' && 'text-[#383b4365]'}`}
            >
              住宅
            </span>
            <span className="ml-2 text-[20px] font-light">RESIDENCE</span>
            <span className="rotate-[24deg] text-[30px] font-thin">/</span>
          </Link>
          <Link href="/case" className="mb-3 flex flex-col items-center">
            <span
              className={`ml-2 text-[32px] font-bold ${current === 'case' && 'text-[#383b4365]'}`}
            >
              案例
            </span>
            <span className="ml-2 text-[20px] font-light">CASE</span>
            <span className="rotate-[24deg] text-[30px] font-thin">/</span>
          </Link>
          <Link href="/about_us" className="mb-3 flex flex-col items-center">
            <span
              className={`ml-2 text-[32px] font-bold ${current === 'about_us' && 'text-[#383b4365]'}`}
            >
              关于
            </span>
            <span className="ml-2 text-[20px] font-light">ABOUT</span>
            <span className="rotate-[24deg] text-[30px] font-thin">/</span>
          </Link>
          {/* <Link href="/contact_us" className="mb-3 flex flex-col items-center">
            <span className="ml-2 text-[32px] font-bold">联系我们</span>
            <span className="ml-2 text-[20px] font-light">HOME</span>
            <span className="rotate-[24deg] text-[30px] font-thin">/</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
