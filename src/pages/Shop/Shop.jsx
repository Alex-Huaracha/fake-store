import { useFetch } from '../../hooks/useFetch';
import styles from './Shop.module.css';

export const Shop = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error loading products</p>
        <span>{error.message}</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Shop</h1>
        <p>{products?.length} products available</p>
      </header>

      <div className={styles.productGrid}>
        {products?.map((product) => (
          <article key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.productInfo}>
              <h3>{product.title}</h3>
              <p className={styles.price}>${product.price}</p>

              <div className={styles.actions}>
                <div className={styles.quantityControl}>
                  <button>-</button>
                  <input type="number" defaultValue="1" min="1" />
                  <button>+</button>
                </div>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
