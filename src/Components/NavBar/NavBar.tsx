import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/add-car">Add Car</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;