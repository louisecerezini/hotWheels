import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import styles from './CarForm.module.scss';
import { Car } from '../../Interfaces/Car';
import { useNavigate } from 'react-router-dom';

interface CarFormProps {
  onAddCar: (car: Car) => void;
}

const CarForm: React.FC<CarFormProps> = ({ onAddCar }) => {
  const [car, setCar] = useState<Car>({
    id: 0,
    name: '',
    brand: '',
    color: '',
    year: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCar(car);
    setCar({ id: 0, name: '', brand: '', color: '', year: '' });
    navigate('/cars')
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <h2>Add Car</h2>
      <TextField
        label="Name"
        id="name"
        name="name"
        value={car.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Brand"
        id="brand"
        name="brand"
        value={car.brand}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Color"
        id="color"
        name="color"
        value={car.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Year"
        id="year"
        name="year"
        value={car.year}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default CarForm;
