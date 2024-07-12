'use client';
import { usePopupContext } from '@/context/PopupContext';
import Image from 'next/image';

function Header(props: any) {
  const { className, restProps } = props;
  const { state, dispatch }: any = usePopupContext();
  const expand = () => {
    dispatch({ type: 'showMenu', payload: !state.showMenu });
  };
  return (
    <>
      <div
        className={`absolute top-[31px] z-30 flex w-full items-center justify-between px-10 ${className} min-w-[1400px] select-none`}
        {...restProps}
      >
        <Image src="/imgs/logo.png" width="158" height="46" alt={'logo'} />
        {!state.showMenu && (
          <div onClick={expand} className="flex cursor-pointer items-center">
            <Image
              src={`/imgs/${state.showMenu ? 'icon_menu_close' : 'icon_menu'}.png`}
              width="40"
              height="40"
              alt={'logo'}
            />
            <span className="ml-[10px] text-[16px]">{state.showMenu ? 'Close' : 'Menu'}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
