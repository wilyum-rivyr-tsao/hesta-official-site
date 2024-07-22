'use client';
import './style.css';
import { useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/navigation';

import { motion, useInView } from 'framer-motion';
import BackgroundImage from '@/components/Basic/BackgroundImage';
import { CDN } from '@/constants';

// const Cases = forwardRef();

function Cases(props: any) {
  const { page } = props;
  const [focusIndex, setfocusIndex] = useState<number>(3);

  const refInner = useRef(null);
  const isInView = useInView(refInner);

  const focus = debounce((index: number) => {
    console.log('index', index);
    setfocusIndex(index);
  }, 300);

  const leave = () => {
    setfocusIndex(3);
  };

  const router = useRouter();

  return (
    <div className="h-[100vh] min-h-[700px] w-full overflow-hidden" onMouseLeave={leave}>
      <div className="flex w-full" ref={refInner}>
        {/* <motion.div
          onMouseEnter={() => focus(1)}
          onMouseOut={() => focus(3)}
          className={`normal-img h-[100vh] min-h-[700px] bg-[url('/imgs/case3.webp')] bg-cover bg-no-repeat ${focusIndex === 1 ? 'grow-width' : 'shrink-width'}`}
          animate={
            page === 5
              ? {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.3,
            delay: 0.7,
            ease: 'easeOut',
          }}
          initial={{ y: 1000, opacity: 0 }}
        >
          <div className="absolute bottom-[5.5556vw] left-[6vw] w-[74%] min-w-[677px] font-harmony text-white">
            <h2 className="text-[35px] font-bold text-white">案例三</h2>
            <p className="mt-2 max-h-[72px] min-w-[677px] overflow-hidden font-thin text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </motion.div> */}
        <motion.div
          onMouseEnter={() => focus(2)}
          onMouseOut={() => focus(3)}
          onClick={() => router.push('/case/2')}
          className={`normal-img h-[100vh] min-h-[700px] ${focusIndex === 2 ? 'grow-width' : 'shrink-width'}`}
          animate={
            page === 4
              ? {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.1,
            ease: 'easeOut',
          }}
          initial={{ y: 100, opacity: 0 }}
        >
          <BackgroundImage src={`${CDN}/imgs/case2.webp`} className="h-[100vh] min-h-[700px]">
            <div className="absolute left-[6vw] top-[86vh] w-[74%] font-harmony text-white">
              <h2 className="w-full min-w-[677px] text-[35px] font-bold text-white">
                智能豪华别墅的未来
              </h2>
              <p className="mt-2 max-h-[72px] min-w-[677px] overflow-hidden font-thin text-white">
                在现代高端生活中，豪华别墅不仅是奢华的居住空间更是智能化生活的象征。对于管理面积达1095平方米的豪华别墅而言，传统物业管理方式已难以满足业主对高效便捷和智能化的需求。
              </p>
            </div>
          </BackgroundImage>
        </motion.div>
        <motion.div
          onMouseEnter={() => focus(3)}
          onMouseOut={() => focus(3)}
          onClick={() => router.push('/case/1')}
          className={`normal-img h-[100vh] min-h-[700px] ${focusIndex === 3 ? 'grow-width' : 'shrink-width'}`}
          animate={
            page === 4
              ? {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.2,
            delay: 0.1,
            ease: 'easeOut',
          }}
          initial={{ y: 200, opacity: 0 }}
        >
          <BackgroundImage src={`${CDN}/imgs/case1.webp`} className="h-[100vh] min-h-[700px]">
            <div className="absolute left-[6vw] top-[85vh] w-[74%] font-harmony text-white">
              <h2 className="w-full min-w-[677px] text-[35px] font-bold text-white">
                Hesta助力北京商业综合体实现卓越运营
              </h2>
              <p className="mt-2 max-h-[72px] min-w-[677px] overflow-hidden font-thin text-white">
                在现代都市生活中，商业综合体不仅仅是购物和娱乐的场所，更是城市经济的重要支撑点。位于北京市的某商业综合体，通过引入Hesta的先进物业管理解决方案，成为了智慧物业管理的新标杆。
              </p>
            </div>
          </BackgroundImage>
        </motion.div>
      </div>
    </div>
  );
}

export default Cases;
