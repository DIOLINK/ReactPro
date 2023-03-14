import { useContext } from 'react';
import NoImg from '../assets/no-image.jpg';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);
  let imageShow = NoImg;

  if (img) {
    imageShow = img;
  } else if (product.img) {
    imageShow = product.img;
  }
  return (
    <img className={styles.productImg} src={imageShow} alt="Product-Img" />
  );
};
