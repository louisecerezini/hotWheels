import React, { useState } from 'react';
import styles from './CarForm.module.scss';

const CarForm: React.FC = () => {
  const [car, setCar] = useState({
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
    console.log(car);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" value={car.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="brand">Marca:</label>
        <input type="text" id="brand" name="brand" value={car.brand} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="color">Cor:</label>
        <input type="text" id="color" name="color" value={car.color} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="year">Ano:</label>
        <input type="text" id="year" name="year" value={car.year} onChange={handleChange} />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default CarForm;