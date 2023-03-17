import { ProductCard } from '../components/ProductCard';

import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

import { product1 } from '../data/products';

import '../styles/custom-styles.css';

import styles from '../styles/styles.module.css';

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className={styles.productCardContainer}>
        <ProductCard
          className="bg-dark text-white"
          product={product1}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, isMaxCountReached, increaseBy, count }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}>+2</button>
              )}
              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
