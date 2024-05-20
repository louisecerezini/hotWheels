import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/cars">Carros</Link></li>
        <li><Link to="/add-car">Adicionar Carro</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;