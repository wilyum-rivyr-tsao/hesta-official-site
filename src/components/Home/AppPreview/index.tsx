import React, {
  forwardRef,
  Ref,
  useCallback,
  // useCallback,
  useContext,
  useEffect,
  // useReducer,
  useRef,
  useState,
} from 'react';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';
import 'animate.css';
import { HomeContext } from '..';
import Preview from './Preview';
import { CDN } from '@/constants';
import { Lethargy } from 'lethargy-ts';
import { throttle } from 'lodash';

const lethargy = new Lethargy({
  sensitivity: 300,
  delay: 100,
  increasingDeltasThreshold: 50,
});

const Index = forwardRef(function Index(props: any, ref: Ref<HTMLDivElement>) {
  const { page: outerPage } = props;
  const [page, setPage] = useState(1);
  const pages = ['01', '02', '03', '04', '05', '06'];
  const [curPages, setCurPages] = useState(['06', '01', '02']);
  const startScrollTime = useRef(new Date().getTime());

  const homeContext: any = useContext(HomeContext);

  const scrollContent = (e: any) => {
    const now = new Date().getTime();
    console.log('now - startScrollTime.current', now - startScrollTime.current);
    if (now - startScrollTime.current < 1500) {
      return;
    }
    startScrollTime.current = now;
    let scrollDisabled = homeContext?.scrollDisabled;
    console.log('scrollDisabled1', scrollDisabled, e.deltaY);
    if (e.deltaY > 0 && page === 6) {
      homeContext?.setScrollDisabled(false);
      scrollDisabled = false;
    }
    if (e.deltaY < 0 && page === 1) {
      homeContext?.setScrollDisabled(false);
      scrollDisabled = false;
    }
    console.log('scrollDisabled', scrollDisabled);
    if (scrollDisabled) {
      e.preventDefault();

      if (e.deltaY > 0 && page < 6) {
        setPage((prev) => {
          const nextPageNum = prev + 1;
          const newPages = generateNewArray(nextPageNum);
          setCurPages(newPages);
          return nextPageNum;
        });
      } else if (e.deltaY < 0 && page > 1) {
        setPage((prev) => {
          const nextPageNum = prev - 1;
          const newPages = generateNewArray(nextPageNum);
          setCurPages(newPages);
          return nextPageNum;
        });
      }
    }
  };

  // useEffect(() => {
  //   const checkWheelEvent = (e: WheelEvent) => {
  //     const isIntentional = lethargy.check(e);
  //     // console.log('e', e);
  //     if (isIntentional) {
  //       // console.log('first');
  //       scrollContent(e);
  //       // Do something with the scroll event
  //     }
  //   };

  //   window.addEventListener('wheel', checkWheelEvent, { passive: true });
  //   return () => {
  //     window.removeEventListener('wheel', checkWheelEvent);
  //   };
  // }, [homeContext, page]);

  useEffect(() => {
    if (outerPage === 2) {
      homeContext?.setScrollDisabled(true);
    } else {
      homeContext?.setScrollDisabled(false);
    }
  }, [outerPage]);

  // SECTION pagination
  const generateNewArray = (nextPage: number) => {
    const totalPages = pages.length;
    let startIndex = nextPage - 2;
    let endIndex = nextPage;

    if (nextPage === 1) {
      startIndex = totalPages - 1;
      endIndex = 1;
    } else if (nextPage === 2) {
      startIndex = 0;
      endIndex = 2;
    }

    const newArray = [];

    if (startIndex === 5 && endIndex === 1) {
      newArray.push(pages[pages.length - 1]);
      newArray.push(pages[0]);
      newArray.push(pages[1]);
    } else {
      for (let i = startIndex; i <= endIndex; i++) {
        newArray.push(pages[i % totalPages]);
      }
    }

    return newArray;
  };

  const nextPage = (direction: string) => {
    let nextPage = page;
    let newPages = curPages;
    if (direction === 'prev') {
      let tempPage = page - 1;
      if (tempPage < 1) {
        nextPage = pages.length;
      } else {
        nextPage = tempPage;
      }
    } else if (direction === 'next') {
      let tempPage = page + 1;
      if (tempPage > pages.length) {
        nextPage = 1;
      } else {
        nextPage = tempPage;
      }
    }
    console.log('nextPage', nextPage);
    console.log('newPages', newPages);
    newPages = generateNewArray(nextPage);
    setCurPages(newPages);
    setPage(nextPage);
  };

  const containerStyle = useCallback(() => {
    switch (page) {
      case 3:
        return {
          backgroundImage: `url('${CDN}/imgs/bg_conduit.webp')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        };
      case 4:
        return {
          backgroundImage: `url('${CDN}/imgs/bg_computer.webp')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        };

      case 6:
        return { backgroundImage: `url('${CDN}/imgs/bg_colorlump.webp')` };

      default:
        return {};
    }
  }, [page]);

  const handleWheel = throttle(scrollContent, 100);

  return (
    <div
      ref={ref}
      className="relative flex h-[100vh] w-full flex-col items-center overflow-x-hidden"
      id="trigger"
      onWheel={handleWheel}
    >
      <div className="mt-[64px] flex w-full flex-col items-center bg-no-repeat">
        <div className={`relative z-[9999] flex w-full flex-col items-center justify-center`}>
          <div
            className={`relative z-[99] flex w-[521px] cursor-pointer select-none justify-between font-akrobat`}
          >
            <div
              className="mt-[55px] -rotate-[32deg] font-akrobat text-[50px] text-[#E0E2E6]"
              onClick={() => nextPage('prev')}
            >
              {curPages[0]}
            </div>
            <div className="font-akrobat text-[50px] text-[#383B43]">{curPages[1]}</div>
            <div
              className="mt-[55px] rotate-[32deg] text-[50px] font-bold text-[#E0E2E6]"
              onClick={() => nextPage('next')}
            >
              {curPages[2]}
            </div>
          </div>
          <div
            className="-mt-[70px] flex h-[113px] w-[605px] items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${CDN}/imgs/turntable.webp')` }}
          ></div>
        </div>

        <div style={containerStyle()}>
          <Preview page={page} />
        </div>
      </div>
      <ReadMoreBtn className="absolute bottom-[43px] z-[999999]" href="/business_user" />
    </div>
  );
});

export default Index;
