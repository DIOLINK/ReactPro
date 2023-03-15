import { createContext } from 'react';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

import { ProductContextProps, ProductCardProps } from '../interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  className,
  onChange,
  product,
  style,
  value,
}: ProductCardProps) => {
  const { count, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
