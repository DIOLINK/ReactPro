import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;
export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const handleCounter = (): void => {
    setCounter((oldCounter) =>
      Math.min(oldCounter + 1, MAXIMUM_COUNT),
    );
  };
  const counterElement = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    if (counter >= MAXIMUM_COUNT) {
      console.log(
        `%c Se llego al valor Maximo :>> ${MAXIMUM_COUNT}`,
        'color:#008192; font-size: 20px; background-color:#49756433; border-radius:5px;',
      );
      const timeline = gsap.timeline();

      timeline
        .to(counterElement.current, {
          y: -10,
          direction: 0.3,
          ease: 'ease.out',
        })
        .to(counterElement.current, {
          y: 0,
          direction: 1,
          ease: 'bounce.out',
        });
    }
  }, [counter]);

  const handleRestart = () => {
    setCounter(5);
  };

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleCounter}>+1</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};
