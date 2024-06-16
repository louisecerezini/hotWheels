import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarEditForm from './carEditForm';
import { Car } from '../../Interfaces/Car';

const mockCar: Car = {
  id: 1,
  name: 'Test Car',
  brand: 'Test Brand',
  color: 'Test Color',
  year: '2020'
};

const mockOnSaveCar = jest.fn();
const mockOnCancel = jest.fn();

describe('CarEditForm component', () => {
  test('renders the CarEditForm component with initial values', () => {
    render(<CarEditForm car={mockCar} onSaveCar={mockOnSaveCar} onCancel={mockOnCancel} />);

    expect(screen.getByLabelText('Name:')).toHaveValue(mockCar.name);
    expect(screen.getByLabelText('Brand:')).toHaveValue(mockCar.brand);
    expect(screen.getByLabelText('Color:')).toHaveValue(mockCar.color);
    expect(screen.getByLabelText('Year:')).toHaveValue(mockCar.year);
  });

  test('handles input change correctly', () => {
    render(<CarEditForm car={mockCar} onSaveCar={mockOnSaveCar} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'New Car Name' } });
    expect(nameInput).toHaveValue('New Car Name');

    const brandInput = screen.getByLabelText('Brand:');
    fireEvent.change(brandInput, { target: { value: 'New Brand' } });
    expect(brandInput).toHaveValue('New Brand');
  });

  test('calls onSaveCar with updated car data on form submission', () => {
    render(<CarEditForm car={mockCar} onSaveCar={mockOnSaveCar} onCancel={mockOnCancel} />);

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Updated Car Name' } });
    fireEvent.change(screen.getByLabelText('Brand:'), { target: { value: 'Updated Brand' } });

    fireEvent.submit(screen.getByRole('button', { name: /save/i }));

    expect(mockOnSaveCar).toHaveBeenCalledWith({
      ...mockCar,
      name: 'Updated Car Name',
      brand: 'Updated Brand'
    });
  });

  test('calls onCancel when the cancel button is clicked', () => {
    render(<CarEditForm car={mockCar} onSaveCar={mockOnSaveCar} onCancel={mockOnCancel} />);

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
