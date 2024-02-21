import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const mobile = reg.test(navigator.userAgent);
      setState(mobile);
    }
  }, []);

  return state;
};

export const useIsMobileFn = (ua: any) => {
  const reg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return reg.test(ua);
};

export default useIsMobile;
