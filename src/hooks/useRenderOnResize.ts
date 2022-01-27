import { useEffect, useState } from 'react';

export const useRenderOnResize = () => {
  const [_, reRender] = useState(false);
  useEffect(() => {
    const handleResize = () => reRender(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};
