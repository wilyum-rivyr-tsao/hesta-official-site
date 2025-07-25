'use client';
import { CDN } from '@/constants';
import { usePopupContext } from '@/context/PopupContext';
import Image from 'next/image';
import Link from 'next/link';

function Header(props: any) {
  const { className, restProps } = props;
  const { state, dispatch }: any = usePopupContext();
  const expand = () => {
    dispatch({ type: 'showMenu', payload: !state.showMenu });
  };
  return (
    <>
      <div
        className={`fixed top-[31px] z-[99] flex w-full items-center justify-between ${className} left-0 min-w-[1280px] select-none`}
        {...restProps}
      >
        <Link href="/" className="ml-20 flex">
          <Image src={`${CDN}/imgs/logo.webp`} width="158" height="46" alt={'logo'} />
        </Link>
        {!state.showMenu && (
          <div onClick={expand} className="mr-10 flex cursor-pointer items-center">
            <Image
              src={`/imgs/${state.showMenu ? 'icon_menu_close' : 'icon_menu'}.webp`}
              width="40"
              height="40"
              alt={'logo'}
            />
            <span className="ml-[10px] text-[16px] font-normal">
              {state.showMenu ? 'Close' : 'Menu'}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
