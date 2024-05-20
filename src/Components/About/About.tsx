import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre</h1>
      <p>Esta é uma aplicação para um CRUD de carros HotWheels.</p>
    </div>
  );
};

export default About;