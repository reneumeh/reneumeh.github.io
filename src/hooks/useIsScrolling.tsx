import useIsMobile from './useIsMobile';
import { useState } from 'react';

const useIsScrolling = () => {
    const [isScrolling, setScrolling] = useState(false);
    const isMobile = useIsMobile();

    window.addEventListener("scroll", () => {
        if (window.scrollY > 140) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
    });

    const scrollToElement = (ref: any, position= "start") => {
        ref.current?.scrollIntoView({ behavior: isMobile ? 'auto' :'smooth' , block: position });
        };
    
        return {isScrolling, scrollToElement}
}

export default useIsScrolling