import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import { ProductButtonProps } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductButtons = ({ className, style }: ProductButtonProps) => {
  const { count, increaseBy } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
