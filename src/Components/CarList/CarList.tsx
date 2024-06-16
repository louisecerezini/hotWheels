import React from 'react';
import styles from './CarList.module.scss';
import { Car } from '../../Interfaces/Car';


interface CarListProps {
  cars: Car[];
  onDeleteCar: (id:number) => void; 
  onEditCar: (car: Car) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, onDeleteCar, onEditCar }) => {
  return (
    <div className={styles.carList}>
      <h2>Car List</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - {car.brand} - {car.color} - {car.year}
            <button onClick={() => onDeleteCar(car.id)}>Delete</button>
            <button onClick={() => onEditCar(car)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
