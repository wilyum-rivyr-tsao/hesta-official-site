import { useCallback } from 'react';

const useScrollToNext = () => {
  const scrollToNext = useCallback((nextEleRef: any) => {
    if (nextEleRef?.current) {
      nextEleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return scrollToNext;
};

export default useScrollToNext;
