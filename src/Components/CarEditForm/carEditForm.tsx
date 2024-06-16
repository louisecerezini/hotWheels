import React, { useState, useEffect } from 'react';
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
    <form onSubmit={handleSubmit} className={styles.form}>
    <h2>Edit Car</h2>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={editedCar.name} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="brand">Brand:</label>
      <input type="text" id="brand" name="brand" value={editedCar.brand} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="color">Color:</label>
      <input type="text" id="color" name="color" value={editedCar.color} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="year">Year:</label>
      <input type="text" id="year" name="year" value={editedCar.year} onChange={handleChange} />
    </div>
    <button type="submit">Save</button>
    <button type="button" onClick={onCancel}>Cancel</button>
  </form>
);
};

export default CarEditForm;
