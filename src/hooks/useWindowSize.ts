import { useCallback, useState, useEffect, useMemo } from 'react';

export const useWindowSize = () => {
  const getWindowSize = useCallback(() => {
    return {
      width: window?.innerWidth ?? 0,
      height: window?.innerHeight ?? 0,
    };
  }, []);
  const [windowSizes, setWindowSizes] = useState(getWindowSize());
  useEffect(() => {
    const onResize = () => {
      console.log('resized');
      setWindowSizes(getWindowSize());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getWindowSize]);
  return windowSizes;
};
