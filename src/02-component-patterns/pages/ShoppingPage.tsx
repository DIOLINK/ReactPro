import { ProductCard } from '../components/ProductCard';

import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButtons } from '../components/ProductButtons';

import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

import '../styles/custom-styles.css';

import styles from '../styles/styles.module.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChanged } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className={styles.productCardContainer}>
        {products.map((product) => (
          <ProductCard
            className="bg-dark text-white"
            key={product.id}
            product={product}
            onChange={onProductCountChanged}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.2)' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            className="bg-dark text-white"
            product={{ ...product }}
            style={{ width: '100px' }}
            onChange={onProductCountChanged}
            value={product.count}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgb(0,0,0,0.2)' }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
