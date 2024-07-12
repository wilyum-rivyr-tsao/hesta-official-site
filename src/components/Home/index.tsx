'use client';
import { useTranslations } from 'next-intl';
import {
  createContext,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Cases from '@/components/Home/Cases';
import AppPreview from '@/components/Home/AppPreview';
import CustomerUser from '@/components/Home/CustomerUser/CustomerUser';
import BusinessUser from '@/components/Home/BusinessUser/BusinessUser';
import Screen1 from '@/components/Home/Screen1';
import Foorter from '@/components/Footer';
import debouce from 'lodash/debounce';
import { useAnimation, motion, AnimatePresence, useAnimate } from 'framer-motion';
import { throttle } from 'lodash';
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client

export const HomeContext: any = createContext(null);

function Home() {
  const t = useTranslations();

  const [screen, animate] = useAnimate();

  const screen1 = useRef<HTMLDivElement>(null);
  const screen2 = useRef<HTMLDivElement>(null);
  const screen3 = useRef<HTMLDivElement>(null);
  const screen4 = useRef<HTMLDivElement>(null);
  const screen5 = useRef<HTMLDivElement>(null);
  const screen6 = useRef<HTMLDivElement>(null);

  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [page, setPage] = useState(1);
  const [deltaY, setdeltaY] = useState(0);

  const scrollContent = (event: any) => {
    console.log('deltaY', event.deltaY);
    if (!scrollDisabled && (page < 6 || page >= 2)) {
      if (event.deltaY > 0 && page < 6) {
        setPage((prevPage) => {
          const tempPage = prevPage + 1;
          if (tempPage <= 6) {
            return tempPage;
          }
          return prevPage;
        });
      } else if (event.deltaY < 0 && page >= 2) {
        setPage((prevPage) => {
          if (prevPage - 1 >= 1) {
            return prevPage - 1;
          }
          return prevPage;
        });
      }
    }
  };

  const nextPageClick = () => {
    fullpageApi?.moveTo(2);
  };

  const [fullpageApi, setfullpageApi] = useState<any>(null);

  useEffect(() => {
    fullpageApi?.setAllowScrolling(!scrollDisabled);
  }, [scrollDisabled, fullpageApi]);

  useEffect(() => {
    document.getElementsByClassName('fp-watermark')[0]?.remove();
  }, []);

  return (
    <HomeContext.Provider value={{ scrollDisabled, setScrollDisabled }}>
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        onLeave={(origin, destination, direction) => {
          console.log(`Leaving section ${origin.index} to go to section ${destination.index}`);
        }}
        afterLoad={(origin, destination, direction) => {
          console.log(`Section ${destination.index} loaded`);
          setPage(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          setfullpageApi(fullpageApi);
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Screen1 nextPage={nextPageClick} />
              </div>

              <div className="section">
                <BusinessUser page={page} />
              </div>

              <div className="section">
                <AppPreview page={page} />
              </div>

              <div className="section">
                <CustomerUser page={page} />
              </div>

              <div className="section">
                <Cases page={page} />
              </div>

              <div className="section">
                <Foorter className="!h-[100vh]" />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </HomeContext.Provider>
  );
}

export default Home;
