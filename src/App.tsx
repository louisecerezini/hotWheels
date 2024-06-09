import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CarList from './Components/CarList/CarList';
import CarForm from './Components/CarForm/CarForm';
import { Car } from './Interfaces/Car';

const App = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/cars')
      .then(response => setCars(response.data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const handleDeleteCar = (id: number) => {
    setCars(cars.filter(car => car.id !== id));
    // Você pode adicionar a lógica para deletar o carro na API aqui.
  };

  const handleAddCar = (newCar: Car) => {
    axios.post('http://localhost:5000/cars', newCar)
      .then(response => setCars(prevCars => [...prevCars, response.data]))
      .catch(error => console.error('Error adding car:', error));
  };

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarList cars={cars} onDeleteCar={handleDeleteCar} />} />
        <Route path="/add-car" element={<CarForm onAddCar={handleAddCar} />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
