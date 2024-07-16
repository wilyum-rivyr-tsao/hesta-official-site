import React, { useState, useRef, useEffect, ForwardedRef } from 'react';
import Link from 'next/link';
import ScrollDownButton from '../Basic/ScrollDownBtn';
import Header from '../Header';
import { motion, useInView } from 'framer-motion';
import 'animate.css';
import { CDN } from '@/constants';

const Screen1 = (props: any) => {
  const { nextPage, screen2, page, ...restProps } = props;
  const [playFirstVideo, setPlayFirstVideo] = useState(true);
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // Function to play the second video when the first video ends
    const handleFirstVideoEnd = () => {
      console.log('endddd');
      setPlayFirstVideo(false); // Set playFirstVideo to false when the first video ends
      // if (firstVideoRef.current) {
      //   firstVideoRef.current.play(); // Play the second video
      // }
    };

    // Clean-up function to remove event listener
    // const cleanup = () => {
    //   if (firstVideoRef.current) {
    //     firstVideoRef.current.removeEventListener('ended', handleFirstVideoEnd);
    //   }
    // };

    // Add event listener to handle the end of the first video
    if (playFirstVideo && firstVideoRef.current) {
      firstVideoRef.current.addEventListener('ended', handleFirstVideoEnd);
    }

    // Clean-up the event listener on component unmount or when playFirstVideo changes
    // return cleanup;
  }, [playFirstVideo]);

  useEffect(() => {
    console.log('page', page);
  }, [page]);

  return (
    <motion.div {...restProps} ref={ref}>
      <Header />
      <div
        className="relative h-screen min-h-[700px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${CDN}/imgs/bg_home.webp")` }}
      >
        {/* First video */}
        {page === 0 && (
          <>
            <video
              className={`animate_animated absolute left-0 top-0 z-0 h-full w-full object-cover ${playFirstVideo ? 'visible' : 'animate__fadeOut invisible'}`}
              autoPlay
              muted
              src={`${CDN}/video/home1.mp4`}
              ref={firstVideoRef}
            />
            {/* Second video */}

            <video
              className={`animate_animated absolute left-0 top-0 z-0 h-full w-full object-cover ${!playFirstVideo ? 'animate__fadeIn visible' : 'invisible'}`}
              autoPlay
              muted
              loop
              src={`${CDN}/video/homeloop.mp4`}
            />
          </>
        )}

        {/* Image fallback or additional content */}
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-[url('/imgs/bg_home.webp')] bg-cover bg-center"> */}
        {/* Optional: Add a background image if desired */}
        {/* </div> */}
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="h-[38vh] min-h-[351px] w-1"></div>
          <div className="ml-[9.7222vw]">
            <motion.h2
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 4,
                ease: 'easeOut',
              }}
              initial={{ y: -50, opacity: 0 }}
              className="cursor-pointer font-harmony text-[48px] font-bold text-[#383B43]"
            >
              洞悉地产科技 瞰见智慧未来
            </motion.h2>
            <motion.p
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 4.5,
                ease: 'easeOut',
              }}
              initial={{ y: -50, opacity: 0 }}
              className="mt-[18px] cursor-pointer font-harmony text-[20px] font-thin"
            >
              新一代房屋管理平台
            </motion.p>
            <motion.div
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 5,
                ease: 'easeOut',
              }}
              initial={{ y: -50, opacity: 0 }}
            >
              <Link
                href="/contact_us"
                className="btn mt-[60px] h-[60px] w-[176px] cursor-pointer rounded-none border-none bg-[#383B43] font-harmony text-[24px] font-thin text-white hover:bg-gradient-to-r hover:from-[#E9ACFF] hover:to-[#FFA654]"
              >
                联系我们
              </Link>
            </motion.div>
          </div>

          <ScrollDownButton
            className="absolute bottom-[40px] z-10 self-center"
            nextPage={nextPage}
            nextEleRef={screen2}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Screen1;
