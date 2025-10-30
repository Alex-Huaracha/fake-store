import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

export const Navbar = () => {
  // Hardcoded por ahora, luego vendrá del CartContext
  const cartItemsCount = 0;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>The Gamer's Vault</h1>
        <svg className={styles.icon}>
          <use href="#icon-logo1"></use>
        </svg>
        <svg className={styles.icon}>
          <use href="#icon-logo2"></use>
        </svg>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Cart
            {cartItemsCount > 0 && (
              <span className={styles.badge}>{cartItemsCount}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
