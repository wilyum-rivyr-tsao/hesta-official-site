import { motion } from 'framer-motion';
import Image from 'next/image';
import { MouseEventHandler, ReactElement, useEffect, useState } from 'react';

function SlideUpModal({
  children,
  close,
  showing = false,
}: {
  children: ReactElement;
  close: MouseEventHandler<HTMLDivElement>;
  showing?: boolean;
}) {
  const [toggle, setToggle] = useState(!showing);

  useEffect(() => {
    setToggle(showing);
    if (showing) {
      window.addEventListener('wheel', (e) => {
        e.stopPropagation();
      });
      document.body.style.maxHeight = '100vh';
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.maxHeight = '';
        document.body.style.overflow = '';
      };
    }
  }, [showing]);

  return (
    <>
      {showing && (
        <div className="absolute left-0 top-0 z-50 flex h-[100000vh] w-full select-none flex-col items-center justify-center bg-[#0000005a]">
          {toggle && (
            <div
              className="fixed bottom-[85vh] flex h-[64px] w-[130px] cursor-pointer items-center justify-center rounded-full bg-white"
              onClick={(e) => {
                setToggle(false);
                let timer = setTimeout(() => {
                  close(e);
                  clearTimeout(timer);
                }, 500);
              }}
            >
              <Image src="/imgs/x.webp" width={16} height={16} alt="" />
              <span className="ml-2 font-harmony">Close</span>
            </div>
          )}
          <motion.div
            className="fixed bottom-0 h-[80vh] w-[100%] rounded-t-[100px] bg-[#fff] px-[140px] pt-[100px]"
            animate={
              toggle
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                    y: 2000,
                  }
            }
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            initial={{ y: 2000, opacity: 0 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}

export default SlideUpModal;
