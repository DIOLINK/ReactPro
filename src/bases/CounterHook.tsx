import { useCounter } from '../hooks/useCounter';

const MAXIMUM_COUNT = 10;
export const CounterHook = () => {
  const { counter, elementToAnimate, handleCounter, handleRestart } =
    useCounter({ MaxCount: MAXIMUM_COUNT });

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleCounter}>+1</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};
