import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao CRUD de HotWheels!</p>
    </div>
  );
};

export default Home;