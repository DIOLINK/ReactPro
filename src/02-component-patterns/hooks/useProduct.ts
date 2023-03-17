import { useEffect, useRef, useState } from 'react';
import { useProductArg } from '../interfaces';

const DEFAULT_VALUE: number = 0;
export const useProduct = ({
  onChange,
  product,
  value = DEFAULT_VALUE,
  initialValues,
}: useProductArg) => {
  const [counter, setCounter] = useState<number>(DEFAULT_VALUE);

  const isMounted = useRef(false);

  const increaseBy = (value: number): void => {
    let newValue = Math.min(
      Math.max(counter + value, DEFAULT_VALUE),
      initialValues?.maxCount || Math.max(counter + value, DEFAULT_VALUE),
    );
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || DEFAULT_VALUE);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [value, initialValues?.count]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    count: counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.maxCount && initialValues?.maxCount === counter,
    increaseBy,
    reset,
  };
};
