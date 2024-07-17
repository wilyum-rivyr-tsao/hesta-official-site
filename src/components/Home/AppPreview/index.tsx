import React, {
  forwardRef,
  Ref,
  useCallback,
  // useCallback,
  useContext,
  useEffect,
  // useReducer,
  // useRef,
  useState,
} from 'react';
import ReadMoreBtn from '@/components/Basic/ReadMoreBtn';
// import PopMsg1 from './PopMsg1';
// import Preview1 from './Preview1';
// import PopMsg5 from './PopMsg5';
// import Preview2 from './Preview2';
// import Preview3 from './Preview3';
// import Preview4 from './Preview4';
// import Preview5 from './Preview5';
// import Preview6 from './Preview6';
// import Link from 'next/link';
import 'animate.css';
import useIsScrolledIntoView from '@/Hooks/useIsScrolledIntoView';

import { HomeContext } from '..';
import Preview from './Preview';

// Define the state type
// interface SlideUpState {
//   page: boolean;
//   text: boolean;
//   bg: boolean;
//   pop: boolean;
// }

// // Define the action types
// type SlideUpAction =
//   | { type: 'SET_PAGE'; payload: boolean }
//   | { type: 'SET_TEXT'; payload: boolean }
//   | { type: 'SET_BG'; payload: boolean }
//   | { type: 'SET_POP'; payload: boolean };

// Create the reducer function
// const slideUpReducer = (state: SlideUpState, action: SlideUpAction): SlideUpState => {
//   switch (action.type) {
//     case 'SET_PAGE':
//       return { ...state, page: action.payload };
//     case 'SET_TEXT':
//       return { ...state, text: action.payload };
//     case 'SET_BG':
//       return { ...state, bg: action.payload };
//     case 'SET_POP':
//       return { ...state, pop: action.payload };
//     default:
//       return state;
//   }
// };

// // Initialize the state
// const initialState: SlideUpState = {
//   page: false,
//   text: false,
//   bg: false,
//   pop: false,
// };

const Index = forwardRef(function Index(props: any, ref: Ref<HTMLDivElement>) {
  const [page, setPage] = useState(1);
  const pages = ['01', '02', '03', '04', '05', '06'];
  const [curPages, setCurPages] = useState(['06', '01', '02']);
  const { componentRef, componentTop, rect } = useIsScrolledIntoView();
  const [scrollDisabled, setScrollDisabled] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const homeContext: any = useContext(HomeContext);

  // const outerPage = props.page;

  useEffect(() => {
    // const handleWheel = debouce(
    const handleWheel = (e: any) => {
      if (homeContext?.scrollDisabled) {
        e.preventDefault();
        let nextPage = page;
        if (e.deltaY > 0 && page < 6) {
          nextPage = page + 1;
          console.log('nextPag---', nextPage);
          // if (nextPage > 6) {
          //   enableScroll();
          //   return;
          // }

          setPage(nextPage);
        } else if (e.deltaY < 0 && page > 1) {
          nextPage = page - 1;
          console.log('nextPage', nextPage);

          setPage(nextPage);
        }
        const newPages = generateNewArray(nextPage);
        setCurPages(newPages);
      }
    };
    // , 300);

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [homeContext, page]);

  const mouseEnter = () => {
    console.log('enter');
    homeContext?.setScrollDisabled(true);
  };
  const mouseLeave = () => {
    console.log('leave');
    homeContext?.setScrollDisabled(false);
  };

  // useEffect(() => {
  //   if (outerPage === 3) {
  //     slideUpDispatch({ type: 'SET_PAGE', payload: true });
  //     setTimeout(() => {
  //       slideUpDispatch({ type: 'SET_BG', payload: true });
  //     }, 500);
  //     setTimeout(() => {
  //       slideUpDispatch({ type: 'SET_TEXT', payload: true });
  //     }, 1000);
  //     setTimeout(() => {
  //       slideUpDispatch({ type: 'SET_POP', payload: true });
  //     }, 1500);
  //   } else {
  //     slideUpDispatch({ type: 'SET_PAGE', payload: false });
  //     slideUpDispatch({ type: 'SET_BG', payload: false });
  //     slideUpDispatch({ type: 'SET_TEXT', payload: false });
  //     slideUpDispatch({ type: 'SET_POP', payload: false });
  //   }
  // }, [outerPage]);

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
      case 1:
        // return { backgroundImage: "url('/imgs/ill_house.png')" };
        break;
      case 5:
        // return { backgroundImage: "url('/imgs/ill_house.png')" };
        break;
      case 3:
        return {
          backgroundImage: "url('/imgs/bg_conduit.png')",
          // backgroundPositionY: '211px',
          // backgroundPositionX: 'center',
          // backgroundSize: 'contain',

          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        };
      case 4:
        return {
          backgroundImage: "url('/imgs/bg_computer.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          height: '80vh',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        };

      case 6:
        return { backgroundImage: "url('/imgs/bg_colorlump.png')" };

      default:
        return {};
    }
  }, [page]);

  // const [slideUpState, slideUpDispatch] = useReducer(slideUpReducer, initialState);

  return (
    <div
      ref={ref}
      className="relative flex h-[100vh] w-full flex-col items-center overflow-x-hidden"
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
          <div className="-mt-[70px] flex h-[113px] w-[605px] items-center justify-center bg-[url('/imgs/turntable.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>

        <div style={containerStyle()}>
          <Preview page={page} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
        </div>
      </div>
      <ReadMoreBtn className="absolute bottom-[43px] z-[999999]" href="/business_user" />
    </div>
  );
});

export default Index;
