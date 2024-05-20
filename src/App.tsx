import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CarList from './Components/CarList/CarList';
import CarForm from './Components/CarForm/CarForm';

const cars = [
  { id: 1, name: 'Mustang', brand: 'Ford' },
  { id: 2, name: 'Camaro', brand: 'GM' },
  { id: 3, name: 'Ferrari', brand: 'FIAT' },
  { id: 4, name: 'Mazda', brand: 'Mazda' },
  { id: 5, name: 'F-350', brand: 'Ford' },
];

const App: React.FC = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarList cars={cars} />} />
        <Route path="/add-car" element={<CarForm />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
