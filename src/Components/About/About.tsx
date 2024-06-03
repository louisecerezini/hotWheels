import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>This is an application for a HotWheels car CRUD.</p>
    </div>
  );
};

export default About;