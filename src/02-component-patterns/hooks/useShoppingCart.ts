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
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      //* This is another method to be removed.
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };

      //! This is another method
      // if (count === 0) {
      //   //* This is another method to be removed.
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return { ...rest };
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: {
      //     ...product,
      //     count,
      //   },
      // };
    });
  };
  return {
    shoppingCart,
    onProductCountChanged,
  };
};
