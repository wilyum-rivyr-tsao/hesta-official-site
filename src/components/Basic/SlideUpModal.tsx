import Image from 'next/image';
import { MouseEventHandler, ReactElement, useEffect } from 'react';

function SlideUpModal({
  children,
  close,
}: {
  children: ReactElement;
  close: MouseEventHandler<HTMLDivElement>;
}) {
  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
    document.body.style.maxHeight = '100vh';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.maxHeight = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="absolute left-0 top-0 z-50 flex h-[100000vh] w-full select-none flex-col items-center justify-center bg-[#0000005a]">
      <div
        className="fixed bottom-[85vh] flex h-[64px] w-[130px] cursor-pointer items-center justify-center rounded-full bg-white"
        onClick={close}
      >
        <Image src="/imgs/x.png" width={16} height={16} alt="" />
        <span className="ml-2 font-harmony">Close</span>
      </div>
      <div className="fixed bottom-0 h-[80vh] w-[100%] rounded-t-[100px] bg-[#fff] px-[140px] pt-[100px]">
        {children}
      </div>
    </div>
  );
}

export default SlideUpModal;
