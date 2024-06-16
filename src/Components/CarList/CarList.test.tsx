import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarList from './CarList';
import { Car } from '../../Interfaces/Car';

const mockCars: Car[] = [
  { id: 1, name: 'Car 1', brand: 'Brand 1', color: 'Red', year: '2020' },
  { id: 2, name: 'Car 2', brand: 'Brand 2', color: 'Blue', year: '2021' }
];

const mockOnDeleteCar = jest.fn();
const mockOnEditCar = jest.fn();

describe('CarList component', () => {
  test('renders the CarList component with cars', () => {
    render(<CarList cars={mockCars} onDeleteCar={mockOnDeleteCar} onEditCar={mockOnEditCar} />);

    expect(screen.getByText('Car 1 - Brand 1 - Red - 2020')).toBeInTheDocument();
    expect(screen.getByText('Car 2 - Brand 2 - Blue - 2021')).toBeInTheDocument();
  });

  test('calls onDeleteCar with correct id when delete button is clicked', () => {
    render(<CarList cars={mockCars} onDeleteCar={mockOnDeleteCar} onEditCar={mockOnEditCar} />);

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(mockOnDeleteCar).toHaveBeenCalledWith(1);
  });

  test('calls onEditCar with correct car when edit button is clicked', () => {
    render(<CarList cars={mockCars} onDeleteCar={mockOnDeleteCar} onEditCar={mockOnEditCar} />);

    const editButtons = screen.getAllByText('Edit');
    fireEvent.click(editButtons[0]);

    expect(mockOnEditCar).toHaveBeenCalledWith(mockCars[0]);
  });
});
