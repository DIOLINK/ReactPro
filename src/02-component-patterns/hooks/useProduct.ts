import { useState } from 'react';

export interface ProductProps {
  counter: number;
  increaseBy: (value: number) => void;
}
const INITIAL_VALUE: number = 0;
export const useProduct = (): ProductProps => {
  const [counter, setCounter] = useState(INITIAL_VALUE);

  const increaseBy = (value: number): void =>
    setCounter((preValue) => Math.max(preValue + value, INITIAL_VALUE));
  return { counter, increaseBy };
};
