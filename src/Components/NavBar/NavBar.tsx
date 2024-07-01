import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar className={styles.navbar}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HotWheels CRUD
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/cars">
          Cars
        </Button>
        <Button color="inherit" component={Link} to="/add-car">
          Add Car
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
