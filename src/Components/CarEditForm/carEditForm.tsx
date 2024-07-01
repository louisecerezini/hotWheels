import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import styles from './CarEditForm.module.scss';
import { Car } from '../../Interfaces/Car';

interface CarEditFormProps {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancel: () => void;
}

const CarEditForm: React.FC<CarEditFormProps> = ({ car, onSaveCar, onCancel }) => {
  const [editedCar, setEditedCar] = useState<Car>(car);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCar({
      ...editedCar,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveCar(editedCar);
  };

  useEffect(() => {
    setEditedCar(car);
  }, [car]);

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.form}>
      <h2>Edit Car</h2>
      <TextField
        label="Name"
        id="name"
        name="name"
        value={editedCar.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Brand"
        id="brand"
        name="brand"
        value={editedCar.brand}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Color"
        id="color"
        name="color"
        value={editedCar.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Year"
        id="year"
        name="year"
        value={editedCar.year}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button type="button" variant="outlined" onClick={onCancel} sx={{ ml: 2 }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default CarEditForm;
