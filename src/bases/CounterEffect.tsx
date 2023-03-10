import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;
export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const handleCounter = (): void => {
    setCounter((oldCounter) =>
      Math.min(oldCounter + 1, MAXIMUN_COUNT),
    );
  };

  useEffect(() => {
    if (counter >= MAXIMUN_COUNT) {
      console.log(
        `%c Se llego al valor Maximo :>> ${MAXIMUN_COUNT}`,
        'color:#008192; font-size: 20px; background-color:#49756433; border-radius:5px;',
      );
    }
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleCounter}>+1</button>
    </>
  );
};
