import { useContext } from 'react';
import NoImg from '../assets/no-image.jpg';

import { ProductContext } from './ProductCard';
import { ProductImageProps } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductImage = ({
  img = '',
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imageShow = NoImg;

  if (img) {
    imageShow = img;
  } else if (product.img) {
    imageShow = product.img;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imageShow}
      alt="Product-Img"
    />
  );
};
