import React from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';
import styles from './CarList.module.scss';
import { Car } from '../../Interfaces/Car';

interface CarListProps {
  cars: Car[];
  onDeleteCar: (id: number) => void;
  onEditCar: (car: Car) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, onDeleteCar, onEditCar }) => {
  return (
    <Box className={styles.carList}>
      <h2>Car List</h2>
      <List>
        {cars.map(car => (
          <ListItem key={car.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={`${car.name} - ${car.brand} - ${car.color} - ${car.year}`} />
            <Box>
              <Button variant="outlined" color="primary" onClick={() => onEditCar(car)}>
                Edit
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => onDeleteCar(car.id)} sx={{ ml: 1 }}>
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CarList;
