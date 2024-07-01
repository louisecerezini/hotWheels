import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CarList from "./Components/CarList/CarList";
import CarForm from "./Components/CarForm/CarForm";
import { Car } from "./Interfaces/Car";
import CarEditForm from "./Components/CarEditForm/carEditForm";

const App = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleDeleteCar = (id: number) => {
    axios
      .delete(`http://localhost:5000/cars/${id}`)
      .then(() => {
        setCars(cars.filter((car) => car.id !== id));
      })
      .catch((error) => console.error("Error deleting car:", error));
  };

  const handleAddCar = (newCar: Car) => {
    axios
      .post("http://localhost:5000/cars", newCar)
      .then((response) => {
        setCars((prevCars) => [...prevCars, response.data]);
      })
      .catch((error) => console.error("Error adding car:", error));
  };
  const handleEditCar = (car: Car) => {
    setEditingCar(car);
  };

  const handleSaveCar = (updatedCar: Car) => {
    axios
      .put(`http://localhost:5000/cars`, updatedCar)
      .then(() => {
        setCars(
          cars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
        );
        setEditingCar(null);
      })
      .catch((error) => console.error("Error updating car:", error));
  };

  const handleCancelEdit = () => {
    setEditingCar(null);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cars"
          element={
            editingCar ? (
              <CarEditForm
                car={editingCar}
                onSaveCar={handleSaveCar}
                onCancel={handleCancelEdit}
              />
            ) : (
              <CarList
                cars={cars}
                onDeleteCar={handleDeleteCar}
                onEditCar={handleEditCar}
              />
            )
          }
        />
        <Route path="/add-car" element={<CarForm onAddCar={handleAddCar} />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
