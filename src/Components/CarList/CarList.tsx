import React from 'react';
import styles from './CarList.module.scss';

interface Car {
  id: number;
  name: string;
  brand: string;
}

interface CarListProps {
  cars: Car[];
  onDeleteCar: (id:number) => void; 
}

const CarList: React.FC<CarListProps> = ({ cars, onDeleteCar }) => {
  return (
    <div className={styles.carList}>
      <h2>Car List</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - {car.brand} <button onClick={()=>onDeleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;