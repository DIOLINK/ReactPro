import { useState } from 'react';

interface CounterByProps {
  initialValue?: number;
}
interface CounterState {
  counter: number;
  clicks: number;
}
export const CounterBy = ({ initialValue = 5 }: CounterByProps) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleCounter = (increment = 1) => {
    setCounterState((oldCounter) => ({
      counter: oldCounter.counter + increment,
      clicks: oldCounter.clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counterState.counter}</h1>
      <h1>Clicks: {counterState.clicks}</h1>

      <button onClick={() => handleCounter()}>+1</button>
      <button onClick={() => handleCounter(5)}>+5</button>
    </>
  );
};
