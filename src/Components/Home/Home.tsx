import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <Box className={styles.home}>
      <Typography variant="h1">Home page</Typography>
      <Typography variant="body1">Welcome to HotWheels CRUD!</Typography>
      <img src="CAR.jpg" alt="carrinho hotwheels" />
    </Box>
  );
};

export default Home;
