import { useCallback, useContext } from 'react';

import { ProductContext } from './ProductCard';
import { ProductButtonProps } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductButtons = ({ className, style }: ProductButtonProps) => {
  const { count, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && maxCount === count,
    [count, maxCount],
  );

  const isMinReached = useCallback(() => count === 0, [count]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        onClick={() => increaseBy(-1)}
        className={`${styles.buttonMinus} ${isMinReached() && styles.disabled}`}
      >
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
