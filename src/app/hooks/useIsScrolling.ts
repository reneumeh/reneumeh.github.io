
import { useState, useEffect, useCallback } from 'react';
import useIsMobile from './useIsMobile';

const useIsScrolling = () => {
    const [isScrolling, setScrolling] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 140) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const scrollToElement = (ref: any, position = 'start') => {
        ref.current?.scrollIntoView({
            behavior: isMobile ? 'auto' : 'smooth',
            block: position,
        });
    };

    const resetScroll = useCallback(() => {
      window.scrollTo(0, 0);
    }, []); 

    return { isScrolling, scrollToElement, resetScroll };
};

export default useIsScrolling;
