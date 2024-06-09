import React, { useState } from 'react';
import styles from './CarForm.module.scss';
import { Car } from '../../Interfaces/Car';

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
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
       <h2>Add Car</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={car.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" value={car.brand} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" name="color" value={car.color} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" value={car.year} onChange={handleChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default CarForm;
