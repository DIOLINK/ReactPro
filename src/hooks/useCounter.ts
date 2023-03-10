import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
export const useCounter = ({ MaxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!timeline.current) return;
    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        direction: 0.3,
        ease: 'ease.out',
      })
      .to(elementToAnimate.current, {
        y: 0,
        direction: 1,
        ease: 'bounce.out',
      })
      .pause();
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  const handleCounter = (): void => {
    setCounter((oldCounter) => Math.min(oldCounter + 1, MaxCount));
  };

  const handleRestart = () => {
    setCounter(5);
  };
  return {
    handleRestart,
    handleCounter,
    elementToAnimate,
    counter,
  };
};
