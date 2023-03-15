import { useEffect, useState } from 'react';
import { useProductArg } from '../interfaces';

const INITIAL_VALUE: number = 0;
export const useProduct = ({
  onChange,
  product,
  value = INITIAL_VALUE,
}: useProductArg) => {
  const [count, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number): void => {
    const newValue = Math.max(count + value, INITIAL_VALUE);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return { count, increaseBy };
};
