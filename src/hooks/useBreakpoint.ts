import { useState, useEffect } from 'react';

const breakpoints = {
  desktop: '800px',
}

type BreakpointType = 'desktop'

const useBreakpoint = (key: BreakpointType) => {
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const breakpoint = breakpoints[key];

  useEffect(() => {
    const getMatchMedia = () => {
      const mq = window.matchMedia(`(min-width: ${breakpoint})`);
      setIsMatching(mq.matches);
    }
    getMatchMedia()
    window.addEventListener('resize', getMatchMedia);
    return () => window.removeEventListener('resize', getMatchMedia);
  }, [breakpoint])

  return isMatching;
}

export default useBreakpoint;
