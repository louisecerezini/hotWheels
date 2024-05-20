import React from 'react';
import styles from './CarList.module.scss';

interface Car {
  id: number;
  name: string;
  brand: string;
}

interface CarListProps {
  cars: Car[];
}

const CarList: React.FC<CarListProps> = ({ cars }) => {
  return (
    <div className={styles.carList}>
      <h2>Lista de Carros</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - {car.brand} <button>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;