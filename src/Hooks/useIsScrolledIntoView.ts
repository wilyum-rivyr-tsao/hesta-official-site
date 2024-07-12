import { debounce } from 'lodash';
import { useState, useEffect, useRef, RefObject } from 'react';

const useIsScrolledIntoView = (): {
  componentRef: RefObject<HTMLDivElement>;
  componentTop: number;
  rect?: DOMRect;
} => {
  const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
  const [componentTop, setComponentTop] = useState(0);
  const [rect, setrect] = useState<DOMRect>();
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setrect(rect);

        // const componentHeight = rect.height;
        // const componentMidPoint = rect.top + componentHeight / 3;
        // console.log('rect', rect);
        const isVisible = rect.top < 100;
        // const isVisible = rect.top < window.innerHeight && rect.bottom > -100;
        // const isVisible = componentMidPoint >= 0 && componentMidPoint <= window.innerHeight;

        setIsScrolledIntoView(isVisible);
        setComponentTop(rect.top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { componentRef, componentTop, rect };
};

export default useIsScrolledIntoView;
