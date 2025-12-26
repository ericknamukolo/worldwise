import styles from './PageNav.module.css';
import { NavLink } from 'react-router-dom';

export default function PageNav() {
  const paths: {
    path: string;
    name: string;
  }[] = [
    { path: '/', name: 'Home' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/product', name: 'Product' },
  ];
  return (
    <nav className={styles.nav}>
      {paths.map((path) => (
        <ul>
          <li>
            <NavLink to={path.path}>{path.name}</NavLink>
          </li>
        </ul>
      ))}
    </nav>
  );
}
