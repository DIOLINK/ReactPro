import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChanged = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        //* This is another method to be removed.
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return { ...rest };
      }
      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChanged,
  };
};
