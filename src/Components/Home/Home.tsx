import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Home page</h1>
      <p>Welcome to HotWheels CRUD!</p>
    </div>
  );
};

export default Home;